import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import React from "react";
import logo from "../../images/logo/logo.png";
import Maps from "../../images/location/location.jpg";
const Footer = () => {
  return (
    <footer className="px-2 md:px-[60px] lg:px-[100px] my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="footer-logo">
          <div className="nav-logo flex items-end  text-[#8046B7] font-semibold font-mono tracking-tighter cursor-pointer">
            <img src={logo} alt="logo" className="w-8 md:w-12" />
            <h2 className="mb-0">Unique Content</h2>
          </div>
          <p className="text-left text-sm text-gray-600 font-mono my-6">
            You must have extensive knowledge on the topic you’re writing about,
            especially in the B2B market. Include statistics, data and metrics
            to establish credibility and support your claims.
          </p>
        </div>
        <div className="contact-info">
          <h2 className="text-2xl  font-mono font-semibold text-[#8046B7] my-4 text-left capitalize">
            {" "}
            get in touch with us
          </h2>
          <div className="location flex items-center ">
            <LocationMarkerIcon className="w-8 h-8 text-[#8046B7] mr-2" />
            <p className="text-left text-sm text-gray-600 font-mono my-3 font-semibold">
              47 Principals place, Barguna Sadar, Barguna
            </p>
          </div>
          <div className="phone  flex items-center">
            <PhoneIcon className="w-8 h-8 text-[#8046B7] mr-2" />
            <p className="text-left text-sm text-gray-600 font-mono my-3 font-semibold">
              {" "}
              +8801237 7384 83
            </p>
          </div>
          <div className="mail  flex items-center">
            <MailIcon className="w-8 h-8 text-[#8046B7] mr-2" />
            <p className="text-left text-sm text-gray-600 font-mono my-3 font-semibold">
              mdtanviralamht731@gmail.com
            </p>
          </div>
        </div>
        <div className="maps p-4">
          <img src={Maps} alt="maps" className="w-full rounded-md " />
        </div>
      </div>
      <div className="message flex justify-between ">
        <small className="capitalize text-sm text-gray-600">
          Unique Content store all Article &copy;2022 all rights reserves
        </small>
        <small className="capitalize text-sm text-gray-600">
          Made With ❤ by now
        </small>
      </div>
    </footer>
  );
};

export default Footer;
