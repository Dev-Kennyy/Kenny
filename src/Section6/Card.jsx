function Card({ img, p1, h, p2 }) {
  return (
    <div className="relative flex w-[280px] flex-shrink-0 snap-center flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 sm:w-[320px]">
      {/* Profile Image */}
      <div className="-mt-14 flex justify-center">
        <img
          src={img}
          alt="Reviewer"
          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-grow flex-col items-center text-center">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-500">
          {p1}
        </p>
        <p className="mb-2 text-lg font-semibold text-gray-800">{h}</p>
        <p className="text-sm leading-relaxed text-gray-600">{p2}</p>
      </div>

      {/* Star Rating */}
      <div className="mt-4 flex justify-center text-yellow-400">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
}

export default Card;
