import image from "../assets/react.svg";
import resume from "../assets/resume.pdf";

export const Navbar = () => {
  return (
    <>
      <header className="z-50">
        <nav className="flex items-center justify-between py-5 px-3 fixed w-full bg-gray-950">
          <div>
            <img src={image} alt="logo " />
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={resume} type="download">Resume</a>
              </li>
              <li>
                <a href="mailto:yuviias89@gmail.com">Hire me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};