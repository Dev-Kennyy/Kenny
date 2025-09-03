import Heading from './Heading';
import ThreeDivs from './ThreeDivs';

function Sect3() {
  return (
    <div id="Sect3" className="relative pt-9">
      <Heading />
      <img
        src="react 1.png"
        alt="React Logo Background"
        className="absolute right-0 top-0 z-0 hidden w-1/3 max-w-sm object-contain opacity-10 sm:block"
      />
      <ThreeDivs />
    </div>
  );
}

export default Sect3;
