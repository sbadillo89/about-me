import { Github, Linkedin, Light } from "../assets";

const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed top-0 inset-x-0 grid grid-cols-2 p-6 mb-6 bg-red-500">
      <div className="flex items-center text-white">
        <Light />
        <span className="font-semibold lg:text-xl sm:text-lg tracking-tight">
          Sergio Andrés Badillo Bustillo
        </span>
      </div>
      <div>
        <div className="flex justify-end">
          <a
            href="https://www.linkedin.com/in/sergio-badillo-bustillo-09228a10a/"
            target="blank"
            className="inline-block mx-2 animate-bounce"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/sbadillo89"
            target="blank"
            className="inline-block mx-2 animate-bounce"
          >
            <Github />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
