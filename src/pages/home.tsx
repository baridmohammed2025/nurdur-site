import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { Stats } from "@/components/home/stats";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import blueprintImage from "@assets/generated_images/blueprint.jpg";
import excavatorImage from "@assets/generated_images/excavator.jpg";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <img src={blueprintImage} alt="Engineering Excellence" className="w-full h-auto object-cover" />
                </div>
                <div
                  className={cn(
                    "absolute -bottom-6 w-full h-full border-4 border-primary rounded-lg z-0 hidden md:block",
                    language === "ar" ? "-left-6" : "-right-6"
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  {language === "en" ? "About NURDAR Al Faisal" : "حول شركة نوردار الفيصل"}
                </span>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {language === "en" ? (
                    <>
                      Committed to Building <br />
                      <span className="text-primary">A Better Tomorrow</span>
                    </>
                  ) : (
                    <>
                      ملتزمون ببناء <br />
                      <span className="text-primary">غد أفضل</span>
                    </>
                  )}
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {language === "en"
                    ? `Established in 2022 to meet the growing needs of Iraq's reconstruction, NURDAR Al Faisal has quickly become a trusted name in general contracting. With a capital of 1 Billion IQD and a "Fifth Rank A" classification, we bring professional expertise to every project.`
                    : "تأسست شركة نوردار الفيصل في عام 2022 لتلبية المتطلبات المتزايدة لإعادة الإعمار في العراق، وسرعان ما أصبحت اسماً موثوقاً به في مجال المقاولات العامة. برأس مال قدره مليار دينار عراقي وتصنيف (الدرجة الخامسة أ)، نقدم خبرات مهنية لكل مشروع."}
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {language === "en"
                    ? "We combine technical excellence with a deep commitment to work ethics and community service. Our team delivers projects that stand the test of time."
                    : "نحن نجمع بين التميز التقني والالتزام العميق بأخلاقيات العمل وخدمة المجتمع. فريقنا ينفذ مشاريع تصمد أمام اختبار الزمن."}
                </p>

                <div className="pt-4">
                  <Link href="/about">
                    <Button size="lg" className="font-semibold px-8">
                      {language === "en" ? "Read Our Story" : "اقرأ قصتنا"}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Stats />
        <ServicesPreview />

        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${excavatorImage})` }} />
          <div className="absolute inset-0 bg-slate-900/80 z-0" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 relative z-10 text-center max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {language === "en" ? "Equipped for Any Challenge" : "مجهزون لأي تحدٍ"}
            </h2>

            <p className="text-slate-300 text-lg mb-8">
              {language === "en"
                ? "Our extensive fleet of modern machinery ensures we can handle projects of any scale efficiently and safely."
                : "أسطولنا الواسع من الآليات الحديثة يضمن قدرتنا على التعامل مع المشاريع بأي حجم بكفاءة وأمان."}
            </p>

            <Link href="/services">
              <Button size="lg" className="font-semibold px-8">
                {language === "en" ? "View Our Equipment" : "عرض معداتنا"}
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
