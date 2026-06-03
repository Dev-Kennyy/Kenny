import Card from './Card';

function Cards() {
  const projects = [
    
    {
      header: "TCF Exam",
      client: "Full-stack Project",
      details: "A comprehensive TCF exam preparation platform featuring interactive practice tests, timed mock examinations, performance tracking, study resources, personalized learning paths, and real-time feedback to help candidates improve their French language proficiency.",
      tags: ["Next.js", "Node.js", "Express", "MongoDB", "Paystack"],
      src: "/image copy 2.png",
      link: "https://tcf-exam-beta.vercel.app/",
      // github: "https://github.com/Dev-Kennyy/devconnect"
    },{
      header: "E-Commerce",
      client: "Full-Stack PRODUCT",
      details: "A modern eCommerce platform featuring product catalog browsing, advanced search and filtering, shopping cart management, secure authentication, order processing, and seamless payment integration.",
      tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "Paystack"],
      src: "/image copy.png",
      // link: "https://taskflow-saas.vercel.app",
      github: "https://github.com/Dev-Kennyy/LappyTech/"
    },
    {
      header: "AI Chat App",
      client: "AI Intelligence SaaS",
details: "An AI-powered assistant that helps users generate content, answer questions, solve problems, and streamline workflows through intelligent natural language interactions and real-time responses.",      tags: ["React.js", "TypeScript", "OpenAI"],
      src: "/image copy 3.png",
      link: 'https://askkenny.vercel.app/'
      // github: "https://github.com/Dev-Kennyy/Kenny-AI"
    }
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
