function Card({ header, client, details, height, src, link }) {
  function handleClick(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  return (
    <div
      className={`w-[300px] flex-none rounded-md border border-gray-200 p-2 text-left shadow-lg ${height} cursor-pointer transition-transform duration-200 hover:scale-105`}
      onClick={() => handleClick(link)} // ✅ fixed
    >
      <img
        src={src}
        alt={client}
        className="h-40 w-full rounded-md object-cover"
      />
      <div className="p-2">
        <p className="pt-1 text-sm text-[#666666]">{header}</p>
        <p className="font-medium">{client}</p>
        <p className="pt-2 text-xs text-[#999999]">{details}</p>
      </div>
    </div>
  );
}

export default Card;
