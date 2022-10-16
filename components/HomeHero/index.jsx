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
    "There is always one more bug to fix. - Ellen Ullman",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in. - Sam Redwine",
    "If, at first, you do not succeed, call it version 1.0. - Khayri R.R. Woulfe",
    "Programming is learned by writing programs. - Brian Kernighan",
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
    <div className="bg-black">
      <Image
        src="/HeroImage.jpg"
        alt="HeroImage"
        width="2000"
        height="750"
        layout="responsive"
      />
      <h1 className=" select-none text-white absolute -translate-y-48 ml-10 mt-20 md:text-4xl md:mt-0 lg:-translate-y-60 xl:-translate-y-80 xl:text-6xl 2xl:-translate-y-96 2xl:text-7xl">
        <i>{quotes[quoteEngine]}</i>
      </h1>
      <h2 className=" font-AnticDidone text-white">{people[person]}</h2>
    </div>
  );
}

export default HomeHero;
