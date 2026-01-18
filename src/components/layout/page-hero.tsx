import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
// Default hero background extracted from the site's cinematic MP4s (to avoid blank placeholder JPGs).
import heroImage from "@assets/hero-bg.jpg";

type PageHeroProps = {
  titleEn: string;
  titleAr: string;
  subtitleEn?: string;
  subtitleAr?: string;
  badgeEn?: string;
  badgeAr?: string;
  /** Optional per-page background image (falls back to the default hero image). */
  backgroundImage?: string;
};

export function PageHero({
  titleEn,
  titleAr,
  subtitleEn,
  subtitleAr,
  badgeEn = "General Contracting",
  badgeAr = "المقاولات العامة",
  backgroundImage,
}: PageHeroProps) {
  const { language } = useLanguage();

  const title = language === "en" ? titleEn : titleAr;
  const subtitle = language === "en" ? subtitleEn : subtitleAr;
  const badge = language === "en" ? badgeEn : badgeAr;
  const bg = backgroundImage || heroImage;

  return (
    <section className="relative min-h-[60vh] pt-24 flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-animate"
          style={{ backgroundImage: `url(${bg})` }}
        />
        {/* Soft animated highlight sweep */}
        <div className="absolute inset-0 hero-sheen" />
      </div>

      {/* Premium dark overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />

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
    </section>
  );
}
