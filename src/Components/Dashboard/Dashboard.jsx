// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DashPart from "../DashPart/DashPart";

const Home = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="text-xl text-gray-900 font-semibold w-[100%] flex flex-col">
        <div className="main-nav w-[100%] flex gap-[3rem] justify-between items-center bg-[white] px-[2rem] py-[2rem] max-xl:flex-col">
          <div className="logo flex gap-[2rem] items-center">
            <p className="text-[2.5rem] max-md:text-[1.8rem]">PhrayanxAI</p>
          </div>
          <div className="main-nav-link flex text-center gap-[4rem] items-center max-xl:flex-col max-xl:gap-[3rem]">
            <div className="left flex gap-[2rem] items-center max-lg:flex-col">
              <p className="text-[1.5rem] max-sm:text-[1.2rem]">
                WhatsApp Business API Status:
              </p>
              <p className="capitalize text-[red] text-[1.5rem]">pending</p>
              <Link
                to={"/"}
                className="text-[1.5rem] bg-[green] text-[white] rounded-md px-[2rem] py-[0.5rem] max-sm:text-[1rem] tracking-[0]"
              >
                Apply Now
              </Link>
            </div>
            <div className="right flex items-center gap-[2rem] max-lg:flex-col max-md:text-[1.8rem] max-lg:gap-[2rem]">
              <p className="text-[1.5rem]">Current Plan:</p>
              <p className="capitalize text-[1.5rem]">Basic</p>
              <Link
                to={"/"}
                className="text-[1.5rem] text-center bg-[purple] text-[white] rounded-md px-[2rem] py-[0.5rem] max-sm:text-[1rem] tracking-[0]"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        </div>
        <DashPart />
      </div>
    </section>
  );
};

export default Home;
