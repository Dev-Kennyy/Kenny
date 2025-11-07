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
            header="Fully Integrated E-Commerce"
            client="React, Tailwind, TypeScript"
            details="A responsive web application that allows users to order pizza online with a smooth and intuitive user interface. Users can browse a selection of pizzas, customize their orders (e.g., size, quantity, toppings), and add items to their cart."
            src="Screenshot (83).png"
            height="h-[370px]"
            link="https://e-commerce2-beta-eight.vercel.app"
          />
        </div>

        <div className="w-[300px] flex-shrink-0 sm:w-[300px] sm:flex-shrink-0">
          <Card
            header="AI Application"
            client="React.Js, TypeScript"
            details="An interactive AI-powered web application built with React TypeScript and Tailwind CSS that allows users to chat with an intelligent assistant, generate creative responses, and experience smooth real-time interactions. Designed with an intuitive, responsive UI and enhanced with Framer Motion for engaging animations. Built with a third party API"
            src="image.png"
            height="h-[420px]"
            link="https://ecommercekenny.vercel.app/"
          />
        </div>
        <div className="w-[300px] flex-shrink-0 sm:w-[300px] sm:flex-shrink-0">
          <Card
            header="A Predictive Application"
            client="React, Tailwind & Typescript"
            details="An AI applicaton that predicts health challenges with some crypto tokens. This leverages Smart Contract and third parties API fot it implementation. It predicts possible causes of sicknesses, alerts users about possible risk factors based on the Environment at the time of use"
            src="Screenshot (86).png"
            height="h-[370px]"
            link="https://crypto-five-roan.vercel.app"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
