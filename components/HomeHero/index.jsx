import React from "react";
import Image from "next/image";
import { useState } from "react";

function HomeHero() {
  const [people, setPeople] = useState([
    "Ellen Ullman",
    "Sam Redwine",
    "Khayri R.R. Woulfe",
    "Brian Kernighan",
  ]);
  const [person, setPerson] = useState([0]);

  const [quotes, setQuotes] = useState([
    "There is always one more bug to fix.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    "If, at first, you do not succeed, call it version 1.0.",
    "Programming is learned by writing programs.",
  ]);

  const [quoteEngine, setQuoteEngine] = useState(0);

  setTimeout(() => {
    if (quoteEngine >= quotes.length - 1) {
      setQuoteEngine(0);
    } else setQuoteEngine(quoteEngine + 1);
    if (quoteEngine >= 3) {
      setPerson(0);
    } else setPerson(quoteEngine + 1);
  }, 5000);

  return (
    <div className="bg-black pt-20">
      <div className="flex justify-center">
        <h1 className=" select-none text-white text-md absolute z-10 text-center text-md translate-y-8 md:text-4xl md:translate-y-28 lg:text-6xl lg:translate-y-72">
          <i>{quotes[quoteEngine]}</i>
        </h1>
      </div>
      <Image
        className="z-0 "
        src="/HeroImage.jpg"
        alt="HeroImage"
        width="2000"
        height="850"
        layout="responsive"
      />
      <h2 className="font-AnticDidone z-10 text-lg text-right text-md -translate-x-2 -translate-y-10 text-white md:text-4xl md:-translate-y-16">
        {people[person]}
      </h2>
    </div>
  );
}

export default HomeHero;
