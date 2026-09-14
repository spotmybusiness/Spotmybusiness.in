import { ShieldCheck, HelpCircle } from "lucide-react";

interface ComparisonRow {
  feature: string;
  smb: string;
  agency: string;
  tooltip: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Website Development & Management",
    smb: "A website that clearly represents your business and stays current.",
    agency: "A stronger foundation for customer understanding and trust.",
    tooltip: "Your website is planned and maintained as a practical part of your wider digital presence."
  },
  {
    feature: "Website SEO & Performance",
    smb: "Content, structure, and technical considerations reviewed together.",
    agency: "A clearer, more usable website experience across devices.",
    tooltip: "Website SEO and performance work together to help search engines and customers understand your site."
  },
  {
    feature: "Google Search, Maps & Business Profile",
    smb: "Local SEO, Maps SEO, and profile optimization aligned to your business.",
    agency: "More complete information where local customers look for services.",
    tooltip: "These services help keep your business information clear and relevant across Google Search, Maps, and your Business Profile."
  },
  {
    feature: "Reputation Management",
    smb: "A thoughtful approach to customer feedback and online credibility.",
    agency: "A more trustworthy presence for prospective customers.",
    tooltip: "Customer feedback can be managed as part of a wider strategy for presenting your business online."
  },
  {
    feature: "Practical Strategy",
    smb: "Recommendations shaped around your business, market, and priorities.",
    agency: "A clearer path for deciding what to improve next.",
    tooltip: "The focus is on useful, understandable next steps rather than unnecessary complexity."
  },
  {
    feature: "Ongoing Improvement",
    smb: "Website, search, and reputation efforts considered as your needs evolve.",
    agency: "A digital presence that can remain aligned with your business.",
    tooltip: "Ongoing improvement helps keep your digital presence useful as your business and market change."
  }
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 relative bg-primary-bg overflow-hidden border-b border-border-color/30">
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full bg-bronze/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            THE DIFFERENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            HOW SMB BUILDS DIGITAL PRESENCE
          </h2>
          <p className="text-gray-text text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A practical approach to website quality, discoverability, credibility, and ongoing improvement for local businesses.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-panel border border-border-color rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-secondary-bg border-b border-border-color py-6 px-6 md:px-8 items-center text-xs md:text-sm font-heading font-bold uppercase tracking-wider">
            <div className="col-span-5 text-gray-text">Focus</div>
            <div className="col-span-4 text-light-bronze flex items-center gap-1.5 justify-center text-center">
              <ShieldCheck className="w-4 h-4 text-light-bronze" /> SPOT MY BUSINESS
            </div>
            <div className="col-span-3 text-gray-text/60 text-center">What It Supports</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border-color/40">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 py-6 px-6 md:px-8 items-center transition-all duration-300 hover:bg-white/[0.02] hover:border-l-2 hover:border-l-bronze focus-within:bg-white/[0.02] focus-within:border-l-2 focus-within:border-l-bronze"
              >
                {/* Feature Name & Tooltip */}
                <div className="col-span-5 flex items-center gap-2 pr-4">
                  <span className="text-xs md:text-sm font-heading font-semibold text-heading">{row.feature}</span>
                  <div className="group relative cursor-pointer">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-text/40 hover:text-light-bronze transition-colors" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded bg-secondary-bg border border-border-color text-[10px] text-gray-text leading-relaxed opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-30 text-center shadow-lg">
                      {row.tooltip}
                    </span>
                  </div>
                </div>

                {/* SMB Column */}
                <div className="col-span-4 text-center px-4 flex justify-center">
                  <span className="text-xs text-light-bronze font-medium leading-relaxed">{row.smb}</span>
                </div>

                {/* Typical Agency Column */}
                <div className="col-span-3 text-center px-4 flex justify-center">
                  <span className="text-xs text-gray-text/50 leading-relaxed">{row.agency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
