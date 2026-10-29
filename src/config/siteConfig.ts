export interface SiteConfig {
  companyName: string;
  tagline: string;
  businessType: string;
  description: string;
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    email: string;
    instagramUrl: string;
    addressNote: string;
    businessHours: string;
  };
  navigation: {
    name: string;
    href: string;
  }[];
  services: {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    category: string;
    deliverables: string[];
    optionalAddons: string[];
    idealFor: string[];
    badge?: string;
  }[];
  projects: {
    id: string;
    title: string;
    category: string;
    status: "Completed" | "In Development" | "Concept";
    shortDescription: string;
    problem: string;
    solution: string;
    features: string[];
    technologies: string[];
    demoType: "live" | "preview" | "mockup";
    imagePath?: string;
    customerImagePath?: string;
    sellerImagePath?: string;
    mockupType?: "mobile" | "dashboard" | "system";
  }[];
  targetAudiences: {
    title: string;
    description: string;
    icon: string;
  }[];
  workSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  companyName: "RK Group of IT Solutions",
  tagline: "Your Vision | Our Innovation",
  businessType: "IT Services, Software Development, and Digital Solutions",
  description:
    "RK Group of IT Solutions helps small businesses, startups, shops, and growing companies solve real business problems with practical websites, mobile apps, and custom software.",
  contact: {
    // Verified business contact credentials
    phoneDisplay: "+91 77962 16506",
    phoneRaw: "917796216506",
    whatsappNumber: "917796216506",
    whatsappDefaultMessage:
      "Hello RK Group of IT Solutions, I would like to discuss a project for my business.",
    email: "rkgroupofitsolution@gmail.com",
    instagramUrl: "https://www.instagram.com/rk_group_of_it_solution?exln=MTN1cTdzOGM4bGUwNQ==",
    addressNote: "Digital & On-Site Consultation by Appointment",
    businessHours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "website-development",
      title: "Website Development",
      shortDescription:
        "Fast, mobile-friendly websites and web applications built to showcase your business and generate genuine customer enquiries.",
      fullDescription:
        "We build clean, responsive, and search-optimized websites designed around your real business goals—whether you need a high-converting landing page, corporate presence, or an online catalog.",
      icon: "Globe",
      category: "Web Engineering",
      deliverables: [
        "Business websites & company landing pages",
        "E-commerce websites & product catalogs",
        "Portfolio & professional showcase sites",
        "Mobile-first, responsive layouts for all screen sizes",
        "Contact & enquiry forms with instant notification",
        "Basic search engine optimization (SEO) setup & fast load times",
      ],
      optionalAddons: [
        "Payment gateway integration (Razorpay / Stripe)",
        "Advanced multi-language support",
        "Custom content management system (CMS) integration",
        "Automated CRM / Google Sheets lead sync",
      ],
      idealFor: [
        "Local shops & retail stores",
        "Salons, spas & beauty parlours",
        "Doctors, clinics & healthcare centers",
        "Restaurants, cafes & cloud kitchens",
        "Coaching institutes, colleges & tutors",
        "Gyms, fitness centers & yoga studios",
        "Corporate consultants & SMEs",
      ],
      badge: "Core Service",
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      shortDescription:
        "User-friendly Android and cross-platform mobile apps to bring your business directly to your customers' smartphones.",
      fullDescription:
        "Turn your business workflows into reliable mobile applications. We build customer-facing shopping apps, internal management apps, and order-taking tools with clean interfaces.",
      icon: "Smartphone",
      category: "Mobile Solutions",
      deliverables: [
        "Android mobile application development",
        "Customer-facing shopping & catalog apps",
        "Business & employee utility tools",
        "Admin control panel & data synchronization",
        "Clean navigation, offline caching, and push notifications",
        "APK generation and Google Play Store readiness",
      ],
      optionalAddons: [
        "iOS / Apple App Store build and deployment",
        "Live location tracking & SMS gateway setup",
        "Advanced analytical dashboards",
        "Barcode / QR code camera scanning support",
      ],
      idealFor: [
        "Retail & grocery stores wanting online shopping",
        "Salons & spas wanting mobile appointment booking",
        "Restaurants wanting direct delivery without aggregator commissions",
        "Distributors & wholesale order desks",
        "Gyms & coaching centers offering member apps",
      ],
      badge: "Popular",
    },
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      shortDescription:
        "Tailor-made software to replace messy spreadsheets, automate repetitive manual work, and manage daily business operations.",
      fullDescription:
        "Every business has unique operational needs. We create custom software systems—including billing, inventory tracking, order management, and custom reporting dashboards.",
      icon: "Cpu",
      category: "Automation & Systems",
      deliverables: [
        "Business management & operational systems",
        "Inventory tracking & stock alert tools",
        "Customer order & billing workflows",
        "Custom administrative dashboards & metrics",
        "Automated PDF invoice generation & reports",
        "Role-based staff access permissions",
      ],
      optionalAddons: [
        "Third-party accounting or ERP synchronization",
        "Thermal printer & POS hardware connectivity",
        "Multi-branch data consolidation",
        "Automated WhatsApp message notifications",
      ],
      idealFor: [
        "Salons & spas (customer visit history, stylist commissions & booking)",
        "Clinics & diagnostics (prescriptions, patient scheduling & billing)",
        "Restaurants & cafes (table management, KOT & inventory)",
        "Coaching institutes (student batches, attendance & fee receipts)",
        "Wholesalers & retail shops (stock tracking & GST billing)",
        "Gyms & fitness clubs (membership renewals & access control)",
      ],
      badge: "High Efficiency",
    },
    {
      id: "it-support-maintenance",
      title: "IT Support & Maintenance",
      shortDescription:
        "Proactive technical support, security patches, bug fixes, and regular updates to keep your digital systems running smoothly.",
      fullDescription:
        "Technology works best when properly maintained. We provide dependable technical troubleshooting, speed optimization, backup management, and continuous support.",
      icon: "ShieldCheck",
      category: "Support & Reliability",
      deliverables: [
        "Website and software health checks",
        "Bug fixes, error resolution, and troubleshooting",
        "Software security updates and library patches",
        "Performance and page speed optimization",
        "Domain, hosting, and SSL certificate management",
        "Scheduled data backups and uptime monitoring",
      ],
      optionalAddons: [
        "Priority emergency same-day SLA support",
        "Content update packages (banners, products)",
        "Database optimization & query tuning",
        "Staff tech onboarding & training sessions",
      ],
      idealFor: [
        "Salons, clinics, and shops needing uninterrupted daily uptime",
        "Businesses with existing websites/apps needing care",
        "Companies without dedicated in-house IT engineers",
        "Growing startups focusing on sales and operations",
      ],
      badge: "Peace of Mind",
    },
  ],
  projects: [
    {
      id: "apani-dukan",
      title: "Apani Dukan",
      category: "Digital Shopping App & Local Retail Platform",
      status: "Completed",
      shortDescription:
        "A practical digital shopping and store catalog application developed to empower local shops to showcase items digitally and receive customer orders smoothly.",
      problem:
        "Local neighborhood shops and retail stores struggle to manage phone-call and WhatsApp orders effectively, causing missed items, manual pricing errors, and lost customer retention.",
      solution:
        "RK Group of IT Solutions engineered 'Apani Dukan' — a streamlined mobile-first shopping application that allows shop owners to display catalog items with real prices, categorize goods, and receive structured digital customer orders.",
      features: [
        "Interactive digital store catalog with instant search and categories",
        "Seamless cart workflow with quick checkout and order summary",
        "Direct WhatsApp and digital order dispatch for shop owners",
        "Lightweight, fast-loading interface optimized for low network connectivity",
        "Customer Storefront: Discover verified local stores within 2km, 5km, 10km, 20km radius",
        "Shopkeeper Express Engine: 1-click multi-product & CSV bulk import",
        "Store GPS address mapping, verified badges & delivery/pickup status",
      ],
      technologies: [
        "React / Next.js Architecture",
        "Tailwind CSS Styling",
        "RESTful APIs & WhatsApp Gateway",
        "Location & Geo-Distance Filter Engine",
      ],
      demoType: "live",
      imagePath: "/projects/apani-dukan-customer.png",
      customerImagePath: "/projects/apani-dukan-customer.png",
      sellerImagePath: "/projects/apani-dukan-seller.png",
      mockupType: "dashboard",
    },
    {
      id: "smart-inventory-billing",
      title: "Smart Inventory & Billing Suite",
      category: "Custom Business Management",
      status: "In Development",
      shortDescription:
        "An intuitive desktop and web-based billing platform designed for retail shops and distributors to generate GST/Non-GST invoices and monitor daily stock levels.",
      problem:
        "Many small shop owners still record inventory in paper notebooks or struggle with bloated, expensive enterprise software that requires complicated training.",
      solution:
        "A stripped-down, lightning-fast billing dashboard that lets a cashier bill a customer in under 15 seconds while automatically updating inventory counts.",
      features: [
        "Rapid keyboard-first barcode and name lookup for instant billing",
        "Automated low-stock alerts before essential inventory runs out",
        "Daily, weekly, and monthly revenue summaries and tax calculations",
        "Thermal receipt printer and A4 invoice PDF support",
      ],
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
      demoType: "preview",
      mockupType: "dashboard",
    },
    {
      id: "coaching-institute-portal",
      title: "EduTrack Institute Portal",
      category: "Educational Management System",
      status: "In Development",
      shortDescription:
        "A centralized portal for coaching centers, tutors, and private academies to track student attendance, batch schedules, fees, and study material.",
      problem:
        "Coaching institutes waste hours each week manually tracking student fees in diaries and sending individual batch reminder messages to parents.",
      solution:
        "A dedicated web application where teachers organize batches, record attendance in two clicks, and maintain automated fee collection records.",
      features: [
        "Batch scheduling and calendar view for multiple classrooms",
        "Instant one-click attendance recording for mobile and desktop",
        "Fee receipt generation with pending payment tracking",
        "Study notes and PDF assignment distribution module",
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Cloud Storage"],
      demoType: "preview",
      mockupType: "system",
    },
    {
      id: "distributor-order-desk",
      title: "Wholesale & Distributor Order Desk",
      category: "B2B Supply Chain Workflow",
      status: "Concept",
      shortDescription:
        "A dedicated B2B order portal connecting wholesale distributors with their retail store network for streamlined bulk ordering.",
      problem:
        "Wholesalers spend multiple hours every morning transcribing handwritten or voice-note orders received from dozens of retail shopkeepers.",
      solution:
        "A simplified wholesale dealer catalog where retailers place verified bulk orders at their customized tier prices 24/7.",
      features: [
        "Tiered wholesale price levels per retailer category",
        "Minimum order quantity (MOQ) validation and carton packaging rules",
        "Order status notifications from packing to dispatch",
        "Credit limit tracking and outstanding invoice statements",
      ],
      technologies: ["React", "Next.js", "REST APIs", "Modern Database"],
      demoType: "preview",
      mockupType: "dashboard",
    },
  ],
  targetAudiences: [
    {
      title: "Retail Shops & Local Stores",
      description:
        "Showcase products online with digital catalogs, accept WhatsApp orders, and automate fast counter billing.",
      icon: "Store",
    },
    {
      title: "Salons, Spas & Beauty Parlours",
      description:
        "Online appointment booking calendar, digital service rate cards, stylist scheduling, and automated WhatsApp reminder alerts.",
      icon: "Scissors",
    },
    {
      title: "Clinics, Doctors & Diagnostics",
      description:
        "Easy patient appointment scheduling, digital prescription records, automated follow-up messages, and test report delivery.",
      icon: "Stethoscope",
    },
    {
      title: "Restaurants, Cafes & Food Outlets",
      description:
        "Contactless QR code digital table menus, online takeaway ordering, counter KOT billing, and daily sales summaries.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Gyms & Fitness Studios",
      description:
        "Member subscription management, automated fee renewal alerts, QR attendance check-in, and trainer scheduling.",
      icon: "Dumbbell",
    },
    {
      title: "Coaching Classes & Educational Institutes",
      description:
        "Manage admissions, batch timings, student attendance, digital fee receipts, and share PDF study material securely.",
      icon: "GraduationCap",
    },
    {
      title: "Distributors & Wholesalers",
      description:
        "Digitize inventory, reduce manual order entry errors, streamline B2B retailer orders, and track real-time stock balances.",
      icon: "Boxes",
    },
    {
      title: "Small & Medium Enterprises (SMEs)",
      description:
        "Build a trustworthy brand presence with professional websites that convert visitors into genuine client phone calls.",
      icon: "Building2",
    },
    {
      title: "Startups & Digital Entrepreneurs",
      description:
        "Transform an initial business concept or MVP into reliable Android and web software without wasting months or budget.",
      icon: "Rocket",
    },
  ],
  workSteps: [
    {
      step: "01",
      title: "Understand Your Requirements",
      description:
        "We discuss your real business problem, existing operations, target customers, and must-have functionality.",
    },
    {
      step: "02",
      title: "Plan the Solution",
      description:
        "We outline a clear project blueprint, select practical technology, establish milestone timelines, and agree on scope.",
    },
    {
      step: "03",
      title: "Design and Develop",
      description:
        "We craft modern, user-friendly layouts and write clean, robust code with regular progress updates shared with you.",
    },
    {
      step: "04",
      title: "Test and Review",
      description:
        "We thoroughly test for mobile responsiveness, page speed, form validation, and user experience with your direct feedback.",
    },
    {
      step: "05",
      title: "Launch and Support",
      description:
        "We safely deploy your project to production, provide clear operational guidance, and offer ongoing maintenance.",
    },
  ],
  whyChooseUs: [
    {
      title: "Business-Focused Solutions",
      description:
        "We don't build generic tech for the sake of it. Every feature is engineered to solve a practical business challenge.",
      icon: "Briefcase",
    },
    {
      title: "Custom Development",
      description:
        "Your business is unique. We tailor our code, layouts, and data structures precisely to your operational workflow.",
      icon: "Code2",
    },
    {
      title: "Responsive by Default",
      description:
        "Flawless performance across all devices—smartphones, tablets, laptops, and desktop computers.",
      icon: "Layout",
    },
    {
      title: "Clear Project Communication",
      description:
        "No confusing tech jargon. We provide honest updates, realistic timelines, and prompt responses throughout.",
      icon: "MessageSquare",
    },
    {
      title: "Testing & Quality Checks",
      description:
        "Strict verification for error handling, fast loading, security standards, and smooth interactive navigation.",
      icon: "CheckCircle2",
    },
    {
      title: "Support & Maintenance Options",
      description:
        "We remain available after launch to resolve issues, perform updates, and ensure your systems run continuously.",
      icon: "Headphones",
    },
  ],
};
