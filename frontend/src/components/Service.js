import React from "react";

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider text-gray-800 uppercase">
        Services We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-400">Mowing</h3>
          </div>
          <p className="leading-relaxed text-lg">
            Keep your lawn looking its best with our professional mowing
            services. Our team ensures a precise cut every time, promoting
            healthy growth and a neat, manicured appearance. Whether you need
            regular maintenance or a one-time service, we tailor our approach to
            meet the unique needs of your lawn.
          </p>
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-400">Edging</h3>
          </div>
          <p className="leading-relaxed text-lg">
            Enhance the curb appeal of your lawn with our expert edging
            services. We create clean, defined borders around your walkways,
            flower beds, and driveways, giving your landscape a polished,
            professional finish. Regular edging not only improves the look of
            your lawn but also helps to prevent grass from encroaching on other
            areas, keeping your outdoor spaces looking pristine.
          </p>
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-400">Trimming</h3>
          </div>
          <p className="leading-relaxed text-lg">
            Ensure a polished and uniform look for your lawn with our expert
            trimming services, targeting edges and hard-to-reach areas for a
            flawless finish.
          </p>
        </div>

        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-green-400">Blowing</h3>
          </div>
          <p className="leading-relaxed text-lg">
            Keep your lawn pristine with our professional blowing services,
            clearing away clippings, leaves, and debris to leave your outdoor
            space spotless.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-2xl md:text-3xl font-semibold text-gray-700">
          ...and many more!
        </p>
      </div>
    </div>
  );
};

export default Service;
