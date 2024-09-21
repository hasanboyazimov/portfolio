import React from "react";

function Info() {
  return (
    <div className="flex flex-wrap  items-center gap-2 md:gap-4">
      <div className="flex h-[120px] text-center flex-col gap-2 items-center rounded-xl w-full md:w-[31%]   py-5 bg-gray-100">
        <i className="bx bx-award text-2xl"></i>
        <h3>Experience</h3>
        <span className="text-[12px]">2 yaers working</span>
      </div>
      <div className="flex h-[120px] text-center flex-col gap-2 items-center rounded-xl w-full md:w-[31%]   py-5 bg-gray-100">
        <i className="bx bxs-briefcase-alt-2 text-2xl"></i>
        <h3>Completed</h3>
        <span className="text-[12px]"> 2+ real projects</span>
      </div>
      <div className="flex h-[120px] text-center flex-col gap-2 items-center rounded-xl w-full md:w-[31%]   py-5 bg-gray-100">
        <i className="bx bx-support text-2xl"></i>
        <h3>Support</h3>
        <span className="text-[12px]">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
