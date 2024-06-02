import React from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css"; // Make sure to import the CSS file

export default function Main() {
  const [playAnimation, setPlayAnimation] = useState(true);

  const onAnimationEnd = () => {
    setPlayAnimation(false);
  };

  return (
    <div
      id="home"
      className="page flex min-h-screen flex-col items-center justify-center bg-white"
    >
      <div className="text-center text-black">
        <h1
          className={`font-chivo ${
            playAnimation ? "smoky-text" : ""
          } bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent text-[40px] sm:text-[80px] md:text-[120px] lg:text-[160px] uppercase`}
          onAnimationEnd={onAnimationEnd}
        >
          Nithin
        </h1>
        <h3 className="font-rubik animate-fade-in-up text-[50px] sm:text-[100px] md:text-[150px] lg:text-[200px] uppercase text-black">
          PORTFOLIO
        </h3>
        <p className="font-caveat animate-fade-in-down py-2 text-black text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px]">
          WEB DEVELOPER
        </p>
      </div>
      <div className="mt-8 max-w-2xl px-4 text-center">
        <p className="font-caveat text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
          <Typewriter
            words={[
              "Welcome to my portfolio! Discover my journey and work as a passionate web developer.",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="mt-8 animate-bounce flex items-center justify-center"></div>
    </div>
  );
}
