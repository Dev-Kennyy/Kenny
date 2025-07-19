function Button({ children, type }) {
  const bgColor =
    type === 'yellow'
      ? 'bg-[#F5CC44]'
      : type === 'pink'
        ? 'bg-[#FF6B6B]'
        : 'bg-gray-400'; // fallback
  return (
    <button
      className={`font-bold ${bgColor} my-[10px] rounded-md border-b-[3px] border-r-[1px] border-b-black border-r-black p-2`}
    >
      {children}
    </button>
  );
}

export default Button;
