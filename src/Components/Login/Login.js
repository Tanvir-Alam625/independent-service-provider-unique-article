import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import google from "../../images/social/google.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //navigate
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }
  if (error) {
    console.log(error);
  }
  //form submit function
  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  if (loadingGoogle) {
    return (
      <div className="min-h-screen w-full bg-slate-500">
        <div class="lds-dual-ring"></div>
      </div>
    );
  }

  return (
    <div className="px-2 md:px-[60px] lg:px-[100px] my-28 flex  flex-col justify-center items-center">
      <h2 className="text-2xl  my-6 lg:text-5xl font-bold text-[#8046B7] font-mono">
        Login With Unique Article
      </h2>
      <div className="form-container  w-full md:w-2/3 mt-6 shadow p-4 bg-gray-50">
        <form onSubmit={handleLoginForm}>
          <div className=" my-6 user-name w-full items-center flex flex-col  md:items-start ">
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
          <div className="password my-6 flex flex-col items-center md:items-start w-full ">
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
              min="8"
              required
              className="py-2 px-2 border-2 rounded-md w-full outline-0 shadow  text-xl text-gray-600"
            />
          </div>
          <p className="text-red-500">
            {error?.message}
            {errorGoogle?.message}
          </p>
          <div className="btn w-full ">
            <button
              disabled={loading ? true : false}
              type="submit"
              className=" py-4 w-full text-xl text-gray-50 font-semibold rounded-md  bg-[#8046B7]  hover:bg-[#ae6cec] duration-300 ease-in"
            >
              {loading ? <div class="lds-dual-ring"></div> : <span>Login</span>}
            </button>
          </div>
        </form>
        <div className="others flex justify-between items-center">
          <p className="text-sm my-6 text-gray-600  capitalize text-left font-semibold">
            new to Unique Article?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-[#8046B7] hover:underline cursor-pointer"
            >
              SignUp
            </span>
          </p>
          <button
            className="text-xl my-4 text-gray-600 hover:text-[#8046B7]"
            onClick={() => navigate("/reset")}
          >
            Reset Password
          </button>
        </div>

        <button
          onClick={() => signInWithGoogle()}
          className="flex w-full bg-white py-2 justify-center items-center border-2 text-xl text-gray-600  rounded-md"
        >
          <img src={google} alt="googleIcon" className="mr-4 w-12" />
          <p>Sign Up With Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
