import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-evenly bg-gray-800 text-white p-5">
        <div>
          <h3 className="text-green-500 font-bold text-3xl text-center py-2">
            {" "}
Yuvraj Singh          </h3>
          <p>🚀 Full Stack Developer | MERN Stack</p>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Quick Links
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Follow me
          </h3>

          <ul className="flex flex-row items-center justify-center">
            <li>
              <a href="https://www.linkedin.com/in/arvind-kumar-7">
                <FaLinkedin className="text-2xl text-blue-400  hover:text-blue-600 hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arvind-kumar-7">
                <FaInstagramSquare className="text-2xl text-pink-500 hover:text-pink-600  hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arvind-kumar-7"
                className="text-2xl text-blue-400 hover:text-blue-600 hover:scale-110"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};