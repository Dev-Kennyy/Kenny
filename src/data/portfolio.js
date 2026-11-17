export const personalInfo = {
  name: 'Kehinde Salimonu',
  preferredName: 'KennyDev',
  fullName: 'Kehinde Blessing Salimonu',
  role: 'Full-Stack Developer & Software Engineer',
  location: 'Nigeria',
  timezone: 'WAT (UTC+1)',
  availability: 'Available for select contracts & remote roles',
  email: 'kehindesalimonu1@gmail.com',
  github: 'https://github.com/Dev-Kennyy',
  linkedin: 'https://www.linkedin.com/in/kehinde-salimonu-b7a956249',
  resumeUrl: '/SALIMONU,%20Kehinde%20Blessing%20-%20KennyDev.CV.pdf',
  portrait: '/DevK_PP-removebg-preview.png',
  portraitAlt: 'Kehinde Salimonu portrait',
  heroKicker: 'Available for select projects / Nigeria',
  shortBio:
    'Full-stack developer building scalable web applications with React, Next.js, TypeScript, and Node.js. Focused on high-performance interfaces and dependable server systems.',
};

export const contactEmail = personalInfo.email;
export const contactHref = `mailto:${contactEmail}`;

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const homeSections = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Testimonials', href: '#recommendations', id: 'recommendations' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const metrics = [
  {
    value: 24,
    suffix: '/7',
    label: 'Support & Dedication',
    detail: 'Responsive async communication across remote engineering workflows.',
  },
  {
    value: 4.8,
    decimals: 1,
    suffix: '/5',
    label: 'Client Rating',
    detail: 'Consistent quality feedback across freelance and contract deliveries.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'On-Time Delivery',
    detail: 'Pragmatic scoping, milestone-driven execution, and clean handoffs.',
  },
  {
    value: 35,
    prefix: '+',
    suffix: '%',
    label: 'Performance Boost',
    detail: 'Average load-time and bundle reduction achieved in production apps.',
  },
];

export const projectCategories = [
  'All',
  'Full-Stack',
  'Frontend & Education',
  'CMS & Platform',
  'AI & Utility',
];


export const projects = [
  {
    slug: 'lappytech',
    number: '01',
    name: 'LappyTech E-Commerce',
    category: 'Full-Stack',
    type: 'Full-stack platform',
    tagline: 'Modern electronics commerce platform with product discovery, inventory management, and online payments.',
    description:
      'An e-commerce platform for electronics shopping, featuring product browsing, cart management, checkout, payment processing, and inventory management.',
    extendedOverview:
      'LappyTech provides customers with an online electronics shopping experience. The platform combines product discovery, category filtering, product detail pages, persistent shopping carts, and a checkout workflow integrated with Paystack.',
    highlights: [
      'Interactive product catalog with category filtering and search functionality',
      'Paystack payment gateway integration for online transactions',
      'Persistent shopping cart with product quantity management',
      'Backend APIs and MongoDB data models for product and order management',
    ],
    architecture:
      'Built with Next.js and Tailwind CSS on the frontend, Node.js and Express for backend services, and MongoDB for application data storage.',
    outcomes:
      'Delivered an integrated e-commerce experience covering product discovery, shopping cart management, and online checkout.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'Tailwind CSS', 'REST APIs'],
    image: '/lappytech.png',
    imageAlt: 'LappyTech E-commerce storefront and laptop listing page preview',
    href: '',
    github: '',
    status: 'Live in Production',
    year: '2025',
    client: 'LappyTech Retail',
    role: 'Lead Full-Stack Developer',
  },
  {
    slug: 'impact-clm',
    number: '02',
    name: 'Impact CLM',
    category: 'CMS & Platform',
    type: 'Content-managed website',
    tagline: 'A digital platform and content management system for ministry resources and media.',
    description:
      'A church and ministry platform that brings sermons, devotionals, events, announcements, and ministry resources together.',
    extendedOverview:
      'Impact Christian Leadership Ministry needed a unified digital platform through which members and visitors could access ministry teachings, events, announcements, and media resources. The solution includes a custom content management system for administrative content management and publishing.',
    highlights: [
      'Custom content management system for administrative content publishing',
      'Sermon and ministry media library with content categorization',
      'Dedicated sections for ministry announcements and events',
      'Responsive interfaces for desktop and mobile users',
    ],
    architecture:
      'Developed using Next.js, React, and TypeScript, with Tailwind CSS for interface styling and Node.js for backend services and content delivery.',
    outcomes:
      'Provided the ministry with a centralized digital platform for publishing and organizing its content and resources.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'CMS'],
    image: '/Screenshot%20(35).png',
    imageAlt: 'Impact CLM church platform homepage and sermon portal preview',
    href: 'https://impactclm.org',
    github: '',
    status: 'Live in Production',
    year: '2025',
    client: 'Impact Christian Leadership Ministry',
    role: 'Full-Stack Developer (Contract)',
  },
  {
    slug: 'free-tcf',
    number: '03',
    name: 'Free TCF Exam Prep',
    category: 'Frontend & Education',
    type: 'Online examination platform',
    tagline: 'An interactive French language examination preparation platform.',
    description:
      'An online examination platform designed to help candidates prepare for the Test de Connaissance du Français (TCF) through structured practice and simulated examinations.',
    extendedOverview:
      'Free TCF provides an accessible preparation environment for French language examination candidates. The platform incorporates simulated examination sessions, timed questions, listening comprehension activities, automated scoring, and performance feedback.',
    highlights: [
      'Timed examination sessions for structured practice',
      'Audio-based listening comprehension modules',
      'Automated question scoring and performance evaluation',
      'Performance breakdown across examination categories',
    ],
    architecture:
      'Developed with Next.js, React, and TypeScript, with Tailwind CSS for responsive interfaces and Jest for testing application logic.',
    outcomes:
      'Created an interactive examination preparation experience with timed practice, automated evaluation, and performance feedback.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Jest'],
    image: '/image%20copy%202.png',
    imageAlt: 'Free TCF exam preparation module interface preview',
    href: 'http://freetcf.vercel.app/',
    github: '',
    status: 'Live in Production',
    year: '2025',
    client: 'Language Learning Project',
    role: 'Frontend & System Engineer',
  },
  {
    slug: 'askkenny',
    number: '04',
    name: 'AskKenny AI Assistant',
    category: 'AI & Utility',
    type: 'AI assistant application',
    tagline: 'A conversational AI application for information, content generation, and problem-solving.',
    description:
      'An AI-powered conversational application designed to assist with natural language queries, content drafting, technical questions, and everyday problem-solving.',
    extendedOverview:
      'AskKenny is a conversational AI application that provides a structured interface for interacting with AI models. It focuses on accessible conversations, content generation, technical assistance, and natural language problem-solving.',
    highlights: [
      'Conversational interface integrated with OpenAI models',
      'Markdown rendering and code syntax highlighting',
      'Copy utilities for generated text and code',
      'Responsive chat interface with configurable prompt contexts',
    ],
    architecture:
      'Built with React and TypeScript, using Framer Motion for interface transitions and API integration for AI-powered responses.',
    outcomes:
      'Developed a lightweight conversational interface for accessing AI-powered assistance through a responsive web application.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    image: '/image%20copy%203.png',
    imageAlt: 'AskKenny AI conversational assistant interface preview',
    href: 'https://askkenny.vercel.app/',
    github: '',
    status: 'Live in Production',
    year: '2025',
    client: 'Personal Innovation Project',
    role: 'Creator & Full-Stack Developer',
  },
 
    
  {
    slug: 'iultimate',
    number: '08',
    name: 'iUltimate',
    category: 'Frontend Engineering',
    type: 'Web application',
    tagline: 'A web development project demonstrating modern frontend implementation.',
    description:
      'A frontend development project built with modern web technologies.',
    extendedOverview:
      'iUltimate is a web development project within the developer portfolio, built using React and Vite.',
    highlights: [
      'React-based frontend implementation',
      'Vite-powered development environment',
      'Component-based application development',
    ],
    architecture:
      'Built using React and Vite.',
    outcomes:
      'Developed and deployed a React-based web project.',
    technologies: ['React', 'Vite', 'JavaScript'],
    image: '/iultimate.png',
    imageAlt: 'iUltimate web project interface',
    href: '',
    github: '',
    status: 'Deployed',
    year: '2026',
    client: 'Personal Project',
    role: 'Frontend Developer',
  },
  {
    slug: 'kdp-victor',
    number: '09',
    name: 'KDP Victor',
    category: 'Full-Stack & EdTech',
    type: 'Course management and learning platform',
    tagline: 'A digital platform for online courses, student enrollment, and cohort-based learning.',
    description:
      'A course management platform developed for a financial management coach and KDP mentor, supporting course offerings, student registration, and payment management.',
    extendedOverview:
      'KDP Victor is a digital platform for Ayantoyinbo Victor, designed to support the delivery and management of online courses and cohort-based training programmes. The platform brings course administration, student registration, enrollment management, and payment workflows into a centralized application.',
    highlights: [
      'Course and training track creation and management',
      'Student registration and enrollment workflows',
      'Administrative interface for viewing registered students',
      'Paystack payment integration and payment workflow management',
      'Cloudinary integration for image and file uploads',
      'Database-backed application workflows for course and student records',
    ],
    architecture:
      'Designed with Next.js for frontend and backend development, MongoDB for data persistence, and Cloudinary for media and file management. Paystack handles payment processing, while GSAP and Framer Motion support interface animations and interactions.',
    outcomes:
      'Designed to centralize course administration, student enrollment, and payment management for online training and cohort-based programmes.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'MongoDB',
      'Paystack',
      'Cloudinary',
      'GSAP',
      'Framer Motion',
    ],
    image: '/victorkdp.png',
    imageAlt: 'KDP Victor online course and student management platform',
    href: 'https://victorkdp.vercel.app/',
    github: '',
    status: 'Project Development',
    year: '2026',
    client: 'Ayantoyinbo Victor',
    role: 'Full-Stack Developer',
  },
];


export const capabilities = [
  {
    number: '01',
    slug: 'frontend-engineering',
    title: 'Frontend Engineering & Architecture',
    shortTitle: 'Frontend Engineering',
    tagline: 'Responsive, accessible user interfaces built for speed and clarity.',
    description:
      'Responsive, accessible interfaces shaped around the details that make products feel clear, effortless, and delightful to use.',
    deliverables: [
      'Next.js & React single-page and server-rendered web applications',
      'Design system implementation directly from Figma prototypes',
      'Strict TypeScript typings for maintainable component hierarchies',
      'Micro-interactions and fluid animations using Framer Motion and GSAP',
      'Accessible semantic HTML adhering to WCAG standards',
    ],
    tools: 'React · Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP',
  },
  {
    number: '02',
    slug: 'backend-development',
    title: 'Backend Systems & RESTful APIs',
    shortTitle: 'Backend Development',
    tagline: 'Reliable server logic, structured data models, and resilient services.',
    description:
      'Reliable APIs and server-side systems, from structured data modeling and third-party integrations to the business logic that powers modern products.',
    deliverables: [
      'RESTful API development with Node.js and Express',
      'Database modeling and indexing with MongoDB, Mongoose, and PostgreSQL',
      'Authentication flows, route protection, and session handling',
      'Third-party webhook integrations (payments, mailers, notification hooks)',
      'Real-time communication using WebSockets for live status updates',
    ],
    tools: 'Node.js · Express · MongoDB · Mongoose · PostgreSQL · REST APIs · WebSockets',
  },
  {
    number: '03',
    slug: 'product-delivery',
    title: 'End-to-End Product Delivery & CMS',
    shortTitle: 'End-to-End Delivery',
    tagline: 'Connected product experiences from initial architecture through deployment.',
    description:
      'Connected product experiences that bring thoughtful interfaces, dependable services, and automated cloud deployments together seamlessly.',
    deliverables: [
      'Turnkey web applications, platforms, and e-commerce stores',
      'Custom content management systems (CMS) for non-technical teams',
      'Paystack payment gateway integration and financial transaction flows',
      'CI/CD pipeline configuration and automated deployment on Vercel & Netlify',
      'Domain configuration, SSL certificates, and production environment setup',
    ],
    tools: 'Next.js · Node.js · Paystack · Git · GitHub Actions · Vercel · Netlify',
  },
  {
    number: '04',
    slug: 'performance-quality',
    title: 'Performance Optimization & Code Quality',
    shortTitle: 'Performance & Quality',
    tagline: 'Measurable speed enhancements, test coverage, and clean maintainability.',
    description:
      'Comprehensive performance audits, bundle size optimization, and unit testing that elevate user experience and protect production stability.',
    deliverables: [
      'Code splitting, dynamic imports, and asset lazy loading (+35% initial load speed)',
      'Core Web Vitals remediation (LCP, CLS, INP) for search ranking and usability',
      'Automated unit testing with Jest for robust regression prevention',
      'Component refactoring and transition to scalable repository patterns',
      'Cross-browser and multi-device QA validation',
    ],
    tools: 'Jest · Lighthouse · Chrome DevTools · Bundle Analyzers · Postman',
  },
];

export const experience = [
  {
    period: 'November 2025 – Present',
    role: 'Full-Stack Developer (Contract & Freelance)',
    organization: 'Remote',
    location: 'Nigeria / Remote',
    summary:
      'Developing and shipping production-ready web applications for international clients across education, retail, and organizational sectors.',
    achievements: [
      'Architected end-to-end applications using Next.js, Node.js, Express, and MongoDB.',
      'Designed responsive UI components from Figma handoffs with strict TypeScript types.',
      'Implemented payment integrations (Paystack), CMS workflows, and RESTful APIs.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  },
  {
    period: '2026',
    role: 'Full-Stack Developer (Contract)',
    organization: 'ICLM (Impact Christian Leadership Ministry)',
    location: 'Nigeria',
    summary:
      'Engineered a modern web platform and custom content management system for media and sermon distributions.',
    achievements: [
      'Delivered a custom CMS allowing administrators to manage sermons, events, and media without developers.',
      'Constructed modular, mobile-responsive interfaces using Next.js and Tailwind CSS.',
      'Optimized media playback modules for reliable streaming across low-bandwidth connections.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'CMS'],
  },
  {
    period: 'August 2025 – November 2025',
    role: 'Frontend Developer (Contract)',
    organization: 'EduSys',
    location: 'Remote',
    summary:
      'Served as sole frontend engineer for an enterprise education application, owning UI architecture from prototype to production.',
    achievements: [
      'Developed core workflows for course management, student tracking, and financial analytics.',
      'Integrated real-time live updates via REST APIs and WebSockets for concurrent users.',
      'Boosted frontend performance by +35% through bundle optimization and code splitting.',
      'Wrote unit tests with Jest to raise code stability and prevent regressions.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'Jest'],
  },
  
  {
    period: '2025',
    role: 'Frontend Developer (Contract)',
    organization: 'Table Health Solution Inc.',
    location: 'Remote',
    summary:
      'Collaborated on building a digital health tech application supporting patient consultations and recommendations.',
    achievements: [
      'Crafted interactive patient dashboards connected with backend API services.',
      'Introduced comprehensive Jest unit testing reaching 70% coverage.',
      'Cut initial page load times by 30% through dynamic imports and image caching.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Jest'],
  },
  {
    period: 'Academic IT Placement',
    role: 'Software Engineering Trainee',
    organization: 'Bowen University Teaching Hospital (BUTH)',
    location: 'Ogbomoso, Nigeria',
    summary:
      'Engineered and integrated an internal Hospital Management System (HMS) dashboard during IT industrial placement.',
    achievements: [
      'Constructed internal patient record tracking and department administrative views.',
      'Earned direct recommendation from ICT leadership for dependability and creative initiative.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'CSS3', 'HTML5'],
  },
];

export const education = {
  degree: 'B.Tech. in Computer Science & Engineering',
  institution: 'Ladoke Akintola University of Technology (LAUTECH)',
  location: 'Ogbomoso, Oyo State, Nigeria',
  focus:
    'Core foundations in software engineering, data structures, algorithms, database management, and computer networks.',
};

export const workingPrinciples = [
  {
    number: '01',
    title: 'Clarity over cleverness',
    description:
      'Software is read far more often than it is written. I build transparent component architectures and clear API contracts that teams can easily understand and extend.',
  },
  {
    number: '02',
    title: 'Performance as a feature',
    description:
      'Speed and low latency directly impact user trust. I prioritize fast initial paints, disciplined asset delivery, code splitting, and responsive interactions from day one.',
  },
  {
    number: '03',
    title: 'Inclusive and accessible by default',
    description:
      'Every user deserves an effortless experience. Semantic HTML, proper ARIA landmarks, keyboard focus rings, and contrast checks are baked into every view.',
  },
  {
    number: '04',
    title: 'Direct ownership & honest collaboration',
    description:
      'From early scoping conversations through deployment, I believe in transparent communication, realistic timelines, and taking full responsibility for shipped code.',
  },
];

export const recommendations = [
  {
    quote:
      'Working with Kehinde was a fantastic experience. He understood our full-stack requirements clearly and delivered a robust Node.js backend integrated with a clean, responsive frontend.',
    name: 'Adedimeji Akeem',
    role: 'Multimedia Head',
    organization: 'FUTA',
  },
  {
    quote:
      'Kehinde is highly creative and always brings fresh ideas to the Frontend team. He built and integrated an excellent dashboard for our HMS during his IT placement. A reliable team player indeed.',
    name: 'Mr. Akanni Samuel',
    role: 'ICT Head',
    organization: 'BUTH Hospital',
  },
  {
    quote:
      'Kehinde is extremely skilled and dependable. Built and integrated the entire Software for our real estate company, I have recommended him twice.',
    name: 'Marcus Adebayo',
    role: 'Product Owner',
    organization: 'Eden Estates',
  },
];

export const categorizedSkills = {
  frontend: [
    'React 19',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'Redux Toolkit',
    'Zustand',
    'React Query',
    'GSAP',
    'Framer Motion',
    'HTML5 / Semantic Web',
    'CSS3 / Responsive UI',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose ODM',
    'PostgreSQL',
    'Supabase',
    'RESTful API Design',
    'WebSockets',
    'Authentication & JWT',
    'Paystack Payment API',
  ],
  workflow: [
    'Git & GitHub',
    'Vercel',
    'Netlify',
    'Jest Unit Testing',
    'Postman API Testing',
    'Vite Build Tool',
    'Figma to Code',
    'Lighthouse Optimization',
    'CI/CD Workflows',
  ],
};

export const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
  'Paystack API',
  'Redux',
  'Zustand',
  'React Query',
  'GSAP',
  'Framer Motion',
  'Jest',
  'Git',
  'Vercel',
];

export const faqs = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'I specialize in full-stack web applications, custom frontend user experiences, CMS platforms, and REST API development. I regularly collaborate with founders, startups, and established organizations needing dependable development support.',
  },
  {
    question: 'How does your contact and inquiry workflow work?',
    answer:
      'Because this static portfolio preserves privacy and does not send visitor information to a remote database, the contact form validates your inquiry details and automatically prepares an email draft in your email client. A one-click copy button is also provided so you can paste the formatted brief anywhere.',
  },
  {
    question: 'Are you available for international or remote work?',
    answer:
      'Yes. I am based in Nigeria (WAT, UTC+1) and work with clients and teams globally across time zones via GitHub, Slack, Discord, and asynchronous workflows.',
  },
  {
    question: 'Can you help optimize existing web applications?',
    answer:
      'Yes. In previous engagements (such as EduSys and Healthline), I have reduced initial load times by 30–35% through bundle optimization, code splitting, lazy loading, and targeted refactoring.',
  },
];
