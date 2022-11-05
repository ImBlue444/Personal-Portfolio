import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div>
      <ul className="flex bg-black justify-around p-5 border-b-2  ">
        <li>
          <Link href="/">
            <a
              className={`transition duration-150 ${
                router.pathname == "/"
                  ? "text-cyan-400 border-b-2 border-transparent border-cyan-400"
                  : null
              }  text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="./skills">
            <a
              className={`transition duration-150 ${
                router.pathname == "/skills"
                  ? "text-cyan-400 border-b-2 border-transparent border-cyan-400"
                  : null
              }  text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400`}
            >
              Skills
            </a>
          </Link>
        </li>
        <li>
          <Link href="./about">
            <a
              className={`transition duration-150 ${
                router.pathname == "/about"
                  ? "text-cyan-400 border-b-2 border-transparent border-cyan-400"
                  : null
              }  text-white hover:text-cyan-400 border-b-2 border-transparent hover:border-cyan-400`}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
