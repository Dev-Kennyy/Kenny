function Card({ header, client, details, height, src }) {
  return (
    <div
      className={`sm:flex- flex w-[250px] flex-row flex-wrap items-center gap-1 rounded-md border-b-4 border-r-2 border-black text-left shadow-lg ${height}`}
    >
      <img src={src} alt="" className="h-[] w-full" />
      <div className="p-2">
        <p className="pt-1 text-sm text-[#666666]">{header}</p>
        <p className="">{client}</p>
        <p className="pt-2 text-xs text-[#999999]">{details}</p>
      </div>
    </div>
  );
}

export default Card;
