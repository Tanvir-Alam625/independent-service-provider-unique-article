import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import { MenuAlt4Icon } from "@heroicons/react/solid";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <header>
      <nav className=" bg-gray-200 flex justify-between px-3 md:px-[40px]  lg:px-[100px]  py-2 items-center">
        <Link to="/">
          <div className="nav-logo flex items-end  text-[#8046B7] font-semibold font-mono tracking-tighter cursor-pointer">
            <img src={Logo} alt="nav-logo" className="w-8 md:w-12" />
            <h2 className="mb-0">Unique Content</h2>
          </div>
        </Link>
        <div
          className={` absolute top-[45px] md:top-[60px] w-full lg:w-auto bg-gray-200  py-6 px-3 lg:p-0 lg:static lg:mt-0 duration-300 ease-in z-30 ${
            toggle ? "left-[0px]" : "left-[-100%]"
          }`}
        >
          <ul className="flex flex-col items-start lg:flex-row ">
            <CustomLink to="/">
              <li
                className="text-xl ml-2 lg:ml-8 font-mono"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </li>
            </CustomLink>
            <CustomLink to="/services">
              <li
                onClick={() => setToggle(!toggle)}
                className="text-xl ml-2 lg:ml-8 font-mono"
              >
                Services
              </li>
            </CustomLink>
            <CustomLink to="/about">
              <li
                className="text-xl ml-2 lg:ml-8 font-mono"
                onClick={() => setToggle(!toggle)}
              >
                About Me
              </li>
            </CustomLink>
            <CustomLink to="/blogs">
              <li
                className="text-xl ml-2 lg:ml-8 font-mono"
                onClick={() => setToggle(!toggle)}
              >
                Blogs
              </li>
            </CustomLink>
            <CustomLink to="/login">
              <li
                className="text-xl ml-2 lg:ml-8 font-mono"
                onClick={() => setToggle(!toggle)}
              >
                Login
              </li>
            </CustomLink>
          </ul>
        </div>
        <MenuAlt4Icon
          onClick={() => setToggle(!toggle)}
          className=" block lg:hidden absolute right-2 md:right-8 font-semibold  top-2 md:top-6 h-8 w-8 text-[#8046B7] cursor-pointer border rounded"
        />
      </nav>
    </header>
  );
};

export default Header;
