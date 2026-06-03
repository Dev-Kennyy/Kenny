import { FaStar } from 'react-icons/fa';

function Card({ initials, name, role, company, review, bgGradient = 'from-purple-500 to-pink-500' }) {
  return (
    <div className="relative flex w-[300px] sm:w-[340px] flex-shrink-0 snap-center flex-col justify-between rounded-2xl border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Decorative Quote Mark */}
      <div className="absolute top-4 right-6 select-none text-6xl font-serif text-gray-100 leading-none">
        ”
      </div>

      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex gap-1 text-yellow-400 mb-4">
          <FaStar className="h-4 w-4" />
          <FaStar className="h-4 w-4" />
          <FaStar className="h-4 w-4" />
          <FaStar className="h-4 w-4" />
          <FaStar className="h-4 w-4" />
        </div>

        {/* Review text */}
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700 italic">
          "{review}"
        </p>
      </div>

      {/* Profile Section */}
      <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-4 relative z-10">
        {/* Gradient Initial Avatar */}
        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${bgGradient} text-sm font-bold text-white shadow-inner border-2 border-black`}>
          {initials}
        </div>
        <div className="text-left">
          <h4 className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">{name}</h4>
          <p className="text-[10px] font-bold text-gray-500 uppercase">
            {role} <span className="text-orange-500">@ {company}</span>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Card;
