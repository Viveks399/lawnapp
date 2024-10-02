import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPhotoControl = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file); // Set the photo as a file object
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData and append all required fields
    const formData = new FormData();
    formData.append("photo", photo); // Append the file
    formData.append("description", description); // Append the description
    formData.append("isVisible", isVisible); // Append visibility status

    try {
      const token = localStorage.getItem("token");

      // Send formData using axios
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/photos/addphoto`,
        formData, // Send formData
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Set proper content type for formData
          },
        }
      );
      console.log("response", response);

      // Refresh the photo list
      const updatedPhotos = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/photos/getphotos`
      );
      setPhotos(updatedPhotos.data);

      // Reset the form
      setPhoto(null);
      setDescription("");
      setIsVisible(true);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this photo?")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/photos/deletephoto/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updatedPhotos = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/photos/getphotos`
        );
        setPhotos(updatedPhotos.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBackButton = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/photos/getphotos`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="p-6 mt-8 bg-white shadow-md rounded-md max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">
          Upload a Photo
        </h2>
        <button
          onClick={handleBackButton}
          className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition duration-300 w-full sm:w-auto sm:ml-auto"
        >
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Photo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            placeholder="Enter a description for the photo"
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">Make visible to users</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
        >
          Upload Photo
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Existing Photos</h3>

        {photos.length === 0 && (
          <p className="text-gray-600 mt-4">
            No photos available. Upload a new photo above.
          </p>
        )}

        <ul className="mt-4 space-y-4">
          {photos.map((photo) => (
            <li
              key={photo._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-lg">{photo.description}</p>
                <img
                  src={`data:image/jpeg;base64,${photo.content}`}
                  alt={photo.description}
                  className="w-full h-32 object-cover rounded-lg mt-2"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Visible: {photo.isVisible ? "Yes" : "No"}
                </p>
              </div>
              <button
                onClick={() => handleDelete(photo._id)}
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

export default AdminPhotoControl;
