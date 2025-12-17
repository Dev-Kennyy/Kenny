import TheDiv from './TheDiv';

function ThreeDivs() {
  return (
    <div className="relative w-full pt-9">
      {/* Scroll hint (only on mobile) */}
      <div className="pointer-events-none absolute left-1/2 top-2 z-20 flex -translate-x-1/2 select-none items-center gap-2 sm:hidden">
        <span className="animate-bounce text-lg text-gray-400">&#8592;</span>
        <span className="rounded bg-white/80 px-2 text-xs text-gray-500 shadow">
          Scroll
        </span>
        <span className="animate-bounce text-lg text-gray-400">&#8594;</span>
      </div>

      {/* Cards wrapper */}
      <div
        className="flex w-full gap-4 overflow-x-auto px-4 py-6 sm:flex-wrap-reverse sm:justify-center sm:overflow-visible"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="w-72 flex-shrink-0 snap-center sm:w-80">
          <TheDiv>
            <p className="font-extrabold">Front-End Development</p>
            <p className="text-sm">Build Interactive UI with JavaScript frameworks & TypeScript</p>
          </TheDiv>
        </div>

        <div className="w-72 flex-shrink-0 snap-center sm:w-80">
          <TheDiv>
            <p className="font-extrabold">REST API & Query</p>
            <p className="text-sm"></p>
          </TheDiv>
        </div>

        <div className="w-72 flex-shrink-0 snap-center sm:w-80">
          <TheDiv>
            <p className="font-extrabold">Git & Github</p>
            <p className="text-sm">For collaboration with team and community</p>
          </TheDiv>
        </div>
      </div>
    </div>
  );
}

export default ThreeDivs;
