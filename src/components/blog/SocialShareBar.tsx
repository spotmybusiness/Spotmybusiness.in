"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Link2, Check } from "lucide-react";

interface SocialShareBarProps {
  title: string;
  url: string;
}

export default function SocialShareBar({ title, url }: SocialShareBarProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const lastMessageRef = useRef<string>("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopyLink = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCopyState("idle");

    try {
      await navigator.clipboard.writeText(url);
      let msg = "Link copied";
      if (msg === lastMessageRef.current) msg += "\u00A0";
      lastMessageRef.current = msg;
      setCopyState("copied");
      setStatusMessage(msg);
    } catch {
      let msg = "Copy failed";
      if (msg === lastMessageRef.current) msg += "\u00A0";
      lastMessageRef.current = msg;
      setCopyState("failed");
      setStatusMessage(msg);
    }

    timerRef.current = setTimeout(() => {
      setCopyState("idle");
      setStatusMessage("");
    }, 2200);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <section
      aria-label="Share this article"
      className="mx-auto max-w-7xl px-6 md:px-12"
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-border-color bg-secondary-bg px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Share2 className="h-4 w-4 text-light-bronze shrink-0" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-heading">
            Share This Guide With Your Team
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center rounded-full border border-border-color bg-primary-bg px-4 py-1.5 text-xs font-semibold text-gray-text hover:border-bronze/60 hover:text-heading transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center rounded-full border border-border-color bg-primary-bg px-4 py-1.5 text-xs font-semibold text-gray-text hover:border-bronze/60 hover:text-heading transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=spotmybusinesss`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center rounded-full border border-border-color bg-primary-bg px-4 py-1.5 text-xs font-semibold text-gray-text hover:border-bronze/60 hover:text-heading transition-colors"
          >
            X (Twitter)
          </a>

          <span className="relative inline-flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              data-copied={copyState === "copied" ? "" : undefined}
              data-failed={copyState === "failed" ? "" : undefined}
              className="inline-flex min-h-[36px] min-w-[36px] items-center gap-1.5 rounded-full border border-bronze/50 bg-primary-bg px-4 py-1.5 text-xs font-semibold text-heading hover:border-light-bronze transition-colors cursor-pointer"
            >
              {copyState === "copied" ? (
                <Check className="h-3.5 w-3.5" style={{ color: "var(--blog-growth, #7B8E77)" }} aria-hidden="true" />
              ) : (
                <Link2 className="h-3.5 w-3.5 text-light-bronze" aria-hidden="true" />
              )}
              <span>Copy Link</span>
            </button>
            <span
              role="status"
              className={`text-xs font-semibold transition-opacity duration-200 ${
                statusMessage ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                color:
                  copyState === "failed"
                    ? "#f87171"
                    : "var(--blog-growth, #7B8E77)",
              }}
            >
              {statusMessage}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
