import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Bookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

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

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8 relative">
        {/* Logout Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 right-4 bg-green-500 text-white font-semibold my-4 py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
        >
          Back
        </button>

        {/* Dashboard Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Bookings
        </h2>

        {error ? (
          <p className="text-red-500 text-center mb-6">{error}</p>
        ) : (
          <div>
            {bookings.length === 0 ? (
              <p className="text-center text-gray-500">
                No bookings available.
              </p>
            ) : (
              <ul className="space-y-6">
                {bookings.map((booking) => (
                  <li
                    key={booking._id}
                    className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div className="mb-4 md:mb-0 md:w-1/2">
                        {" "}
                        {/* Added width control for larger screens */}
                        <p className="text-xl font-bold text-gray-800">
                          {booking.firstName} {booking.lastName}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Email:</span>{" "}
                          <span className="text-green-600 truncate">
                            {booking.email}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Phone:</span>{" "}
                          <span className="text-blue-600">{booking.phone}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Address:</span>{" "}
                          <span className="truncate block max-w-full overflow-hidden whitespace-nowrap">
                            {booking.address}
                          </span>
                        </p>
                      </div>

                      <div className="md:w-1/2">
                        {" "}
                        {/* Added width control for larger screens */}
                        <p className="text-sm text-gray-600">
                          Slot:{" "}
                          <span className="font-semibold text-green-600">
                            {booking.timeSlot.slot}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Date:{" "}
                          <span className="font-semibold text-blue-600">
                            {booking.timeSlot.date}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Message:</span>{" "}
                          {booking.message}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
