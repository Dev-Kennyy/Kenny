import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 pt-8 sm:flex-nowrap">
      <Card
        header="E-Commerce"
        client="Ezra Akande"
        details="Best place to buy your gadgets Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quasi debitis"
        src="Screenshot (263).png"
        height="h-[310px]"
      />
      <Card
        header="E-Commerce"
        client="John Ajala"
        details="Best place to buy your gadgets Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quasi debitis"
        src="Screenshot (263).png"
        height="h-[350px]"
      />
      <Card
        header="E-Commerce"
        client="Samuel Ogunnaike"
        details="Best place to buy your gadgets Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quasi debitis"
        src="Screenshot (263).png"
        height="h-[310px]"
      />
    </div>
  );
}

export default Cards;
