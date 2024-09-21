import React from "react";
import ScrolDown from "./ScrolDown";

function Data() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 ">
      <h1 className="text-black lg:text-[39px] font-bold md:text-[25px] text-center md:text-start text-[25px] ">
        Hasan Azimov
      </h1>
      <h3 className="text-center md:text-start text-black text-[20px] font-semibold">
        <span className="border-b-2 border-black">Frontend</span> Developper
      </h3>
      <p className="md:max-w-[600px]  text-center md:text-start">
        A passionate frontend developer crafting seamless user experiences,
        blending creativity with cutting-edge technologies to deliver visually
        stunning and highly functional web applications.
      </p>
      <a
        href="https://t.me/hasanboy_azimov"
        className="hidden hover:bg-opacity-80 transition-all bg-black md:flex items-center justify-center gap-1 py-4 w-[150px] mx-auto md:mx-0 text-center text-white font-bold rounded-[20px]"
      >
        Say Hello
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="message"
          width={20}
        >
          <path
            fill="#fff"
            d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
          ></path>
        </svg>
      </a>
      <ScrolDown />
    </div>
  );
}

export default Data;
