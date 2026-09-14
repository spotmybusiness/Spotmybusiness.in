"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock, Loader2, MessageSquare, Copy, Check } from "lucide-react";

interface FormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  website?: string;
  message?: string;
}

const validateName = (value: string) =>
  value.length >= 2 || "Name must be at least 2 characters";

const validateBusinessName = (value: string) =>
  value.length >= 2 || "Business name must be at least 2 characters";

const validatePhone = (value: string) =>
  value.length >= 8 || "Please enter a valid phone number";

const validateEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
  "Please enter a valid email address";

const validateWebsite = (value?: string) => {
  if (!value) return true;

  try {
    new URL(value);
    return true;
  } catch {
    return "Invalid URL (e.g. https://example.com)";
  }
};

export default function Contact({ hideSidebar = false }: { hideSidebar?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [lastSubmittedBody, setLastSubmittedBody] = useState("");

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
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const body = [
        "Hello SMB Team,",
        "",
        "I would like to discuss my website, SEO, Google Business Profile, Google Maps, or reputation needs.",
        "",
        `Name: ${data.name}`,
        `Business Name: ${data.businessName}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Website: ${data.website || "N/A"}`,
        `Message: ${data.message || "N/A"}`,
      ].join("\n");

      setLastSubmittedBody(body);
      setSubmitSuccess(true);
      reset();

      window.location.href = `mailto:smb.spot.my.business@gmail.com?subject=${encodeURIComponent(
        "Digital Presence Enquiry"
      )}&body=${encodeURIComponent(body)}`;
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (!lastSubmittedBody) return;
    navigator.clipboard.writeText(lastSubmittedBody).then(() => {
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-secondary-bg overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 gap-12 lg:gap-16 items-start ${hideSidebar ? "" : "lg:grid-cols-12"}`}>
          
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
                Tell us where your business is today and what you would like to improve. We can discuss your website, SEO, Google Business Profile, Google Maps, and reputation needs.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border-color/60">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Email Support</span>
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
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Direct Hotline</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">
                    <a href="tel:+919007960333" className="hover:text-light-bronze transition-colors">+91 9007960333</a>
                    {" / "}
                    <a href="tel:+918597913452" className="hover:text-light-bronze transition-colors">+91 8597913452</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">WhatsApp</span>
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
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Business Hours</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">Monday – Sunday: Open 24 Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-bg border border-border-color rounded-xl text-light-bronze shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-text/50">Our Location</span>
                  <p className="text-sm font-semibold text-heading mt-0.5">Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075</p>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Right Column: Lead Form */}
          <div className={hideSidebar ? "w-full max-w-2xl mx-auto" : "lg:col-span-7"}>
            <div className="glass-panel border border-border-color rounded-2xl p-8 md:p-10 relative">
              
              <>
                {!submitSuccess ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {submitError && (
                      <div className="flex items-center gap-2.5 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="name"
                          {...register("name", { validate: validateName })}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="name"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Your Name *
                        </label>
                        {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Business Name Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="businessName"
                          {...register("businessName", { validate: validateBusinessName })}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="businessName"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Business Name *
                        </label>
                        {errors.businessName && <p className="text-[10px] text-red-400 mt-1">{errors.businessName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="text"
                          id="phone"
                          {...register("phone", { validate: validatePhone })}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="phone"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone Number *
                        </label>
                        {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>}
                      </div>

                      {/* Email Field */}
                      <div className="relative z-0 w-full group">
                        <input
                          type="email"
                          id="email"
                          {...register("email", { validate: validateEmail })}
                          placeholder=" "
                          className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                        />
                        <label
                          htmlFor="email"
                          className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Email Address *
                        </label>
                        {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* Website URL Field */}
                    <div className="relative z-0 w-full group">
                      <input
                        type="text"
                        id="website"
                        {...register("website", { validate: validateWebsite })}
                        placeholder=" "
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer"
                      />
                      <label
                        htmlFor="website"
                        className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Business Website URL (optional)
                      </label>
                      {errors.website && <p className="text-[10px] text-red-400 mt-1">{errors.website.message}</p>}
                    </div>

                    {/* Message Field */}
                    <div className="relative z-0 w-full group">
                      <textarea
                        id="message"
                        {...register("message")}
                        placeholder=" "
                        rows={3}
                        className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-border-color appearance-none focus:outline-none focus:ring-0 focus:border-light-bronze peer resize-none"
                      />
                      <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-text/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-bronze peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Tell us about your goals (optional)
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-bronze to-light-bronze font-heading text-xs tracking-[0.25em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Opening Mail...</span>
                        </>
                      ) : (
                        <span>Start a Conversation</span>
                      )}
                    </button>
                  </form>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <CheckCircle2 className="w-16 h-16 text-light-bronze mb-6 animate-pulse" />
                    <h3 className="text-2xl font-heading font-bold text-heading">
                      ENQUIRY DETAILS READY
                    </h3>
                    <p className="text-gray-text text-sm max-w-md mt-3 leading-relaxed">
                      Your enquiry has been prepared. Use any of the options below to send it — choose whichever works best for you right now.
                    </p>

                    {/* Primary: Copy — always works */}
                    <div className="mt-6 w-full max-w-xs">
                      <button
                        onClick={copyToClipboard}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-bronze to-light-bronze text-xs font-heading font-bold tracking-wider uppercase text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-200"
                      >
                        {copiedPayload ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Enquiry Details</span>
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-gray-text/50 mt-2">
                        Then paste into any email or chat
                      </p>
                    </div>

                    {/* Secondary: Open Email + WhatsApp */}
                    <div className="mt-4 flex flex-wrap gap-3 justify-center w-full max-w-xs">
                      <a
                        href={`mailto:smb.spot.my.business@gmail.com?subject=${encodeURIComponent(
                          "Digital Presence Enquiry"
                        )}&body=${encodeURIComponent(lastSubmittedBody)}`}
                        className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border-color bg-secondary-bg hover:border-bronze/50 text-xs font-heading font-semibold tracking-wider uppercase text-heading transition-all duration-200"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open Email</span>
                      </a>

                      <a
                        href="https://wa.me/919007960333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border-color bg-secondary-bg hover:border-bronze/50 text-xs font-heading font-semibold tracking-wider uppercase text-heading transition-all duration-200"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-border-color hover:border-bronze/50 text-xs tracking-wider uppercase font-semibold text-gray-text hover:text-white transition-all duration-200"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                )}
              </>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
