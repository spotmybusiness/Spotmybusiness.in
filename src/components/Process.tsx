import { Search, Compass, ShieldAlert, Award } from "lucide-react";

interface Step {
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  details: string[];
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery",
    icon: Search,
    desc: "In-depth audit of your local search presence, business details, and market.",
    details: [
      "GBP listing completeness checks",
      "Local search-intent analysis",
      "Business information consistency",
      "Website performance baseline"
    ],
  },
  {
    num: "02",
    title: "Optimization",
    icon: Compass,
    desc: "Structuring and reinforcing your on-page and Google Maps information.",
    details: [
      "Google Business Profile optimization",
      "Structured local markup implementation",
      "Service & location page architecture",
      "Professional review workflow setup"
    ],
  },
  {
    num: "03",
    title: "Growth",
    icon: ShieldAlert,
    desc: "Strengthening local relevance and expanding search discoverability.",
    details: [
      "Consistent local business signals",
      "Customer feedback monitoring systems",
      "Search-aligned service content",
      "Ongoing Maps and profile adjustments"
    ],
  },
  {
    num: "04",
    title: "Sustained Presence",
    icon: Award,
    desc: "Maintaining clear visibility and reliable customer enquiry pathways.",
    details: [
      "Multi-query search & Maps alignment",
      "Contact journey optimization",
      "Business information health checks",
      "Enquiry channel monitoring"
    ],
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative bg-primary-bg overflow-hidden">
      {/* Decorative blurred glow background */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            OUR DIGITAL PRESENCE PROCESS
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We follow a methodical, clear pipeline designed to help local businesses establish consistent visibility, build trust, and connect with high-intent customers.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Background Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-border-color -translate-x-[1px]" />
          
          {/* Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-bronze via-light-bronze to-champagne -translate-x-[1px] origin-top z-10" />

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-24 relative z-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Indicator Ball (Overlapping Line) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-border-color bg-secondary-bg flex items-center justify-center z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <IconComponent className="w-4 h-4 text-light-bronze" />
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div
                      className="glass-card p-6 md:p-8 rounded-2xl border border-border-color relative group"
                    >
                      {/* Step Number Badge */}
                      <span className="absolute top-6 right-6 font-heading font-black text-3xl text-border-color/60 group-hover:text-bronze/25 transition-colors duration-300 select-none">
                        {step.num}
                      </span>

                      <h3 className="text-xl font-heading font-bold text-heading">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-text text-sm mt-3 leading-relaxed">
                        {step.desc}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-border-color/60 pt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-text/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-bronze/60" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
