import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { motion } from "framer-motion";
import { useLanguage, translations } from "@/lib/i18n";

import excavatorImage from "@assets/generated_images/excavator.jpg";
import substationImage from "@assets/generated_images/substation.jpg";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].servicesPage;

  const servicesList = t.categories.map((c, idx) => ({
    ...c,
    image: idx === 0 ? excavatorImage : substationImage,
  }));
  const machineryList = t.machinery;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="Our Services"
          titleAr="خدماتنا"
          subtitleEn="Integrated contracting, civil engineering, and electrical solutions."
          subtitleAr="حلول متكاملة للمقاولات والهندسة المدنية والأعمال الكهربائية."
        />

        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4 space-y-24">
            {servicesList.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                  <img src={service.image} alt={service.category} className="w-full h-full object-cover" />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">{service.category}</h2>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">{t.machineryTitle}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{t.machinerySubtitle}</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {machineryList.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-primary transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                  <div className={language === "ar" ? "text-sm font-medium text-slate-300 tracking-wide" : "text-sm font-medium text-slate-300 uppercase tracking-wide"}>
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
