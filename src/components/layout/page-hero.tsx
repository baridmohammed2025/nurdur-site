import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

// Page-specific hero backgrounds extracted from the company profile PDF
import heroAbout from "@assets/hero/about.jpg";
import heroServices from "@assets/hero/services.jpg";
import heroProjects from "@assets/hero/projects.jpg";
import heroContact from "@assets/hero/contact.jpg";

type PageHeroProps = {
  titleEn: string;
  titleAr: string;
  subtitleEn?: string;
  subtitleAr?: string;
  badgeEn?: string;
  badgeAr?: string;
};

export function PageHero({
  titleEn,
  titleAr,
  subtitleEn,
  subtitleAr,
  badgeEn = "General Contracting",
  badgeAr = "المقاولات العامة",
}: PageHeroProps) {
  const { language } = useLanguage();
  const [location] = useLocation();

  const heroImage = (() => {
    if (location.startsWith("/services")) return heroServices;
    if (location.startsWith("/projects")) return heroProjects;
    if (location.startsWith("/contact")) return heroContact;
    if (location.startsWith("/about")) return heroAbout;
    return heroAbout;
  })();

  const title = language === "en" ? titleEn : titleAr;
  const subtitle = language === "en" ? subtitleEn : subtitleAr;
  const badge = language === "en" ? badgeEn : badgeAr;

  return (
    <section className="relative min-h-[60vh] pt-24 flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="hero-kenburns absolute inset-0 h-full w-full object-cover"
        />
        {/* subtle premium sheen */}
        <div className="hero-sheen pointer-events-none absolute inset-0" />
      </div>

      {/* Premium dark overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full pb-16">
        <div className="container mx-auto px-4">
          <div className={cn("max-w-3xl", language === "ar" && "ml-auto text-right")}>
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-white/85 backdrop-blur">
              {badge}
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-heading font-bold tracking-tight text-white">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1) translate3d(0px, 0px, 0px); }
          50% { transform: scale(1.08) translate3d(14px, -10px, 0px); }
          100% { transform: scale(1.04) translate3d(-10px, 8px, 0px); }
        }
        .hero-kenburns {
          will-change: transform;
          transform-origin: center;
          animation: heroKenBurns 18s ease-in-out infinite alternate;
          filter: saturate(1.05) contrast(1.05);
        }

        @keyframes heroSheen {
          0% { transform: translateX(-60%); opacity: 0.0; }
          35% { opacity: 0.12; }
          100% { transform: translateX(60%); opacity: 0.0; }
        }
        .hero-sheen {
          background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.14) 35%, transparent 70%);
          mix-blend-mode: overlay;
          animation: heroSheen 10s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns, .hero-sheen { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
