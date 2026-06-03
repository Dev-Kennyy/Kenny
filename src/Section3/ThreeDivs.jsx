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
            <p className="mb-2 text-lg font-extrabold text-black">
              Frontend Development
            </p>
            <p className="text-xs text-gray-600">
              Crafting responsive, accessible, and user-friendly interfaces
              with React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS.
            </p>
          </TheDiv>
        </div>

        <div className="w-72 flex-shrink-0 snap-center sm:w-80">
          <TheDiv>
            <p className="mb-2 text-lg font-extrabold text-black">
              Backend Development
            </p>
            <p className="text-xs text-gray-600">
              Building scalable APIs and server-side applications using Node.js,
              Express.js, MongoDB, MySQL, Supabase, and RESTful services.
            </p>
          </TheDiv>
        </div>

        <div className="w-72 flex-shrink-0 snap-center sm:w-80">
          <TheDiv>
            <p className="mb-2 text-lg font-extrabold text-black">
              Full-Stack Solutions
            </p>
            <p className="text-xs text-gray-600">
              Developing end-to-end web applications, managing state with Redux
              and React Query, integrating APIs, and deploying projects with
              Git, GitHub, Vercel, and Netlify.
            </p>
          </TheDiv>
        </div>
      </div>
    </div>
  );
}

export default ThreeDivs;