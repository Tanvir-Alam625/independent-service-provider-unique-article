import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-400">
      <h3 className="text-3xl my-6 lg:text-6xl font-mono font-bold text-gray-50">
        The Page is Not Found{" "}
      </h3>
      <button
        onClick={() => navigate("/")}
        className="py-2 px-6 border-2 rounded-md text-gray-50 text-xl hover:bg-[#8046B7] duration-200 ease-in-out"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default NotFound;
