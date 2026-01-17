import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "ar";

type Ctx = {
  language: Lang;
  setLanguage: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Lang>("en");

  // Keep the document direction and language in sync with the selected locale.
  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export const translations = {
  en: {
    common: {
      companyName: "NURDAR AL FAISAL",
      companyTagline: "GENERAL CONTRACTING",
      getQuote: "Get a Quote",
      viewDetails: "View Details",
      projectImage: "Project Image",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tag: "General Contracting",
      title: "Building Iraq’s",
      titleAccent: "Future",
      subtitle:
        "Construction, infrastructure, and electrical works delivered with quality and integrity.",
      viewProjects: "View Projects",
      contactUs: "Contact Us",
    },
    about: {
      header: "About Company",
      subHeader: "A trusted partner in general contracting across Iraq.",
      leadership: "Leadership",
      mdMessage: "Managing Director Message",
      companyDetails: "Company Details",
      vision: "Vision",
      objectives: "Objectives",
      values: "Values",
    },

    stats: {
      capital: "Capital (IQD)",
      projectsCompleted: "Projects Completed",
      machineryFleet: "Machinery Fleet",
      expertEngineers: "Expert Engineers",
    },

    servicesPreview: {
      eyebrow: "Our Expertise",
      title: "Comprehensive Construction Solutions",
      subtitle: "We deliver integrated services across all contracting sectors with a focus on quality, safety, and innovation.",
      cta: "Explore All Services",
      cards: [
        {
          title: "Building Construction",
          description: "Commercial, residential, and public building works including sanitary, electrical, and HVAC services.",
        },
        {
          title: "Civil Works & Infrastructure",
          description: "Earthworks, concreting, asphalt paving, and piling works for roads, bridges, and infrastructure projects.",
        },
        {
          title: "Electrical Works",
          description: "Installation of medium/high voltage systems, substations, poles, and optical cables.",
        },
        {
          title: "Water & Sewerage",
          description: "Sewerage networks, raw water networks, treatment plants, and pumping stations.",
        },
        {
          title: "Project Supervision",
          description: "Complete supervision, execution, and design services ensuring technical specifications are met.",
        },
        {
          title: "Specialized Contracting",
          description: "Special civil works for oil and gas fields and associated industrial facilities.",
        },
      ],
    },

    servicesPage: {
      machineryTitle: "Machinery & Equipment",
      machinerySubtitle:
        "We possess a large fleet of modern equipment maintained daily to ensure efficiency and reliability on every project site.",
      categories: [
        {
          category: "Construction & Civil Works",
          items: [
            "Commercial, residential, and public building works",
            "Sanitary services, electrical, elevators, and air conditioning",
            "Earthworks, concreting, and asphalt paving for roads and bridges",
            "Sewerage networks, raw water networks, and drinking water networks",
            "Construction of water treatment plants and pumping stations",
            "Piling works of all types",
            "Special civil works for infrastructure of oil and gas fields",
          ],
        },
        {
          category: "Electrical Engineering",
          items: [
            "Electricity line poles, laying cables, connectivity, and wiring",
            "Installation of distribution and operation panels",
            "Measurement devices and operation switches",
            "Electrical storage facilities for power substations",
            "Medium and High Voltage installations",
            "Laying optical cables and necessary equipment",
            "All preparatory, execution, and finishing works in power",
          ],
        },
      ],
      machinery: [
        { name: "Bulldozer", count: 3 },
        { name: "Grader", count: 2 },
        { name: "Wheel Loader", count: 6 },
        { name: "Backhoe Loader (Excavator)", count: 4 },
        { name: "Wheeled Excavator", count: 2 },
        { name: "Sheepsfoot Roller", count: 6 },
        { name: "Steel Drum Roller", count: 4 },
        { name: "Backhoe Hammer", count: 2 },
        { name: "Water Tanker", count: 2 },
        { name: "Dump Truck", count: 10 },
        { name: "Concrete Pump", count: 2 },
      ],
    },

    projectsPage: {
      statuses: {
        completed: "Completed",
        inProgress: "In Progress",
      },
      projects: [
        {
          title: "The Industrial City Project",
          location: "Al Nahrawan",
          client: "Balad Al Shomukh Company",
          type: "Infrastructure",
          statusKey: "completed",
          description: "Construction of road networks, including compacted road areas, sidewalks, and approaches.",
        },
        {
          title: "Residential Complex Infrastructure",
          location: "Baghdad",
          client: "Private Sector",
          type: "Civil Works",
          statusKey: "inProgress",
          description: "Execution of sewerage and water networks for a new residential development.",
        },
        {
          title: "Power Substation Upgrade",
          location: "Basra",
          client: "Ministry of Electricity",
          type: "Electrical",
          statusKey: "completed",
          description: "Installation of medium voltage panels and electrical storage facilities.",
        },
        {
          title: "Public School Construction",
          location: "Diyala",
          client: "Ministry of Education",
          type: "Building",
          statusKey: "completed",
          description: "Full construction of a 3-story school building including all mechanical and electrical services.",
        },
        {
          title: "Highway Maintenance",
          location: "International Road",
          client: "Roads & Bridges Directorate",
          type: "Roads",
          statusKey: "completed",
          description: "Asphalt paving and rehabilitation of key highway segments.",
        },
      ],
    },

    contactPage: {
      getInTouch: "Get In Touch",
      intro:
        "We are available to discuss your construction needs and provide detailed consultations.",
      cards: {
        locationTitle: "Our Location",
        phoneTitle: "Phone Numbers",
        emailTitle: "Email Address",
        hoursTitle: "Working Hours",
        location: "Palestine St., Mayslon Square\nBaghdad, Iraq",
        phones: "+964 772 846 0390\n+964 790 152 3478\n+964 770 443 9842",
        emails: "companyemaar@gmail.com\nsabah.j.d1972@gmail.com",
        hours: "Saturday - Thursday: 8:00 AM - 5:00 PM\nFriday: Closed",
      },
      form: {
        title: "Send a Message",
        fullName: "Full Name",
        fullNamePh: "John Doe",
        email: "Email",
        phone: "Phone",
        message: "Message",
        messagePh: "Tell us about your project requirements...",
        submit: "Send Message",
        sent: "Message Sent ✅",
      },
    },

    footer: {
      about:
        "Leading General Contracting Company in Iraq specializing in building construction, infrastructure, and electrical works.",
      quickLinks: "Quick Links",
      coreServices: "Core Services",
      contact: "Contact Us",
      links: {
        about: "About Company",
        services: "Our Services",
        projects: "Projects",
        contact: "Contact Us",
      },
      serviceBullets: [
        "Building Construction",
        "Infrastructure Development",
        "Electrical & Mechanical Works",
        "Civil Engineering",
        "Piling & Earthworks",
      ],
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    },

    notFound: {
      title: "Page not found",
      cta: "Go Home",
    },
  },
  ar: {
    common: {
      companyName: "نوردار الفيصل",
      companyTagline: "مقاولات عامة",
      getQuote: "طلب عرض سعر",
      viewDetails: "التفاصيل",
      projectImage: "صورة المشروع",
    },
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    hero: {
      tag: "مقاولات عامة",
      title: "نبني",
      titleAccent: "مستقبل العراق",
      subtitle: "حلول إنشاءات وبنى تحتية وأعمال كهربائية بمعايير جودة وسلامة عالية.",
      viewProjects: "عرض المشاريع",
      contactUs: "تواصل معنا",
    },
    about: {
      header: "عن الشركة",
      subHeader: "شريك موثوق في المقاولات العامة داخل العراق.",
      leadership: "الإدارة",
      mdMessage: "رسالة المدير المفوض",
      companyDetails: "بيانات الشركة",
      vision: "الرؤية",
      objectives: "الأهداف",
      values: "القيم",
    },

    stats: {
      capital: "رأس المال (دينار)",
      projectsCompleted: "المشاريع المنجزة",
      machineryFleet: "أسطول المعدات",
      expertEngineers: "المهندسون والخبراء",
    },

    servicesPreview: {
      eyebrow: "خبراتنا",
      title: "حلول إنشائية متكاملة",
      subtitle: "نقدّم خدمات متكاملة في جميع قطاعات المقاولات مع التركيز على الجودة والسلامة والابتكار.",
      cta: "استعراض الخدمات",
      cards: [
        {
          title: "إنشاء المباني",
          description: "تنفيذ مبانٍ تجارية وسكنية وحكومية مع أعمال MEP وفق المواصفات.",
        },
        {
          title: "الأعمال المدنية والبنى التحتية",
          description: "أعمال مدنية وبنى تحتية تشمل التربة والخرسانة والرصف والركائز.",
        },
        {
          title: "الأعمال الكهربائية",
          description: "منظومات جهد متوسط/عالٍ، محطات، أعمدة، وأعمال كوابل وألياف ضوئية.",
        },
        {
          title: "المياه والمجاري",
          description: "شبكات المجاري وشبكات المياه الخام ومشاريع محطات المعالجة ومحطات الضخ.",
        },
        {
          title: "الإشراف على المشاريع",
          description: "إشراف وتنفيذ وتصميم متكامل لضمان الالتزام بالمواصفات الفنية المطلوبة.",
        },
        {
          title: "مقاولات تخصصية",
          description: "أعمال مدنية خاصة لحقول النفط والغاز والمنشآت الصناعية المرتبطة بها.",
        },
      ],
    },

    servicesPage: {
      machineryTitle: "الآليات والمعدات",
      machinerySubtitle:
        "نمتلك أسطولاً كبيراً من المعدات الحديثة تتم صيانته يومياً لضمان الكفاءة والاعتمادية في كل موقع عمل.",
      categories: [
        {
          category: "الإنشاءات والأعمال المدنية",
          items: [
            "أعمال إنشاء المباني التجارية والسكنية والحكومية",
            "الخدمات الصحية والكهربائية والمصاعد وأنظمة التكييف",
            "الأعمال الترابية وصبّ الخرسانة والرصف الأسفلتي للطرق والجسور",
            "شبكات المجاري وشبكات المياه الخام وشبكات مياه الشرب",
            "إنشاء محطات معالجة المياه ومحطات الضخ",
            "أعمال دق الركائز (Piling) بجميع أنواعها",
            "أعمال مدنية خاصة لبنى تحتية لحقول النفط والغاز",
          ],
        },
        {
          category: "الهندسة الكهربائية",
          items: [
            "نصب أعمدة خطوط الكهرباء ومدّ الكابلات والتوصيل والأسلاك",
            "تنصيب لوحات التوزيع ولوحات التشغيل",
            "أجهزة القياس ومفاتيح التشغيل",
            "منظومات/مخازن كهربائية لمحطات التحويل",
            "تنفيذ منظومات الجهد المتوسط والعالي",
            "مدّ كوابل الألياف الضوئية والمعدات اللازمة",
            "جميع أعمال التحضير والتنفيذ والإنهاء الخاصة بالطاقة",
          ],
        },
      ],
      machinery: [
        { name: "بلدوزر", count: 3 },
        { name: "مُسَوّي طرق (Grader)", count: 2 },
        { name: "لودر (Wheel Loader)", count: 6 },
        { name: "حفار (Backhoe Loader)", count: 4 },
        { name: "حفار بعجلات", count: 2 },
        { name: "مدحلة قدم الغنم", count: 6 },
        { name: "مدحلة أسطوانية (Steel Drum)", count: 4 },
        { name: "هامر حفار", count: 2 },
        { name: "تنكر ماء", count: 2 },
        { name: "قلاب (Dump Truck)", count: 10 },
        { name: "مضخة خرسانة", count: 2 },
      ],
    },

    projectsPage: {
      statuses: {
        completed: "مكتمل",
        inProgress: "قيد التنفيذ",
      },
      projects: [
        {
          title: "مشروع المدينة الصناعية",
          location: "النهروان",
          client: "شركة بلد الشموخ",
          type: "بنى تحتية",
          statusKey: "completed",
          description: "تنفيذ شبكات الطرق بما يشمل حدل مناطق الطريق والأرصفة والمداخل." ,
        },
        {
          title: "بنى تحتية لمجمع سكني",
          location: "بغداد",
          client: "القطاع الخاص",
          type: "أعمال مدنية",
          statusKey: "inProgress",
          description: "تنفيذ شبكات المجاري والمياه لمشروع سكني جديد.",
        },
        {
          title: "تأهيل محطة تحويل كهرباء",
          location: "البصرة",
          client: "وزارة الكهرباء",
          type: "كهرباء",
          statusKey: "completed",
          description: "تنصيب لوحات الجهد المتوسط ومنظومات التخزين/المرفقات الكهربائية لمحطات التحويل.",
        },
        {
          title: "إنشاء مدرسة حكومية",
          location: "ديالى",
          client: "وزارة التربية",
          type: "مباني",
          statusKey: "completed",
          description: "إنشاء مدرسة من 3 طوابق مع تنفيذ جميع الخدمات الميكانيكية والكهربائية.",
        },
        {
          title: "صيانة طريق سريع",
          location: "الطريق الدولي",
          client: "مديرية الطرق والجسور",
          type: "طرق",
          statusKey: "completed",
          description: "رصف أسفلتي وإعادة تأهيل مقاطع رئيسية من الطريق السريع.",
        },
      ],
    },

    contactPage: {
      getInTouch: "ابقَ على تواصل",
      intro: "نحن جاهزون لمناقشة احتياجاتكم وتقديم الاستشارات التفصيلية.",
      cards: {
        locationTitle: "العنوان",
        phoneTitle: "أرقام الهاتف",
        emailTitle: "البريد الإلكتروني",
        hoursTitle: "ساعات العمل",
        location: "شارع فلسطين، ساحة ميسلون\nبغداد، العراق",
        phones: "+964 772 846 0390\n+964 790 152 3478\n+964 770 443 9842",
        emails: "companyemaar@gmail.com\nsabah.j.d1972@gmail.com",
        hours: "السبت - الخميس: 8:00 ص - 5:00 م\nالجمعة: عطلة",
      },
      form: {
        title: "أرسل رسالة",
        fullName: "الاسم الكامل",
        fullNamePh: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "الرسالة",
        messagePh: "اكتب تفاصيل طلبك...",
        submit: "إرسال",
        sent: "تم إرسال الرسالة ✅",
      },
    },

    footer: {
      about:
        "شركة رائدة في المقاولات العامة داخل العراق، متخصصة في إنشاء المباني والبنى التحتية والأعمال الكهربائية.",
      quickLinks: "روابط سريعة",
      coreServices: "الخدمات الأساسية",
      contact: "تواصل",
      links: {
        about: "عن الشركة",
        services: "الخدمات",
        projects: "المشاريع",
        contact: "تواصل معنا",
      },
      serviceBullets: [
        "إنشاء المباني",
        "تطوير البنى التحتية",
        "أعمال كهربائية وميكانيكية",
        "هندسة مدنية",
        "دق ركائز وأعمال ترابية",
      ],
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      rights: "جميع الحقوق محفوظة.",
    },

    notFound: {
      title: "الصفحة غير موجودة",
      cta: "العودة للرئيسية",
    },
  },
} as const;
