import React from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <div className="max-w-lg text-center bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Careers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Unfortunately, no jobs are available right now. Please check back
            soon for updates on new opportunities. We look forward to hearing
            from you in the future!
          </p>
          <button
            onClick={handleClick}
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Career;
