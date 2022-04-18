import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "../../images/banner/section-1-image.png";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="slider flex flex-col lg:flex-row items-center  px-2 md:px-[60px] lg:px-[100px] w-full py-16">
      <div className="slider-info w-full lg:w-[50%] order-2 lg:order-1 flex flex-col items-start pr-4">
        <span className="uppercase text-gray-400 tracking-widest my-3 text-xl">
          B A C K &nbsp;&nbsp;T O&nbsp;&nbsp; S C H O O L
        </span>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-mono font-semibold text-[#8046B7] my-4">
          Special 60% Off
        </h1>
        <h3 className="text-1xl lg:text-2xl font-mono font-semibold text-[#8046B7] my-3">
          for our student community
        </h3>
        <p className="text-left text-sm text-gray-600 font-mono mb-6">
          Plus, because you have an outline, your final content will hit all of
          the major points that you set out to before you started writing.
        </p>
        <div className="slider-btn">
          <button className="px-8 py-2 bg-[#8046B7] text-white text-xl mr-3 rounded">
            Learn More
          </button>
          <button className="px-8 py-2  border-2 rounded text-xl text-gray-600">
            What they say
          </button>
        </div>
      </div>
      <div className="slider-img w-full lg:w-[50%] order-1 lg:order-2">
        <img src={Banner} alt="slider" />
      </div>
    </div>
  );
};

export default Slider;
