import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="min-h-screen px-2 md:px-[50px] lg:px-[100px]  flex flex-col justify-center items-center">
      <form className="p-2 lg:p-4 shadow bg-slate-50 rounded-md">
        <h2 className="text-2xl my-8 lg:text-5xl text-[#8046B7] font-mono font-bold">
          Your Information{" "}
        </h2>
        <div className="info-name w-full items-center flex flex-col  md:items-start my-6">
          <label htmlFor="name" className="text-xl text-gray-600 text-left">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
          />
        </div>
        <div className="info-email w-full items-center flex flex-col  md:items-start my-6">
          <label htmlFor="email" className="text-xl text-gray-600 text-left">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
          />
        </div>
        <div className="info-phone w-full items-center flex flex-col  md:items-start my-6">
          <label htmlFor="phone" className="text-xl text-gray-600 text-left">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
          />
        </div>
        <div className="info-address w-full items-center flex flex-col  md:items-start my-6">
          <label htmlFor="name" className="text-xl text-gray-600 text-left">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
          />
        </div>
        <button
          type="submit"
          className=" py-4 w-full text-xl text-gray-50 font-semibold rounded-md  bg-[#8046B7]  hover:bg-[#ae6cec] duration-300 ease-in"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
