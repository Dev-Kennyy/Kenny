import { FaGithub } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

import { FaLinkedin } from 'react-icons/fa';

function Sect7() {
  return (
    <div className="align-center mt-36 flex w-full flex-col items-center justify-between gap-5 bg-white p-5 shadow shadow-orange-50 sm:flex-row">
      <div>©️Kehinde Salimonu</div>
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
