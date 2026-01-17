import { Link, useLocation } from "wouter";
import { useLanguage, translations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone, Globe } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";

export function Navbar() {
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();
  const common = translations[language].common;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(y > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", labelEn: "Home", labelAr: "الرئيسية" },
    { href: "/about", labelEn: "About Us", labelAr: "من نحن" },
    { href: "/services", labelEn: "Services", labelAr: "الخدمات" },
    { href: "/projects", labelEn: "Projects", labelAr: "المشاريع" },
    { href: "/contact", labelEn: "Contact", labelAr: "تواصل" },
  ];

  const isHome = location === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-white/10",
        // Transparent premium overlay like the reference screenshot
        isScrolled ? "bg-black/65 backdrop-blur-md" : "bg-black/25 backdrop-blur-md"
      )}
    >
      {/* Top contact bar */}
      {!isScrolled && (
        <div className={cn("hidden md:block", "text-white/80")}>
          <div className="container mx-auto px-4">
            <div className="h-10 flex items-center justify-end gap-6 text-sm">
              <a
                href="tel:+9647728460390"
                className={cn(
                  "inline-flex items-center gap-2 hover:text-primary transition-colors"
                )}
              >
                <Phone className="h-4 w-4" />
                +964 772 846 0390
              </a>
              <a
                href="mailto:companyemaar@gmail.com"
                className={cn(
                  "inline-flex items-center gap-2 hover:text-primary transition-colors"
                )}
              >
                <Mail className="h-4 w-4" />
                companyemaar@gmail.com
              </a>

              <button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-3 py-1",
                  isHome ? "hover:bg-white/10" : "hover:bg-secondary"
                )}
                aria-label={language === "en" ? "Switch language" : "تبديل اللغة"}
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NURDAR AL FAISAL logo"
              className="h-11 w-11 rounded-md bg-white/90 p-1 object-contain"
            />
            <div className={cn("leading-tight", "text-white")}>
              <div className="font-semibold tracking-wide">{common.companyName}</div>
              <div className={cn("text-xs", isHome ? "text-white/70" : "text-muted-foreground")}>
                {common.companyTagline}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    "text-white/80 hover:text-white",
                    active && ("text-white")
                  )}
                >
                  {language === "en" ? item.labelEn : item.labelAr}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile language toggle */}
            <Button
              variant={"secondary"}
              className={cn("lg:hidden","bg-white/10 text-white hover:bg-white/15 border-white/10")}
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            >
              {language === "en" ? "AR" : "EN"}
            </Button>

            <Link href="/contact">
              <Button
                className={cn(
                  "hidden sm:inline-flex",
                  "bg-white text-black hover:bg-white/90"
                )}
              >
                  {common.getQuote}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
