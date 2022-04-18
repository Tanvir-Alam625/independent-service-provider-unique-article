import React from "react";
import { useNavigate } from "react-router-dom";
import google from "../../images/social/google.png";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="px-2 md:px-[60px] lg:px-[100px] my-28 flex  flex-col justify-center items-center">
      <h2 className="text-2xl lg:text-5xl font-bold my-6 text-[#8046B7] font-mono">
        SignUp With Unique Article
      </h2>
      <div className="form-container  w-full md:w-2/3 mt-6 shadow p-4 bg-gray-50">
        <form>
          <div className=" my-6 user-name flex flex-col items-center md:items-start w-full">
            <label htmlFor="name" className="text-xl text-gray-600 text-left">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
            />
          </div>
          <div className=" my-6 user-name flex flex-col items-center md:items-start w-full">
            <label htmlFor="email" className="text-xl text-gray-600 text-left">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
            />
          </div>
          <div className="password my-6 flex flex-col items-center md:items-start w-full">
            <label
              htmlFor="password"
              className="text-xl text-gray-600 text-left"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
            />
          </div>
          <div className="btn w-full ">
            <button
              type="submit"
              className=" py-4 w-full text-xl text-gray-50 font-semibold rounded-md  bg-[#8046B7]  hover:bg-[#ae6cec] duration-300 ease-in"
            >
              SignUp
            </button>
          </div>
        </form>
        <p className="text-sm my-6 text-gray-600  capitalize text-left font-semibold">
          Already exists?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#8046B7] hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
        <button className="flex w-full py-2 bg-white justify-center items-center border-2 text-xl text-gray-600  rounded-md">
          <img src={google} alt="googleIcon" className="mr-4 w-12" />
          <p>Login With Google</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
