import Heading from './Heading';
import ThreeDivs from './ThreeDivs';

function Sect3() {
  return (
    <div id="Sect3">
      <div className="relative flex flex-col pt-9">
        <Heading />
        <img
          src="public\react 1.png"
          alt=""
          className="absolute z-10 object-cover opacity-15"
          style={{ right: 0, top: 0, padding: '' }}
          sm:block
        />
        <ThreeDivs />
      </div>
    </div>
  );
}

export default Sect3;
