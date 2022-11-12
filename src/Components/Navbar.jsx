import Link from "next/link";
import { PhoneIcon } from "./Icons";

const Navbar = () => {
  return (
    <div className="flex sm:justify-between sticky sm:relative top-0 bg-[#0e1630] py-2 z-50  justify-center items-center ">
      <div className="w-52">
        <img className="w-full" src="logo1.png" alt="logo" />
      </div>
      <div className="sm:flex hidden xl:gap-6 gap-2 2xl:gap-12 py-11 items-center">
        <ul className="lg:flex hidden  text-secondary xl:gap-10 gap-6 2xl:gap-14 border-r">
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#home">Home</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#about_me">About</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#">Services</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium">
              <Link href="#portfolio">Portfolio</Link>
            </span>
          </li>
          <li>
            <span className="hover:text-primary duration-300 text-lg font-medium pr-14  ">
              <Link href="#contact">Contact Me</Link>
            </span>
          </li>
        </ul>
        <div className="flex gap-4">
          <PhoneIcon />
          <span className="text-primary">
            <Link href="tel:01947555458">+880 19475-55458</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
