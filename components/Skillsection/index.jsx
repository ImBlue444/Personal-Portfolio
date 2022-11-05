import React from "react";

function SkillSection() {
  return (
    <div className="bg-black text-white text-3xl py-4 pt-20">
      <br />
      <h2 className="xl:text-7xl text-4xl text-center">Fundamentals</h2>
      <ul>
        <br />
        <li>HTML</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5  transition-all"
            style={{ width: `90%` }}
          ></div>
        </div>
        <li>CSS</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "90%" }}
          ></div>
        </div>
        <li>JavaScript</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "80%" }}
          ></div>
        </div>
      </ul>
      <br />
      <ul>
        <h2 className="xl:text-7xl text-4xl text-center">Front End</h2>
        <br />
        <li>React</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "95%" }}
          ></div>
        </div>
        <li>NextJs</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "100%" }}
          ></div>
        </div>
        <li>Tailwind</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "85%" }}
          ></div>
        </div>
        <li>Bulma</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "70%" }}
          ></div>
        </div>
      </ul>
      <ul>
        <h2 className="xl:text-7xl text-4xl text-center">VCS</h2>
        <br />
        <li>Git</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "90%" }}
          ></div>
        </div>
        <li>GitHub</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "98%" }}
          ></div>
        </div>
      </ul>
      <br />
      <ul>
        <h2 className="xl:text-7xl text-4xl text-center">Back End</h2>
        <br />
        <li>NodeJs</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "30%" }}
          ></div>
        </div>
        <li>ExpressJs</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "30%" }}
          ></div>
        </div>
        <li>Python</li>
        <div className="w-full bg-gray-200 h-5 mb-6">
          <div
            className="bg-blue-600 h-5 transition-all"
            style={{ width: "20%" }}
          ></div>
        </div>
      </ul>
      <br />
    </div>
  );
}

export default SkillSection;
