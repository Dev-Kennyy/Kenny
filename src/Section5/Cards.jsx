import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 pt-8 sm:flex-nowrap">
      <Card
        header="E-Commerce"
        client="Web_Clone"
        details="A clone of my university’s official landing page designed to replicate the structure, layout, & design of the original site. Built to showcase front-end skills in translating real-world designs into responsive web pages"
        src="Screenshot (274).png"
        height="h-[330px]"
        link="https://lautechclone.netlify.app/"
      />
      <Card
        header="E-Commerce"
        client="Pizza App"
        details="A responsive web application that allows users to order pizza online with a smooth and intuitive user interface. Users can browse a selection of pizzas, customize their orders (e.g., size, quantity, toppings), and add items to their cart."
        src="Screenshot (273).png"
        height="h-[361px]"
        link="https://kennyfood.vercel.app/"
      />
      <Card
        header="E-Commerce"
        client="Store"
        details="A fully responsive E-Commerce website built to simulate a modern online shopping experience. Users can browse products, add items, perform authentication, order product. Designed with a user-centric UI and optimized performance with a touch of framer motion for animating scroll"
        src="Screenshot (272).png"
        height="h-[390px]"
        link="https://ecommercekenny.vercel.app/"
      />
    </div>
  );
}

export default Cards;
