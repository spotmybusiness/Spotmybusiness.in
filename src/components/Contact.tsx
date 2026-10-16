"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Loader2,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";

interface FormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  website?: string;
  message?: string;
}

const validateName = (value: string) => {
  const trimmed = value.trim();
  if (trimmed.length < 2) return "Name must be at least 2 characters";
  if (trimmed.length > 100) return "Name must not exceed 100 characters";
  if (/[\r\n]/.test(trimmed)) return "Line breaks are not allowed";
  return true;
};

const validateBusinessName = (value: string) => {
  const trimmed = value.trim();
  if (trimmed.length < 2) return "Business name must be at least 2 characters";
  if (trimmed.length > 100) return "Business name must not exceed 100 characters";
  if (/[\r\n]/.test(trimmed)) return "Line breaks are not allowed";
  return true;
};

const validatePhone = (value: string) => {
  const trimmed = value.trim();
  const digitsOnly = trimmed.replace(/\D/g, "");
  if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    return "Please enter a valid phone number (8-15 digits)";
  }
  if (!/^[+]?[\d\s\-()]{8,30}$/.test(trimmed)) {
    return "Please enter valid phone characters (e.g. +91 9007960333)";
  }
  return true;
};

const validateEmail = (value: string) => {
  const trimmed = value.trim();
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
    return "Please enter a valid email address";
  }
  if (trimmed.length > 100) return "Email must not exceed 100 characters";
  if (/[\r\n]/.test(trimmed)) return "Line breaks are not allowed";
  return true;
};

const validateWebsite = (value?: string) => {
  if (!value || !value.trim()) return true;
  const trimmed = value.trim();
  if (trimmed.length > 255) return "URL must not exceed 255 characters";

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return "URL must begin with http:// or https://";
    }
    return true;
  } catch {
    return "Invalid URL (e.g. https://example.com)";
  }
};

export default function Contact({
  hideSidebar = false,
}: {
  hideSidebar?: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<"automated_dispatch" | "manual_fallback">("manual_fallback");
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [lastSubmittedBody, setLastSubmittedBody] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      email: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const bodyText = [
      "Hello Spot My Business Team,",
      "",
      "I would like to discuss my digital presence, SEO, Google Business Profile, Google Maps, or website needs.",
      "",
      `Name: ${data.name.trim()}`,
      `Business Name: ${data.businessName.trim()}`,
      `Phone: ${data.phone.trim()}`,
      `Email: ${data.email.trim()}`,
      `Website: ${data.website?.trim() || "N/A"}`,
      `Message: ${data.message?.trim() || "N/A"}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          businessName: data.businessName.trim(),
          phone: data.phone.trim(),
          email: data.email.trim(),
          website: data.website?.trim(),
          message: data.message?.trim(),
          _hp_company: honeypot,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to process enquiry. Please try again or reach out directly."
        );
      }

      setReferenceId(result.referenceId || "SMB-CONFIRMED");
      setDeliveryMode(result.deliveryMode === "automated_dispatch" ? "automated_dispatch" : "manual_fallback");
      setLastSubmittedBody(bodyText);
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out directly.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (!lastSubmittedBody) return;
    const clipboardText = referenceId
      ? `[Ref: ${referenceId}]\n\n${lastSubmittedBody}`
      : lastSubmittedBody;

    navigator.clipboard.writeText(clipboardText).then(() => {
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2500);
    });
  };

  const whatsappDirectUrl = `https://wa.me/919007960333?text=${encodeURIComponent(
    `Hello Spot My Business! My enquiry reference is ${referenceId || "SMB-ENQUIRY"}.\n\n${lastSubmittedBody}`
  )}`;

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-secondary-bg overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`grid grid-cols-1 gap-12 lg:gap-16 items-start ${
            hideSidebar ? "" : "lg:grid-cols-12"
          }`}
        >
          {/* Left Column: Copy & Info — hidden when embedded in /contact/ which has its own cards */}
          {!hideSidebar && (
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
                  GET STARTED
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
                  LET&apos;S STRENGTHEN YOUR DIGITAL PRESENCE
                </h2>
                <p className="text-gray-text text-base leading-relaxed">
                  Tell us where your business is today and what you would like to
                  improve. We can discuss your website, SEO, Google Business
                  Profile, Google Maps, and reputation needs.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-border-color/60">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-text/50">
                      Email Support
                    </span>
                    <a
                      href="mailto:smb.spot.my.business@gmail.com"
                      className="text-sm font-semibold text-heading hover:text-light-bronze transition-colors mt-0.5 block break-all"
                    >
                      smb.spot.my.business@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-text/50">
                      Direct Hotline
                    </span>
                    <p className="text-sm font-semibold text-heading mt-0.5">
                      <a
                        href="tel:+919007960333"
                        className="hover:text-light-bronze transition-colors"
                      >
                        +91 9007960333
                      </a>
                      {" / "}
                      <a
                        href="tel:+918597913452"
                        className="hover:text-light-bronze transition-colors"
                      >
                        +91 8597913452
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-text/50">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/919007960333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-heading hover:text-light-bronze transition-colors mt-0.5 block"
                    >
                      +91 9007960333 (Chat Directly)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-text/50">
                      Business Hours
                    </span>
                    <p className="text-sm font-semibold text-heading mt-0.5">
                      Monday – Sunday: Open 24 Hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-text/50">
                      Our Location
                    </span>
                    <p className="text-sm font-semibold text-heading mt-0.5">
                      Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal
                      700075
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Lead Form */}
          <div
            className={
              hideSidebar ? "w-full max-w-2xl mx-auto" : "lg:col-span-7"
            }
          >
            <div className="glass-panel border border-border-color rounded-2xl p-8 md:p-10 relative">
              {!submitSuccess ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                  aria-label="Contact and project enquiry form"
                >
                  {/* Honeypot field (hidden from visual users and assistive tech) */}
                  <div
                    className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <label htmlFor="_hp_company">Company Website URL</label>
                    <input
                      type="text"
                      id="_hp_company"
                      name="_hp_company"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-center gap-2.5 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        id="name"
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        {...register("name", { validate: validateName })}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="name"
                        className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Your Name *
                      </label>
                      {errors.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="text-[10px] text-red-400 mt-1"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Business Name Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        id="businessName"
                        aria-required="true"
                        aria-invalid={errors.businessName ? "true" : "false"}
                        aria-describedby={
                          errors.businessName ? "businessName-error" : undefined
                        }
                        {...register("businessName", {
                          validate: validateBusinessName,
                        })}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="businessName"
                        className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Business Name *
                      </label>
                      {errors.businessName && (
                        <p
                          id="businessName-error"
                          role="alert"
                          className="text-[10px] text-red-400 mt-1"
                        >
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="tel"
                        id="phone"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        {...register("phone", { validate: validatePhone })}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="phone"
                        className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number *
                      </label>
                      {errors.phone && (
                        <p
                          id="phone-error"
                          role="alert"
                          className="text-[10px] text-red-400 mt-1"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="email"
                        id="email"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email", { validate: validateEmail })}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email Address *
                      </label>
                      {errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="text-[10px] text-red-400 mt-1"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Website URL Field */}
                  <div className="relative z-0 w-full group">
                    <input
                      type="url"
                      id="website"
                      aria-required="false"
                      aria-invalid={errors.website ? "true" : "false"}
                      aria-describedby={
                        errors.website ? "website-error" : undefined
                      }
                      {...register("website", { validate: validateWebsite })}
                      placeholder=" "
                      className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                    />
                    <label
                      htmlFor="website"
                      className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Business Website URL (optional)
                    </label>
                    {errors.website && (
                      <p
                        id="website-error"
                        role="alert"
                        className="text-[10px] text-red-400 mt-1"
                      >
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative z-0 w-full group">
                    <textarea
                      id="message"
                      aria-required="false"
                      {...register("message")}
                      placeholder=" "
                      rows={3}
                      className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Tell us about your goals (optional)
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-bronze to-light-bronze font-heading text-xs tracking-[0.25em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <span>Start a Conversation</span>
                    )}
                  </button>
                </form>
              ) : (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <CheckCircle2
                    className="w-16 h-16 text-light-bronze mb-5 animate-pulse"
                    aria-hidden="true"
                  />

                  {deliveryMode === "automated_dispatch" ? (
                    <>
                      <h3 className="text-2xl font-heading font-bold text-heading">
                        ENQUIRY TRANSMITTED
                      </h3>
                      {referenceId && (
                        <span className="mt-2 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1 text-xs font-mono text-green-400">
                          Dispatched (Ref: {referenceId})
                        </span>
                      )}
                      <p className="text-gray-text text-sm max-w-md mt-4 leading-relaxed">
                        Thank you! Your enquiry has been received and securely dispatched to our team. We will review your project details and get back to you promptly.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-heading font-bold text-heading">
                        ENQUIRY DETAILS PREPARED
                      </h3>
                      {referenceId && (
                        <span className="mt-2 inline-block rounded-full border border-bronze/30 bg-bronze/10 px-3.5 py-1 text-xs font-mono text-light-bronze">
                          Ref: {referenceId}
                        </span>
                      )}
                      <p className="text-gray-text text-sm max-w-md mt-4 leading-relaxed">
                        Your enquiry summary has been verified and packaged. To ensure immediate attention while external notification channels are pending operator setup, please send your details directly via WhatsApp or phone.
                      </p>
                    </>
                  )}

                  {/* Primary Fallback Action: WhatsApp */}
                  <div className="mt-6 w-full max-w-xs">
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-bronze to-light-bronze text-xs font-heading font-bold tracking-wider uppercase text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-200 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-green-400" aria-hidden="true" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                  </div>

                  {/* Secondary Actions */}
                  <div className="mt-4 flex flex-wrap gap-3 justify-center w-full max-w-xs">
                    <a
                      href="tel:+919007960333"
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-border-color bg-secondary-bg hover:border-bronze/50 text-xs font-heading font-semibold tracking-wider uppercase text-heading transition-all duration-200"
                    >
                      <Phone className="w-4 h-4 text-light-bronze" aria-hidden="true" />
                      <span>Call Directly</span>
                    </a>

                    <button
                      onClick={copyToClipboard}
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-border-color bg-secondary-bg hover:border-bronze/50 text-xs font-heading font-semibold tracking-wider uppercase text-heading transition-all duration-200 cursor-pointer"
                    >
                      {copiedPayload ? (
                        <>
                          <Check className="w-4 h-4" aria-hidden="true" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setReferenceId(null);
                    }}
                    className="mt-8 px-6 py-2.5 rounded-full border border-border-color hover:border-bronze/50 text-xs tracking-wider uppercase font-semibold text-gray-text hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
