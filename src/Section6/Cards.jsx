import Card from './Card';

function Cards() {
  const reviews = [
    {
      initials: "AK",
      name: "Adedimeji Akeem",
      role: "Multimedia Head",
      company: "FUTA",
      review: "Working with Kehinde was a fantastic experience. He understood our full-stack requirements clearly and delivered a robust Node.js backend integrated with a clean, responsive frontend.",
      bgGradient: "from-blue-500 to-indigo-600"
    },
    {
      initials: "AO",
      name: "Mr. Akanni Samuel",
      role: "ICT Head",
      company: "BUTH Hospital",
      review: "Kehinde is highly creative and always brings fresh ideas to the Frontend team. He built and integrated an excellent dashboard for our HMS during his IT placement. A reliable team player indeed.",
      bgGradient: "from-orange-400 to-red-500"
    },
    {
      initials: "MA",
      name: "Marcus Adebayo",
      role: "Product Owner",
      company: "Eden Estates",
      review: "Kehinde is extremely skilled and dependable. Built and integrated the entire Software for our real estate company, I have recommended him twice",
      bgGradient: "from-emerald-400 to-teal-600"
    }
  ];

  return (
    <section className="px-4 pt-12 sm:px-6">
      <div className="m-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((rev, idx) => (
            <Card
              key={idx}
              initials={rev.initials}
              name={rev.name}
              role={rev.role}
              company={rev.company}
              review={rev.review}
              bgGradient={rev.bgGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
