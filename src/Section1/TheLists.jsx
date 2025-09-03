// TheLists.jsx
function TheLists({ onClick }) {
  return (
    <>
      <li className="text-xl">
        <a href="#Sect2" onClick={onClick}>
          About
        </a>
      </li>
      <li className="text-xl">
        <a href="#Sect3" onClick={onClick}>
          What I do
        </a>
      </li>
      <li className="text-xl">
        <a href="#Sect4" onClick={onClick}>
          My Project
        </a>
      </li>
    </>
  );
}

export default TheLists;
