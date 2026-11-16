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
    tagline: 'Modern electronics commerce platform with real-time inventory and payments.',
    description:
      'A comprehensive e-commerce platform with interactive product browsing, secure checkout, persistent cart management, and inventory tracking.',
    extendedOverview:
      'LappyTech was engineered to provide customers with an effortless computer shopping experience. The platform integrates instant catalog filtering, dynamic product detail views, persistent shopping carts, and a streamlined multi-step checkout workflow connected directly to the Paystack payment gateway.',
    highlights: [
      'Interactive catalog browsing with category filtering and real-time search',
      'Secure transaction processing with verified Paystack payment integration',
      'Persistent cart state management with real-time quantity validation',
      'Backend inventory management APIs with structured MongoDB schemas',
    ],
    architecture:
      'Frontend architected with Next.js and Tailwind CSS for rapid server-side rendering and responsive layouts. Backend powered by Node.js and Express RESTful endpoints, with MongoDB storing product models, order histories, and transaction logs.',
    outcomes:
      'Delivered a frictionless checkout flow with sub-second page transitions and secure order confirmation notices.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'Tailwind CSS', 'REST APIs'],
    image: '/lappytech.png',
    imageAlt: 'LappyTech E-commerce storefront and laptop listing page preview',
    href: 'https://lappytech.vercel.app/',
    github: 'https://github.com/Dev-Kennyy',
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
    tagline: 'Custom organization platform and CMS for sermons, events, and ministry media.',
    description:
      'A custom church platform and CMS that brings sermons, devotionals, events, and ministry resources together.',
    extendedOverview:
      'Impact Christian Leadership Ministry needed a unified digital hub to connect members and international visitors with teachings, events, announcements, and ministry resources. The platform features an administrative CMS empowering non-technical team members to manage media releases independently.',
    highlights: [
      'Custom Content Management System (CMS) enabling self-service content publishing',
      'Responsive audio and video sermon library with categorization and metadata',
      'Interactive calendar for announcements, upcoming conferences, and registrations',
      'Mobile-first responsive architecture tested across varying network conditions',
    ],
    architecture:
      'Engineered with Next.js, React, and TypeScript for structured typing and component modularity. Styled with Tailwind CSS for clean layout aesthetics, backed by decoupled Node.js services for media and content delivery.',
    outcomes:
      'Empowered ministry administrators to publish sermons and update event itineraries without technical support, boosting congregation digital engagement.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'CMS'],
    image: '/Screenshot%20(35).png',
    imageAlt: 'Impact CLM church platform homepage and sermon portal preview',
    href: 'https://impactclm.org',
    github: 'https://github.com/Dev-Kennyy',
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
    type: 'Online exam platform',
    tagline: 'Focused test-preparation platform helping candidates practice French exam modules.',
    description:
      'A focused test-preparation platform that helps learners practice, track progress, and prepare with confidence.',
    extendedOverview:
      'Free TCF is an accessible web examination platform designed for international candidates preparing for the Test de Connaissance du Français (TCF). It delivers realistic simulated exams with time constraints, instant question scoring, listening comprehension modules, and detailed category diagnostics.',
    highlights: [
      'Timed simulated examinations replicating official exam conditions',
      'Integrated audio player modules tailored for listening comprehension sections',
      'Real-time scoring algorithm with breakdown across grammar, listening, and reading',
      'Progress persistence allowing candidates to evaluate historical performance',
    ],
    architecture:
      'Constructed with Next.js, React, and TypeScript to ensure strict state handling during active test sessions. Optimized with Tailwind CSS and Jest unit tests for score calculation accuracy.',
    outcomes:
      'Streamlined exam preparation for hundreds of international candidates, providing immediate test evaluation without page reload friction.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Jest'],
    image: '/image%20copy%202.png',
    imageAlt: 'Free TCF exam preparation module interface preview',
    href: 'http://freetcf.vercel.app/',
    github: 'https://github.com/Dev-Kennyy',
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
    tagline: 'Conversational AI tool for natural language assistance, drafting, and problem solving.',
    description:
      'An AI-powered assistant for generating content, answering questions, solving problems, and streamlining workflows through natural language.',
    extendedOverview:
      'AskKenny is a responsive AI chat application designed to assist developers and creators with content synthesis, prompt engineering, code troubleshooting, and structured problem-solving through natural dialogue.',
    highlights: [
      'Natural language conversation interface powered by OpenAI model completions',
      'Markdown rendering with code syntax highlighting and quick-copy utilities',
      'Configurable prompt contexts tailored for debugging, technical writing, and brainstorming',
      'Responsive, distraction-free conversational UI with keyboard shortcuts',
    ],
    architecture:
      'Built in React and TypeScript with Framer Motion transitions. Integrates secure API endpoints communicating with OpenAI models, featuring client-side streaming response states and session storage.',
    outcomes:
      'Provides a clean, lightweight personal assistant tool with responsive feedback and ergonomic typing flows.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    image: '/image%20copy%203.png',
    imageAlt: 'AskKenny AI conversational assistant interface preview',
    href: 'https://askkenny.vercel.app/',
    github: 'https://github.com/Dev-Kennyy',
    status: 'Live in Production',
    year: '2025',
    client: 'Personal Innovation Project',
    role: 'Creator & Full-Stack Developer',
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
    organization: 'Independent Engineering',
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
    period: '2025',
    role: 'Frontend Developer (Contract)',
    organization: 'Healthline Startup',
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
