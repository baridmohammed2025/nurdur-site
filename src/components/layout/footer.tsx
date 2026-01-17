import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage, translations } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();
  const common = translations[language].common;
  const t = translations[language].footer;

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-xl">{common.companyName}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {t.about}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors text-white" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><span className="cursor-pointer hover:text-primary transition-colors">{t.links.about}</span></Link></li>
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">{t.links.services}</span></Link></li>
              <li><Link href="/projects"><span className="cursor-pointer hover:text-primary transition-colors">{t.links.projects}</span></Link></li>
              <li><Link href="/contact"><span className="cursor-pointer hover:text-primary transition-colors">{t.links.contact}</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{t.coreServices}</h4>
            <ul className="space-y-2 text-sm">
              {t.serviceBullets.map((s) => (
                <li key={s} className="text-slate-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-semibold text-lg">{t.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  {translations[language].contactPage.cards.location.split("\n")[0]}<br />
                  {translations[language].contactPage.cards.location.split("\n")[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+9647728460390" className="hover:text-white transition-colors">+964 772 846 0390</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:companyemaar@gmail.com" className="hover:text-white transition-colors">companyemaar@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {common.companyName} — {t.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
