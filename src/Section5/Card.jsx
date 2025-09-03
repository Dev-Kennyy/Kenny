function Card({ header, client, details, height, src, link }) {
  function handleClick(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }
  return (
    <div
      className={`sm:flex- flex w-[250px] flex-row flex-wrap items-center gap-1 rounded-md border-black p-2 text-left shadow-lg ${height} h-full cursor-pointer hover:scale-105`}
      onClick={handleClick(link)}
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
