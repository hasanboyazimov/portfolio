import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="skills pt-[100px] min-h-screen  flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center lg:mb-10 mb-5">
          <h1 className="md:text-[39px] text-[25px] font-bold text-black">
            Skills
          </h1>
          <span className="md:text-[18px] font-semibold">
            My technical level
          </span>
        </div>
        <div className="bg-stone-100 rounded-md shadow-sm p-5 lg:w-[75%] md:w-4/5 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Html5 <i className="bx bxl-html5"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Css <i className="bx bxl-css3"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Tailwind Css <i className="bx bxl-tailwind-css"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Bootstrap <i className="bx bxl-bootstrap"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  JavaScript <i className="bx bxl-javascript"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  React <i className="bx bxl-react"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Next.js <i className="bx bxl-react"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  Git <i className="bx bx-git-branch"></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-black rounded-2xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <i className="bx bx-badge-check text-lg"></i>
              <div>
                <h3 className="font-semibold text-lg">
                  TypeScript <i className="bx bxl-typescript"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
