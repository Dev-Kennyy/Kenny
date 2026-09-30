export const navigation = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Recommendations', href: '#recommendations', id: 'recommendations' },
];

export const contactEmail = 'kehindesalimonu1@gmail.com';
export const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export const projects = [
  {
    number: '00',
    name: 'LappyTech E-commerce',
    type: 'Full-stack platform',
    description:
      'A comprehensive e-commerce platform with interactive product browsing, secure checkout, and inventory management.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
    image: '/lappytech.png',
    imageAlt: 'LappyTech E-commerce platform preview',
    href: 'https://lappytech.vercel.app/',
  },
  {
    number: '01',
    name: 'Impact CLM',
    type: 'Content-managed website',
    description:
      'A church website with a custom CMS for devotionals, sermons, events, books, jobs, meetings, and other ministry content.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/Screenshot%20(35).png',
    imageAlt: 'Impact CLM website preview',
    href: 'https://impactclm.org',
  },
  {
    number: '02',
    name: 'Free TCF',
    type: 'Test Exam Platform',
    description:
      'A church website with a custom CMS for devotionals, sermons, events, books, jobs, meetings, and other ministry content.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/image copy 2.png',
    imageAlt: 'Free TCF website preview',
    href: 'http://freetcf.vercel.app/',
  },
  {
    number: '03',
    name: 'AskKenny',
    type: 'AI assistant',
    description:
      'An AI-powered assistant for generating content, answering questions, solving problems, and streamlining workflows through natural language.',
    technologies: ['React', 'TypeScript', 'OpenAI'],
    image: '/image%20copy%203.png',
    imageAlt: 'AskKenny application preview',
    href: 'https://askkenny.vercel.app/',
  },
];

export const capabilities = [
  {
    number: '01',
    title: 'Frontend engineering',
    description:
      'Responsive, accessible interfaces shaped around the details that make products feel clear and effortless to use.',
    tools: 'React · Next.js · TypeScript · Tailwind CSS',
  },
  {
    number: '02',
    title: 'Backend development',
    description:
      'Reliable APIs and server-side systems, from data modeling and integration to the logic that powers a product.',
    tools: 'Node.js · Express · NestJS · MongoDB · PostgreSQL',
  },
  {
    number: '03',
    title: 'End-to-end delivery',
    description:
      'Connected product experiences that bring thoughtful interfaces, useful services, and deployment together.',
    tools: 'REST APIs · Redux · React Query · Git · Vercel',
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

export const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'NestJS',
  'MongoDB', 'PostgreSQL', 'Supabase', 'Redux', 'React Query', 'Git',
];

export const metrics = [
  { value: 24, suffix: '/7', label: 'SUPPORT' },
  { value: 4.8, decimals: 1, suffix: '/5', label: 'CLIENTS RATINGS' },
  { value: 98, suffix: '%', label: 'HAPPY CLIENT' },
];