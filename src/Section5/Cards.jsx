import Card from './Card';

function Cards() {
  return (
    <div
      className="flex overflow-x-auto px-4 pb-6 pt-16"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="m-auto flex w-max gap-4">
        {/* Show only one card at a time on small screens, all on larger screens */}

        <div className="w-[300px] flex-shrink-0 sm:w-[300px] sm:flex-shrink-0">
          <Card
            header="E-Commerce"
            client="React.Js & Tailwind"
            details="A responsive web application that allows users to order pizza online with a smooth and intuitive user interface. Users can browse a selection of pizzas, customize their orders (e.g., size, quantity, toppings), and add items to their cart."
            src="Screenshot (273).png"
            height="h-[350px]"
            link="https://kennyfood.vercel.app/"
          />
        </div>

        <div className="w-[300px] flex-shrink-0 sm:w-[300px] sm:flex-shrink-0">
          <Card
            header="E-Commerce"
            client="React.Js & Tailwind"
            details="A fully responsive and functional E-Commerce website built to simulate a modern online shopping experience. Users can browse products, add items to carts, perform authentication, order product, remove item from cart and perform other functions. Designed with a user-centric UI and optimized performance with a touch of framer motion for animating scroll."
            src="Screenshot (272).png"
            height="h-[420px]"
            link="https://ecommercekenny.vercel.app/"
          />
        </div>
        <div className="w-[300px] flex-shrink-0 sm:w-[300px] sm:flex-shrink-0">
          <Card
            header="Landing Page"
            client="HTML & Bootstrap"
            details="A clone of my university’s official landing page designed to replicate the structure, layout, & design of the original site. Built to showcase front-end skills in translating real-world designs into responsive web pages"
            src="Screenshot (274).png"
            height="h-[350px]"
            link="https://lautechclone.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
