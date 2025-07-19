function TheDiv({ children }) {
  return (
    <div className="shadow- flex h-[200px] w-[250px] flex-col items-center justify-center rounded-lg border-2 border-b-4 border-r-4 border-black p-2 text-center text-black">
      {children}
    </div>
  );
}

export default TheDiv;
