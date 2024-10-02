import React, { useState, useEffect } from "react";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/photos/getphotos`
        );
        const visiblePhotos = response.data.filter((photo) => photo.isVisible);
        setPhotos(visiblePhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo._id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <img
              src={`data:${photo.mimetype};base64,${photo.content}`} // Use base64 image source correctly
              alt={photo.description}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p className="text-lg text-gray-700">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
