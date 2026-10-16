import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  businessName?: string;
  phone?: string;
  email?: string;
  website?: string;
  message?: string;
  _hp_company?: string;
}

// In-memory rate limiter with periodic cleanup: IP -> count & expiresAt
interface RateLimitRecord {
  count: number;
  expiresAt: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

function getClientIp(request: Request): string {
  // 1. x-real-ip is set by reverse proxy/Vercel edge and cannot be forged by clients
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  // 2. x-vercel-forwarded-for
  const vercelForwarded = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  if (vercelForwarded) return vercelForwarded;

  // 3. Fallback to right-most trusted entry or first in standard x-forwarded-for
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const parts = forwardedFor.split(",").map((p) => p.trim()).filter(Boolean);
    if (parts.length > 0) {
      return parts[0];
    }
  }

  return "127.0.0.1";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  // Periodic pruning if cache exceeds 500 entries to prevent memory growth
  if (rateLimitMap.size > 500) {
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.expiresAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  const record = rateLimitMap.get(ip);
  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

function maskEmail(email: string): string {
  const parts = email.split("@");
  if (parts.length !== 2) return "***@***.***";
  const [local, domain] = parts;
  const maskedLocal = local.length <= 2 ? `${local[0]}***` : `${local[0]}***${local[local.length - 1]}`;
  return `${maskedLocal}@${domain}`;
}

function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length <= 4) return "****";
  return `***-***-${digits.slice(-4)}`;
}

export async function POST(request: Request) {
  try {
    // 1. Content-Length and Size Limit Check (Max 32 KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 32 * 1024) {
      return NextResponse.json(
        {
          success: false,
          error: "Payload size exceeds maximum allowed limit (32 KB). Please shorten your enquiry.",
        },
        { status: 413 }
      );
    }

    // 2. Client IP Extraction & Instance Rate Limiting
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please try again later or reach out directly via WhatsApp or phone.",
        },
        { status: 429 }
      );
    }

    // 3. Safe JSON Body Parsing
    const body: ContactRequestBody = await request.json().catch(() => ({}));

    // 4. Honeypot Check (Spam Bot Protection)
    if (body._hp_company && body._hp_company.trim() !== "") {
      // Silent drop: synthetic reference ID, no PII logging, no external dispatch
      const syntheticRef = `SMB-HP-${Date.now().toString(36).toUpperCase()}`;
      return NextResponse.json({
        success: true,
        referenceId: syntheticRef,
        delivered: false,
        deliveryMode: "manual_fallback",
        message: "Thank you for reaching out. Your enquiry has been received.",
      });
    }

    // 5. Input Extraction and Field Length Restrictions
    const name = (body.name || "").trim();
    const businessName = (body.businessName || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const website = (body.website || "").trim();
    const message = (body.message || "").trim();

    // Check for control characters / CRLF injection in header-sensitive fields
    if (/[\r\n]/.test(name) || /[\r\n]/.test(businessName) || /[\r\n]/.test(email) || /[\r\n]/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Invalid line breaks or control characters detected." },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    if (businessName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Business name must be at least 2 characters long." },
        { status: 400 }
      );
    }
    if (businessName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Business name must not exceed 100 characters." },
        { status: 400 }
      );
    }

    // Phone Validation: at least 8 digits, reasonable international syntax
    const phoneSyntax = /^[+]?[\d\s\-()]{8,30}$/;
    const phoneDigitsOnly = phone.replace(/\D/g, "");
    if (!phoneSyntax.test(phone) || phoneDigitsOnly.length < 8 || phoneDigitsOnly.length > 15) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number with 8 to 15 digits." },
        { status: 400 }
      );
    }

    // RFC-compliant email syntax check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email) || email.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address (max 100 characters)." },
        { status: 400 }
      );
    }

    if (website) {
      if (website.length > 255) {
        return NextResponse.json(
          { success: false, error: "Website URL must not exceed 255 characters." },
          { status: 400 }
        );
      }
      try {
        const parsed = new URL(website);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
          throw new Error("Invalid protocol");
        }
      } catch {
        return NextResponse.json(
          { success: false, error: "Provided website URL must be a valid http or https link." },
          { status: 400 }
        );
      }
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message must not exceed 2,000 characters." },
        { status: 400 }
      );
    }

    // 6. Generate Traceable Reference ID
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `SMB-${todayStr}-${randomSuffix}`;

    // 7. Webhook Delivery Integration with Timeout and Error Isolation
    const webhookUrl = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
    let delivered = false;

    if (!webhookUrl) {
      // Clear operator warning in server logs regarding missing configuration
      console.warn(
        `[OPERATOR_WARNING] CONTACT_NOTIFICATION_WEBHOOK_URL is not set. Submissions cannot be automatically dispatched to external channels for Ref ${referenceId}. Operating in manual fallback mode.`
      );
    } else {
      let targetUrl: URL | null = null;
      try {
        targetUrl = new URL(webhookUrl);
      } catch {
        console.warn(`[OPERATOR_WARNING] CONTACT_NOTIFICATION_WEBHOOK_URL is malformed. Dispatch skipped for Ref ${referenceId}.`);
      }

      if (targetUrl) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);

          const webhookRes = await fetch(targetUrl.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              referenceId,
              name,
              businessName,
              phone,
              email,
              website,
              message,
              submittedAt: new Date().toISOString(),
            }),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (webhookRes.ok) {
            delivered = true;
          } else {
            console.error(
              `[WEBHOOK_ERROR] External notification returned HTTP ${webhookRes.status} for Ref ${referenceId}`
            );
          }
        } catch (webhookErr) {
          const errName = webhookErr instanceof Error ? webhookErr.name : "UnknownError";
          if (errName === "AbortError") {
            console.error(`[WEBHOOK_TIMEOUT] External notification timed out after 4000ms for Ref ${referenceId}`);
          } else {
            console.error(`[WEBHOOK_ERROR] External notification failed for Ref ${referenceId}: ${errName}`);
          }
        }
      }
    }

    // 8. Sanitized Server Audit Log (Zero PII: no raw name, phone, email, or message)
    console.log(
      `[CONTACT_SUBMISSION] Ref: ${referenceId} | Email: ${maskEmail(email)} | Phone: ${maskPhone(phone)} | Delivered: ${delivered}`
    );

    // 9. Transparent Client Response (Does not mislead client when external delivery has not occurred)
    const deliveryMode = delivered ? "automated_dispatch" : "manual_fallback";
    const userMessage = delivered
      ? "Thank you! Your enquiry has been received and dispatched to our team. We will be in touch promptly."
      : "Your enquiry details have been verified and prepared. Please use WhatsApp or phone for immediate discussion.";

    return NextResponse.json({
      success: true,
      referenceId,
      delivered,
      deliveryMode,
      message: userMessage,
    });
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process enquiry at this moment. Please connect with us directly via WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
