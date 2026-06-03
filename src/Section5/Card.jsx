import { FaGithub } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

function Card({ header, client, details, tags = [], src, link, github }) {
  function handleDemoClick(e) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  return (
    <div className="flex w-[320px] flex-col rounded-2xl border-2 border-black bg-white p-3 text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200">
        <img
          src={src}
          alt={header}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Badges/Tags overlay */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="rounded bg-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-2 pt-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black uppercase tracking-tight text-black">{header}</h3>
            <span className="text-[10px] font-bold uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
              {client}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-gray-600 h-20 overflow-hidden line-clamp-4">{details}</p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9px] font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex gap-3 justify-end">
          {link && (
            <button
              onClick={handleDemoClick}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black bg-orange-400 py-2 text-center text-xs font-extrabold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-orange-300 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              <FiExternalLink className="text-sm" /> Live Demo
            </button>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-right rounded-lg border-2 border-black bg-white p-2 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-gray-100 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              <FaGithub className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
