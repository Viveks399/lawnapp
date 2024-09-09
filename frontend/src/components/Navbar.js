import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.jpeg";

const Navbar = ({ scrollToService, scrollToProperties, scrollToInquire }) => {
  const navigate = useNavigate();
  const handleClickCareer = () => {
    navigate("/career");
  };
  return (
    <div className="w-full px-5 flex flex-col md:flex-row items-center justify-between">
      <img className="h-16 md:h-20 w-auto rounded-lg" src={logo2} alt="Logo" />
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={scrollToService}
        >
          Our Service
        </button>
        <span className="border-l border-gray-300 h-6 mx-2 hidden md:inline-block"></span>
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={scrollToProperties}
        >
          Properties
        </button>
        <span className="border-l border-gray-300 h-6 mx-2 hidden md:inline-block"></span>
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={scrollToInquire}
        >
          Contact Us
        </button>
        <span className="border-l border-gray-300 h-6 mx-2 hidden md:inline-block"></span>
        <button
          className="px-4 py-2 text-sm md:text-base"
          onClick={handleClickCareer}
        >
          Careers
        </button>
      </div>
      <div className="mt-4 md:mt-0">
        <button
          className="px-2 py-2 mx-1 text-sm md:text-base border border-green-400"
          onClick={scrollToInquire}
        >
          Schedule A Visit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
