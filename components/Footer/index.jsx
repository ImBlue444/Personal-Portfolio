import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div className="bg-black border-t-2 border-gray-800 w-full">
      <div className=" text-center bg-black border-2 border-black  inset-x-0 bottom-0">
        <h2 className="text-white mb-2">
          Developed by Dennis Badagliacca
          <br />
          Quick Links:
        </h2>
        <ul className="flex justify-center items-center space-x-5 mb-2">
          <li className="text-white cursor-pointer">
            <AiOutlineArrowLeft size={30} />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dennisbadagliacca/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="#0072B1" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ImBlue444"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub color="white" size={30} />
            </a>
          </li>
          <li>
            <BsInstagram color="#E1306C" size={30} />
          </li>
          <li className="text-white ">
            <AiOutlineArrowRight className="cursor-pointer" size={30} />
          </li>
        </ul>
        <button className=" text-white" onClick={() => router.push(scroll)}>
          <AiOutlineArrowUp size={30} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
