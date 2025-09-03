// Header.jsx
import { useState } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import TheLists from './TheLists.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow">
        <div className="text-xl font-extrabold">Dev_Kenny</div>

        {/* Mobile Menu Button */}
        <div
          className="block cursor-pointer text-[32px] sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FiAlignRight />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <ul className="flex gap-7">
            <TheLists />
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-95">
          <ul className="flex flex-col gap-10 text-center text-3xl font-bold text-white">
            <TheLists onClick={() => setIsOpen(false)} />
            <li>
              <button
                className="mt-6 rounded bg-white px-6 py-2 text-black"
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
