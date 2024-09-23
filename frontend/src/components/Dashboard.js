import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  // Fetch bookings on component load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("token");

        // If token is not found, redirect to login
        if (!token) {
          return setError("Please log in to access the dashboard");
        }

        // Set the token in the Authorization header
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/admin/bookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(response.data);
      } catch (err) {
        setError("Error fetching bookings.");
      }
    };

    fetchBookings();
  }, []);

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
        </div>

        <div className="bg-gray-100 p-8 rounded-lg h-64 border border-gray-300 flex items-center justify-center">
          <p className="text-gray-600 text-lg">
            Your future content will appear here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
