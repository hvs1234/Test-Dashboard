// import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const TestPart = () => {
  return (
    <>
      <section className="flex">
        <Sidebar />
        <div className="text-xl text-gray-900 font-semibold w-[100%] flex flex-col">
          <h1>test link</h1>
        </div>
      </section>
    </>
  );
};

export default TestPart;
