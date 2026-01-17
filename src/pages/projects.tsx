import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useLanguage, translations } from "@/lib/i18n";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projectsPage;
  const common = translations[language].common;

  const projects = t.projects;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <PageHero
          titleEn="Projects"
          titleAr="المشاريع"
          subtitleEn="Selected works across construction, infrastructure, and electrical projects."
          subtitleAr="نماذج من أعمالنا في البناء والبنى التحتية والمشاريع الكهربائية."
        />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-slate-200 w-full relative group">
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-600">
                        <span className="font-semibold">{common.projectImage}</span>
                      </div>
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-semibold">{common.viewDetails}</span>
                      </div>
                    </div>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge variant={project.statusKey === "completed" ? "default" : "secondary"}>
                          {project.statusKey === "completed" ? t.statuses.completed : t.statuses.inProgress}
                        </Badge>
                        <span className={language === "ar" ? "text-xs font-semibold text-primary tracking-wider" : "text-xs font-semibold text-primary uppercase tracking-wider"}>{project.type}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.location} • {project.client}</p>
                      </div>
                      <p className="text-sm text-slate-600">{project.description}</p>
                    </CardContent>
                  </Card>
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
