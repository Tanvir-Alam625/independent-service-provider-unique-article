import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const forgetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast("Sent email Verification");
  };
  if (sending) {
    return <p>sending....................</p>;
  }
  return (
    <div className="px-2 md:px-[50px] lg:px-100 min-h-screen  flex flex-col items-center justify-center ">
      <form onSubmit={forgetPassword}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="py-2 my-6 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
        />
        <button
          type="submit"
          className=" py-4 w-full text-xl text-gray-50 font-semibold rounded-md  bg-[#8046B7]  hover:bg-[#ae6cec] duration-300 ease-in"
        >
          Reset
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Reset;
