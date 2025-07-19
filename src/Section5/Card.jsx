function Card() {
  return (
    <div className="flex w-[320px] flex-row flex-wrap items-center gap-9 rounded-md border-b-4 border-r-2 border-black text-left shadow-lg sm:flex-col">
      <img
        src="public/Screenshot (263).png"
        alt=""
        className="h-[170px] w-full"
      />
      <div className="p-2">
        <p className="pt-5 text-sm text-[#666666]">E-Commerce</p>
        <p className="">Amar GunShop</p>
        <p className="pt-2 text-xs text-[#999999]">
          Best place to buy your gadgets Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quasi debitis
        </p>
      </div>
    </div>
  );
}

export default Card;
