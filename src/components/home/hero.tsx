import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage, translations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import video1 from "@assets/generated_videos/cinematic_construction_site_sunrise.mp4";
import video2 from "@assets/generated_videos/close-up_of_industrial_machinery_in_motion.mp4";
import video3 from "@assets/generated_videos/modern_infrastructure_bridge_view.mp4";

const videos = [video1, video2, video3];

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-24 flex items-center overflow-hidden">
      {/* Background videos */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlays (dark + gradient) */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
              "bg-white/10 border border-white/15 text-white/90 backdrop-blur"
            )}
          >
            {t.tag}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-[1.05] text-white">
            {t.title}{" "}
            <span className="text-primary block mt-2">{t.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <Button size="lg" className="h-14 px-8 text-base font-semibold">
                {t.viewProjects}
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold text-white border-white/60 hover:bg-white/10">
                {t.contactUs}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              currentVideo === i ? "bg-primary w-8" : "bg-white/30 w-4"
            )}
          />
        ))}
      </div>
    </section>
  );
}
