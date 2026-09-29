import Card from './Card';

function Cards() {
  const projects = [
    {
      header: 'LappyTech E-commerce',
      client: 'Full-stack Project',
      details:
        'A comprehensive e-commerce platform with interactive product browsing, secure checkout, and inventory management.',
      tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
      src: '/image copy 2.png',
      link: 'https://freetcf.vercel.app/',
      // github: "https://github.com/Dev-Kennyy/devconnect"
    },
    {
      header: 'TCF Exam',
      client: 'Full-stack Project',
      details:
        'A comprehensive TCF exam preparation platform featuring interactive practice tests, timed mock examinations, performance tracking, study resources, personalized learning paths, and real-time feedback to help candidates improve their French language proficiency.',
      tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
      src: '/image copy 2.png',
      link: 'https://freetcf.vercel.app/',
      // github: "https://github.com/Dev-Kennyy/devconnect"
    },
    {
      header: 'Church Website with C.M.S.',
      client: 'Full-Stack PRODUCT',
      details:
        'A modern church website with a custom content management system for managing devotionals, sermons, events, books, jobs, meetings, and other ministry content. Features responsive page layouts, dynamic content, admin management, forms, navigation, and a clean mobile-friendly experience.',
      tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js'],
      src: '/Screenshot (35).png',
      link: 'https://impactclm.org',
      // github: "YOUR_GITHUB_REPOSITORY"
    },
    {
      header: 'AI Chat App',
      client: 'AI Intelligence SaaS',
      details:
        'An AI-powered assistant that helps users generate content, answer questions, solve problems, and streamline workflows through intelligent natural language interactions and real-time responses.',
      tags: ['React.js', 'TypeScript', 'OpenAI'],
      src: '/image copy 3.png',
      link: 'https://askkenny.vercel.app/',
      // github: "https://github.com/Dev-Kennyy/Kenny-AI"
    },
  ];

  return (
    <div
      className="flex overflow-x-auto px-4 pb-6 pt-10"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="m-auto flex w-max gap-6 px-4">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            header={project.header}
            client={project.client}
            details={project.details}
            tags={project.tags}
            src={project.src}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
