import { useState } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import TheLists from './TheLists.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="align-center flex justify-between px-[50px] py-[40px] sm:pt-[60px]">
        <div className="text-xl font-extrabold">Dev_Kenny</div>
        <div
          className="block text-[32px] sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FiAlignRight />
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-7">
            <TheLists />
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800">
          <ul className="flex flex-col gap-10 text-3xl font-bold text-white">
            <TheLists />
            <li>
              <button
                className="mt-8 rounded bg-white px-6 py-2 text-black"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
