import React from "react";
import Aboutimg from "../../img/myimage.jpg";
import Info from "./Info";

function About() {
  return (
    <section
      id="about"
      className="about min-h-screen flex items-center justify-center "
    >
      <div className="container mx-auto px-4">
        <div className="text-center lg:mb-10 mb-5">
          <h1 className="md:text-[39px] text-[25px] font-bold text-black">
            About Me
          </h1>
          <span className="md:text-[18px] font-semibold">My Introduction</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={Aboutimg}
              alt="About"
              className="w-full lg:w-auto rounded-xl border"
            />
          </div>
          <div className="text-center lg:text-left">
            <Info />
            <p className="w-full lg:w-[80%] my-5 mx-auto lg:mx-0">
              I'm a Frontend Developer with a passion for building modern,
              responsive websites. I focus on clean code and user-friendly
              designs, always eager to learn and grow in technology.
            </p>
            <a
              href="./resume.pdf"
              download="My-resume.pdf"
              className="hover:bg-opacity-80 transition-all bg-black inline-flex items-center justify-center gap-1 py-4 w-[160px] text-center text-white font-bold rounded-[20px] mx-auto lg:mx-0"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="file-download-alt"
                width={20}
              >
                <path
                  fill="#ffffff"
                  d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
