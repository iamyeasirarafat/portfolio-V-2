import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-12 py-11 items-center">
          <ul className="flex text-secondary gap-14">
            <li>
              <span className="hover:text-primary duration-300 text-lg font-medium">
                <Link href="#">Home</Link>
              </span>
            </li>
            <li>
              <span className="hover:text-primary duration-300 text-lg font-medium">
                <Link href="#">About</Link>
              </span>
            </li>
            <li>
              <span className="hover:text-primary duration-300 text-lg font-medium">
                <Link href="#">Services</Link>
              </span>
            </li>
            <li>
              <span className="hover:text-primary duration-300 text-lg font-medium">
                <Link href="#">Portfolio</Link>
              </span>
            </li>
            <li>
              <span className="hover:text-primary duration-300 text-lg font-medium pr-14  ">
                <Link href="#">Contact Me</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-2">
          <img src="/icon/looveIcon.svg" alt="" />
          <p className="text-white font-medium text-base">
            {" "}
            Design by{" "}
            <a
              className="underline "
              href="https://www.behance.net/Ibrahim_Shamss"
            >
              Ibrahim Shamss
            </a>{" "}
            & Developed by Yeasir Arafat
          </p>
        </div>
      </div>
      <hr className=" border border-secondary" />
      <p className="font-normal text-sm text-center py-8 text-secondary">
        &copy; Yeasir Arafat - copyright all right reserved
      </p>
    </div>
  );
};

export default Footer;
