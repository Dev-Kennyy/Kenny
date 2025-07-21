import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-5 pt-14">
      <Card />
      <Card height="hidden sm:flex h-[240px]" />
      <Card />
    </div>
  );
}

export default Cards;
