function TheDiv({ children }) {
  return (
    <div className="flex h-56 w-64 min-w-[14rem] flex-col items-center justify-center rounded-xl border-2 border-b-4 border-r-4 border-black bg-white p-4 text-center text-black shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl sm:h-48 sm:w-72">
      {children}
    </div>
  );
}

export default TheDiv;
