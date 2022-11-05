import React from "react";
import Image from "next/image";

function HomeBio() {
  return (
    <div className="bg-black">
      <h2 className="select-none font-PermanentMarker text-center text-white p-20 text-4xl">
        Hi! im Dennis Badagliacca
        <br />
        <br />
        Front-End Developer based in Palermo, Italy.
      </h2>
      <div className=" flex justify-center p-5">
        <Image src="/Course.png" alt="CourseImage" width={800} height={600} />
      </div>
    </div>
  );
}

export default HomeBio;
