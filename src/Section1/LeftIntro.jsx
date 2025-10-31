import Button from '../UI/Button';

function LeftIntro() {
  return (
    <div className="px-4 text-center sm:text-left">
      <p className="text-sm tracking-wider">Hi, My Name is Salimonu Kehinde</p>
      <br />
      <h1 className="text-5xl font-bold">
        Front-End <br /> <span className="tracking-wider">Developer</span>
      </h1>
      <p className="text-balance py-4">
        focus in harnessing the power of React.js, to craft dynamic web
        applications. creating seamless user experiences that bring ideas to
        life.
      </p>
      <Button type="yellow">
        <a href="MyCV.pdf" download>
          Learn About Me
        </a>
      </Button>
    </div>
  );
}

export default LeftIntro;
