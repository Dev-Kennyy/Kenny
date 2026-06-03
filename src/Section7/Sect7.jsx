import { FaGithub } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';

function Sect7() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-5 bg-white border-t border-gray-200 p-6 sm:flex-row relative z-10">
      <div className="text-sm font-semibold text-gray-700">© {new Date().getFullYear()} Kehinde Salimonu</div>
      <div className="flex">
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/Dev-Kennyy">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kehinde-salimonu-b7a956249">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:kehindesalimonu1@gmail.com">
              <CiMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sect7;
