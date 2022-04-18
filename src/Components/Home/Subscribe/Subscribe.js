import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <section className="subscribe px-2 md:px-[60px] lg:px-[100px] my-6 flex flex-col lg:flex-row  justify-center items-center">
      <div className="title w-full lg:w-[50%]">
        <h2 className="text-2xl lg:text-5xl text-gray-50 font-semibold font-mono text-left my-8 lg:my-6">
          Subscribe my Unique content for newest book update
        </h2>
      </div>
      <div className="get-info w-full lg:w-[50%] flex">
        <input
          type="email"
          placeholder="Your Email "
          className="px-6 py-4 rounded border-2 border-r-0 text-xl  bg-transparent text-gray-50 placeholder:text-gray-50  w-full outline-0"
        />
        <button className="px-6 py-4 bg-[#8046B7] text-white text-xl mr-3 rounded border-2 border-l-0 hover:bg-[#ae6cec] duration-300 ease-in">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
