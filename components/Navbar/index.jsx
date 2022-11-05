import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="sticky top-0 z-20">
      <ul className="flex bg-black justify-around p-5 border-b-2  ">
        <li className=" cursor-pointer  transition duration-15 text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 ">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className=" cursor-pointer  transition duration-15 text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 ">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" cursor-pointer  transition duration-15 text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400 ">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
