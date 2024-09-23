import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminOfferControl = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [offers, setOffers] = useState([]);

  // Fetch existing offers

  // Create a new offer
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    // If token is not found, redirect to login
    if (!token) {
      alert("Please log in to access the dashboard");
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/crud/createoffer`,
        {
          content,
          isVisible,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response: " + res);
      setMessage("Offer created successfully!");

      // Refresh the offers list
      const updatedOffers = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/crud/offers`
      );
      setOffers(updatedOffers.data);
      setContent(""); // Clear the input after creating
    } catch (error) {
      setMessage("Error creating the offer.");
      console.error(error);
    }
  };

  // Delete an offer
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/crud/offer/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage("Offer deleted successfully!");

        // Refresh the offers list after deletion
        const updatedOffers = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/crud/offers`
        );
        setOffers(updatedOffers.data);
      } catch (error) {
        setMessage("Error deleting the offer.");
        console.error(error);
      }
    }
  };

  const handleBackButton = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/crud/offers`
        );

        if (Array.isArray(response.data)) {
          // If the response is an array, set offers
          setOffers(response.data);
        } else if (response.data.message) {
          // If there is a message from the backend
          setMessage(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching offers", error);
      }
    };
    fetchOffers();
  }, []);

  return (
    <div className="p-6 mt-8 bg-white shadow-md rounded-md max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">
          Manage Offers
        </h2>
        <button
          onClick={handleBackButton}
          className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition duration-300 w-full sm:w-auto sm:ml-auto"
        >
          Back
        </button>
      </div>

      {/* Form to Create Offer */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Offer Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            placeholder="Enter your offer details..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">Make offer visible to users</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
        >
          Create Offer
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Existing Offers</h3>

        {offers.length === 0 && (
          <p className="text-gray-600 mt-4">
            No offers available. Create a new offer above.
          </p>
        )}

        <ul className="mt-4 space-y-4">
          {offers.map((offer) => (
            <li
              key={offer._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg">{offer.content}</p>
                <p className="text-sm text-gray-600">
                  Visible: {offer.isVisible ? "Yes" : "No"}
                </p>
              </div>
              <button
                onClick={() => handleDelete(offer._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminOfferControl;
