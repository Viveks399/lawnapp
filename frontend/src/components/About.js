import React from "react";
import lawn from "../assets/lawn.jpeg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-700 text-white">
      <div className="md:w-1/2 p-8">
        <h2 className="text-4xl font-bold mb-4">GREEN GLOW</h2>
        <p className="text-lg mb-6">
          At Green Glow, we pride ourselves on being your lawn's favorite
          beautician. Our team offers a wide range of services, including
          mowing, edging, trimming, blowing, cleanups, and more. With our
          reasonable, experienced, and reliable service, we ensure your lawn
          looks its best all year round. Your shortcut to a great-looking lawn
          starts with us. Contact us today for your earliest appointment.
        </p>

        <div className="flex space-x-8">
          <div>
            <p className="text-3xl font-bold">##</p>
            <p className="text-lg">YEARS EXPERIENCE</p>
          </div>
          <div>
            <p className="text-3xl font-bold">##</p>
            <p className="text-lg">5-STAR REVIEWS</p>
          </div>
          <div>
            <p className="text-3xl font-bold">##</p>
            <p className="text-lg">PROJECTS IN 2024</p>
          </div>
          <div>
            <p className="text-3xl font-bold">##</p>
            <p className="text-lg">YARDS OF MULCH INSTALLED</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <img
          src={lawn}
          alt="Lawn"
          className="w-full max-h-96 object-cover p-5"
        />
      </div>
    </div>
  );
};

export default About;
