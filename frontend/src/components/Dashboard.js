import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBookinsButton = () => {
    navigate("/bookings");
  };

  const handleOffersButton = () => {
    navigate("/adminoffers");
  };
  const handlePhotoButton = () => {
    navigate("/adminphotos");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-gray-100 flex items-center justify-center p-4 relative">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-7xl h-[90vh] relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Welcome, Admin!
        </h1>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={handleBookinsButton}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
          >
            View Bookings
          </button>

          <button
            onClick={handleOffersButton}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
          >
            Manage Offers
          </button>
          <button
            onClick={handlePhotoButton}
            className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300"
          >
            Add Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
