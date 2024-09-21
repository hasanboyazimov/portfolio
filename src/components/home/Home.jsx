import React from "react";
import Social from "./Social";
import Data from "./Data";
import Avatarka from "../../img/programmerat-work-illustration-24ceqhfkwa5zfp9p.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <Social />

        <Data />

        <div className="flex-shrink-0">
          <img src={Avatarka} alt="Avatar" width={300} className="rounded-lg" />
        </div>

        <a
          href="https://t.me/hasanboy_azimov"
          className="flex mt-10 md:mt-0 hover:bg-opacity-80 transition-all bg-black md:hidden items-center justify-center gap-1 py-4 w-[150px] mx-auto md:mx-0 text-center text-white font-bold rounded-[20px]"
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
      </div>
    </section>
  );
}

export default Home;
