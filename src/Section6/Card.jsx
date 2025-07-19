function Card() {
  return (
    <div className="flex items-center rounded-xl border border-b-4 border-r-4 border-black shadow">
      <img src="public/react 1.png" alt="" width="190px" />
      <div className="p-4 text-left">
        <p className="text-sm text-[#666666]">E-Commerce</p>
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
