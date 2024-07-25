// import React from 'react'

import { BiArrowFromBottom } from "react-icons/bi";

const ScrollTop = () => {
  // Scroll To Top

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container">
        <div
          className="cursor-pointer flex items-center w-[auto] px-[1rem] py-[1rem] justify-center bg-[#170c4f] fixed z-1001 bottom-[2rem] rounded-xl right-[2rem]"
          onClick={scrollToTop}
        >
          <BiArrowFromBottom size={30} className="text-[white]" />
        </div>
      </div>
    </>
  );
};

export default ScrollTop;
