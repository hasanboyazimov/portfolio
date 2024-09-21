import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" pt-[100px] container mx-auto px-4 py-10 flex justify-center items-center min-h-screen"
    >
      <div className="w-full">
        <div className="lg:mb-10 mb-5 text-center">
          <h1 className="md:text-[39px] text-[25px] font-bold text-black">
            Contact Me
          </h1>
          <span className="md:text-[18px] font-semibold ">Get in touch</span>
        </div>
        <div
          className=" flex flex-col sm:flex-row
         justify-around w-full sm:gap-9 items-start"
        >
          <div className="">
            <h2 className="mb-5 text-center font-semibold">Talk to me</h2>
            <div className="flex sm:flex-col flex-wrap justify-between flex-row  gap-5">
              <div className="border w-full md:w-full text-[13px]  shadow-lg p-2 flex flex-col gap-1 justify-center items-center">
                <i class="bx bx-envelope text-black text-[35px]"></i>
                <p>Email</p>
                <a href="mailto:azimovhasanjon1221@gmail.com">azimovhasanjon1221@gmail.com</a>
                <p className="flex items-center ">
                  write me <i class="bx bx-right-arrow-alt"></i>
                </p>
              </div>
              <div className="border w-full md:w-full text-[13px] shadow-lg p-2 flex flex-col gap-1 justify-center items-center">
                <i class="bx bxl-whatsapp  text-black text-[35px]"></i>
                <p>My number</p>
                <a href="tel:+998916509788">+998 (91) 650-97-88</a>
                <p className="flex items-center ">
                  call me<i class="bx bx-right-arrow-alt"></i>
                </p>
              </div>
              <div className="border text-[13px] w-full md:w-full shadow-lg p-2 flex flex-col gap-1 justify-center items-center">
                <i class="bx bxl-linkedin text-black text-[35px]"></i>
                <p>Linkedin</p>
                <a href="https://www.linkedin.com/in/hasanboy-azimov-81131523b/">
                  Hasanboy Azimov
                </a>
                <p className="flex items-center ">
                  write me <i class="bx bx-right-arrow-alt"></i>
                </p>
              </div>
            </div>
          </div>
          <form className=" md:w-[50%] mt-10 md:mt-0  sm:w-full w-full">
            <h1 className="mb-5 text-center font-semibold">
              Write me your project
            </h1>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">name</span>
              </div>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full bg-white "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">email</span>
              </div>
              <input
                type="text"
                placeholder="your email"
                className="input input-bordered w-full bg-white"
              />
            </label>
            <label className="form-control ">
              <div className="label">
                <span className="label-text">project</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-32 bg-white"
                placeholder="Write your project"
              ></textarea>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
