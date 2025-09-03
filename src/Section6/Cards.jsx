import Card from './Card';

function Cards() {
  return (
    <section className="px-6 pt-20">
      {/* Section Title */}
      {/* <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        What Clients Say
      </h2> */}

      {/* Horizontal Scroll */}
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-6">
        <Card
          img="anonymous.jpeg"
          p1="Frontend Engineer"
          h="DevLogics"
          p2="Working with Blessing was a fantastic experience. He understood our requirements clearly and delivered a clean, responsive frontend with great user experience."
        />

        <Card
          img="anonymous.jpeg"
          p1="Collaborator"
          h="Hospital"
          p2="Blessing is very creative and always brings fresh ideas to projects. Working with him was smooth and enjoyable."
        />

        <Card
          img="anonymous.jpeg"
          p1="Freelance Client"
          h="Eden Estates"
          p2="Blessing is highly skilled, professional, and reliable. He delivered a clean, well-structured codebase for our project. I’d definitely recommend and work with him again."
        />
      </div>
    </section>
  );
}

export default Cards;
