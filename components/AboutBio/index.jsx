import React from "react";
import Link from "next/link";

function AboutBio() {
  return (
    <div className=" flex flex-col text-center bg-slate-800 pb-2">
      <h2 className="text-white text-7xl">About me</h2>
      <br />
      <p className="text-white text-5xl">
        Hi! My name is Dennis and I am 28 years old. I am a front-end developer
        but I am studying on my own to become a full stack developer.
        <br /> I love chess, music and anything related to digital like video
        editing, the latest technology and of course programming.
        <br />I have a very good knowledge of <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, <strong>JavaScript</strong> and{" "}
        <strong>React</strong>, especially with <strong>NextJs</strong>.<br />{" "}
        (Check my{" "}
        <Link href="./skills">
          <a className="text-cyan-400 hover:underline-none transition duration-20  border-b-2 border-transparent hover:border-cyan-400">
            Skills page{" "}
          </a>
        </Link>
        for details).
      </p>
      <p className="text-white text-3xl">
        <br /> Initially I was working as a call center operator, but this job
        caused me some frustration due to its monotony and instability.
        <br />
        Inside me the desire for an exciting and dynamic job grew, especially
        after my brief experience in the army, which I left to really follow
        something that fascinated me.
      </p>
    </div>
  );
}

export default AboutBio;
