import React, { useState, useEffect } from "react";
import axios from "axios";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/crud/offers`
        );
        // Filter the offers that are visible and set them in state
        const visibleOffers = response.data.filter((offer) => offer.isVisible);
        setOffers(visibleOffers);
      } catch (error) {
        console.error("Error fetching offers", error);
      }
    };
    fetchOffers();
  }, []);

  // Don't display anything if there are no offers
  if (!offers.length) return null;

  return (
    <div className="my-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          Limited Time Offers
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Don't miss out on these amazing deals!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
        {offers.map((offer) => (
          <div
            key={offer._id}
            className="bg-gradient-to-r from-yellow-300 to-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Special Offer
            </h3>
            <p className="text-lg text-gray-700">{offer.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
