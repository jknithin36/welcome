import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaTwitter, FaLinkedin, FaCode } from "react-icons/fa";

export default function ContactAndFooter() {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div
          id="contact"
          className="flex flex-col justify-center items-center bg-white p-6 text-center"
        >
          <h1 className="font-chivo mb-4 text-[40px] uppercase sm:text-[50px] md:text-[60px] lg:text-[70px]">
            JK NITHIN KUMAR
          </h1>
          <h3 className="font-rubik mb-4 text-[24px] uppercase sm:text-[30px] md:text-[36px] lg:text-[42px]">
            WORK WITH ME
          </h3>
          <div className="space-y-2">
            <p className="font-caveat py-1 text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
              Sassafras, Holly Park, Kent 44240 Ohio
            </p>
            <p className="font-caveat py-1 text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
              +1 330-281-2484
            </p>
            <div className="inline-block rounded-lg border border-gray-500 px-2 py-1">
              <p className="font-caveat text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
                <a
                  href="mailto:insane414425@gmail.com"
                  className="text-blue-500 hover:text-blue-700"
                >
                  insane414425@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-gray-200 py-2 text-center text-black">
        <div className="container mx-auto">
          <div className="flex justify-center mb-2">
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-lg text-gray-700 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-lg text-gray-700 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/your-leetcode"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-lg text-gray-700 hover:text-blue-500"
            >
              <FaCode />
            </a>
          </div>
          <p className="text-xs mb-1">Connect with me:</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-chivo">
            <Typewriter
              words={["designed by nithin"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
          <p className="text-xs">Last updated: {formattedDate}</p>
        </div>
      </footer>
    </div>
  );
}
