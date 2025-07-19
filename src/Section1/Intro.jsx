import LeftIntro from './LeftIntro';
import RightIntro from './RightIntro';

function Intro() {
  return (
    <div className="flex flex-wrap-reverse items-center justify-between gap-[30px] p-10 sm:flex-nowrap sm:px-[100px] sm:py-[120px]">
      <LeftIntro />
      <RightIntro />
    </div>
  );
}

export default Intro;
