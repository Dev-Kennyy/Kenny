import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-col justify-center gap-4 px-14 pt-10 sm:flex-row">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
