import Button from '../UI/Button';

function LeftIntro() {
  return (
    <div className="px-4 text-center sm:text-left">
      <p className="text-sm tracking-wider">Hi, My Name is Salimonu Kehinde, a</p>
      <br />
      <h1 className="text-5xl font-bold">
        Full-Stack <br /> <span className="tracking-wider">Developer</span>
      </h1>
      <p className="text-balance py-4">
        focus in harnessing the power of Next.js, Node.js, React.js, Express.js & MongoDB to craft dynamic web
        applications. creating seamless user experiences that bring ideas to
        life.
      </p>
      <Button type="yellow">
        <a href="/Kehinde Salimonu.pdf" download>
          Learn About Me
        </a>
      </Button>
    </div>
  );
}

export default LeftIntro;