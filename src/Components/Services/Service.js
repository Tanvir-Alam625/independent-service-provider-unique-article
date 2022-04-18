import React from "react";
import { useNavigate } from "react-router-dom";
const Service = ({ data }) => {
  const { img, name, description, price } = data;
  const navigate = useNavigate();
  return (
    <div className=" border-2 rounded-md shadow-lg  ">
      <div className="img">
        <img
          src={img}
          alt="service"
          className="w-[400px] object-cover rounded-t-md  "
        />
      </div>
      <div className="info flex relative  flex-col items-start py-6 px-2  h-[350px] ">
        <h2 className=" text-1xl lg:text-4xl font-mono font-semibold text-gray-600 text-left">
          {name}
        </h2>
        <p className="text-left text-sm text-gray-600 font-mono my-6">
          {description.length > 100 ? description.slice(0, 100) : description}
        </p>
        <p className="text-1xl font-mono font-semibold text-[#8046B7] text-left">
          Price:
          <span> ${price}</span>
        </p>
        <div className="btn  absolute bottom-6">
          <button
            onClick={() => navigate("/checkout")}
            className="px-8 py-2 text-left bg-[#8046B7] hover:bg-[#ae6cec] duration-300 ease-in text-white text-xl rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
