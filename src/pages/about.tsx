import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage, translations } from "@/lib/i18n";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="About Us"
          titleAr="من نحن"
          subtitleEn="Company overview, values, and capabilities."
          subtitleAr="نبذة عن الشركة وقيمها وقدراتها."
        />

        <section className="py-20">
          <div className="container mx-auto px-4 space-y-24">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-6">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">{t.leadership}</span>
                <h2 className="text-3xl font-heading font-bold">{t.mdMessage}</h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                  <p>
                    {language === "en"
                      ? "We are pleased to express our full readiness to cooperate with you in executing projects according to your required technical specifications. We are also prepared to supply materials, devices, and equipment from trusted international origins—contributing to Iraq’s reconstruction."
                      : "يسعدنا تأكيد جاهزيتنا للتعاون في تنفيذ المشاريع وفق أعلى معايير الجودة والسلامة، مع قدرة موثوقة على توريد المواد والمعدات من مناشئ عالمية لدعم برامج الإعمار في العراق."}
                  </p>
                  <p>
                    {language === "en"
                      ? "We aspire to develop and expand the company and extend its reach as far as possible in service of the country and the public interest."
                      : "نواصل تطوير قدراتنا وتوسيع نطاق أعمالنا لتقديم قيمة مستدامة لعملائنا وخدمة المصلحة العامة."}
                  </p>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-bold text-foreground">{language === "en" ? "SABAH JABBAR DABKH" : "صباح جبار دبخ"}</p>
                    <p className="text-sm">{language === "en" ? "Managing Director" : "المدير المفوض"}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-100 p-8 rounded-lg border border-border h-fit">
                <h3 className="text-xl font-bold mb-4">{t.companyDetails}</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{language === "en" ? "Established" : "تأسست"}</span>
                    <span className="text-muted-foreground">2022</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{language === "en" ? "Location" : "الموقع"}</span>
                    <span className="text-muted-foreground">{language === "en" ? "Baghdad, Iraq" : "بغداد، العراق"}</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{language === "en" ? "Classification" : "التصنيف"}</span>
                    <span className="text-muted-foreground">{language === "en" ? "Construction Classification (Fifth Rank A)" : "تصنيف إنشائي (الدرجة الخامسة أ)"}</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{language === "en" ? "Capital" : "رأس المال"}</span>
                    <span className="text-muted-foreground">{language === "en" ? "1,000,000,000 (One Billion) IQD" : "1,000,000,000 (مليار) دينار عراقي"}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t.vision,
                  text:
                    language === "en"
                      ? "Successful planning, meticulous execution, innovative performance, high quality, and great credibility are the standards of our work."
                      : "التخطيط الناجح، والتنفيذ الدقيق، والأداء المبتكر، والجودة العالية، والمصداقية الكبيرة هي معايير عملنا.",
                },
                {
                  title: t.objectives,
                  text:
                    language === "en"
                      ? "To create an integrated working environment investing in the highest human competencies and latest international engineering technologies."
                      : "خلق بيئة عمل متكاملة نستثمر من خلالها في أعلى الكفاءات والخبرات البشرية وأحدث التقنيات الهندسية العالمية.",
                },
                {
                  title: t.values,
                  text:
                    language === "en"
                      ? "Customer satisfaction, exceptional quality, credibility, transparency, innovation, and continuous development of our technical staff."
                      : "رضا العملاء، الجودة المهنية الاستثنائية، المصداقية، الشفافية، الابتكار، والتطوير المستمر لكادرنا الفني.",
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
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
