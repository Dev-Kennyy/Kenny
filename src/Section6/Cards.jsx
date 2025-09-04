import Card from './Card';

function Cards() {
  return (
    <section className="px-2 pt-20 sm:px-6">
      <div
        className="m-auto w-screen"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
}

export default Cards;
