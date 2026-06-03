import Button from '../UI/Button';

function Sect2() {
  return (
    <div id="Sect2">
      <div className="mx-auto w-full max-w-6xl p-4 pt-[100px] text-center">
        <h1 className="text-4xl font-extrabold tracking-wide sm:text-7xl">
          Get in touch <br /> with me
        </h1>
        <br />
        <p className="tracking-wide text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Passionate and results-oriented Full-Stack Developer with experience
          building robust, high-performance web applications. Expert in modern
          frontend frameworks like Next.js, React, and Tailwind CSS, as well as
          backend architectures using Node.js, Express, NestJS, and databases
          including MongoDB and PostgreSQL. Specialized in end-to-end features: from
          designing efficient database schemas and securing RESTful APIs, to
          developing responsive, interactive user interfaces. Proven ability to
          collaborate in fast-paced teams, automate workflows, and deploy
          optimized, production-ready software.
        </p>
        <Button type="pink">Always Available</Button>
      </div>
    </div>
  );
}

export default Sect2;
