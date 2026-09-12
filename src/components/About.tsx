import { Eye, Target, Award } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      icon: <Target className="w-6 h-6 text-bronze" />,
      desc: "To give local businesses a clear, reliable strategy for building a stronger presence across their website, Google Search, and Google Maps.",
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-6 h-6 text-light-bronze" />,
      desc: "To help every local business present itself with clarity, earn customer trust, and compete confidently in its market.",
    },
    {
      title: "Our Values",
      icon: <Award className="w-6 h-6 text-champagne" />,
      desc: "Clear communication, thoughtful execution, and practical recommendations built around each business and its market.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-primary-bg">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-bronze/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
                WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading mt-3 leading-tight">
                BUILD A PRESENCE THAT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze via-light-bronze to-champagne">
                  HELPS CUSTOMERS FIND YOU.
                </span>
              </h2>
            </div>

            <div
              className="space-y-4 text-gray-text text-base leading-relaxed"
            >
              <p>
                Your customers are already searching. We help them find you. Spot My Business helps local businesses strengthen their presence across Google Search, Google Maps, and the web. We combine Google Business Profile optimization, Local SEO, and high-quality website development and management to build a digital presence that attracts attention, earns trust, and generates enquiries. No unnecessary complexity—just a clear strategy built around your business and your market.
              </p>
            </div>
          </div>

          {/* Right Column: Glass Cards */}
          <div className="lg:col-span-7 space-y-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-6 md:p-8 rounded-2xl relative group overflow-hidden border border-border-color/50"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-bronze/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col sm:flex-row gap-4 items-start relative z-10">
                  <div className="p-3 bg-secondary-bg border border-border-color rounded-xl flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-heading">
                      {card.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
