import TheDiv from './TheDiv';

function ThreeDivs() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 p-7 pt-9 sm:flex-row">
        <TheDiv>
          <p className="font-extrabold">Front-End Development</p>
          <p className="text-sm"> Build Interactive UI with React.JS</p>
        </TheDiv>
        <TheDiv>
          <p className="font-extrabold">REST API</p>
        </TheDiv>
        <TheDiv>
          <p className="font-extrabold">Git & Github</p>
          <p className="text-sm">For collaboration with team and community</p>
        </TheDiv>
      </div>
    </>
  );
}

export default ThreeDivs;
