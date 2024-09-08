import React from "react";

const Properties = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center uppercase tracking-wide">
        Properties We Service
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-8 text-center">
        We specialize in providing top-quality services for residential
        properties. Whether you need regular maintenance or special
        enhancements, we are here to ensure your home looks its best all year
        round.
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-green-400">
        Areas We Serve
      </h3>

      <p className="text-lg md:text-xl mb-8 text-center">
        Our services are available in the following areas:
      </p>

      <ul className="space-y-6 text-center">
        <li className="flex justify-center items-center text-lg md:text-xl font-medium hover:text-green-400 transition duration-300 ease-in-out">
          <span className="mr-2 text-green-400">➤</span> New Plymouth
        </li>
        <li className="flex justify-center items-center text-lg md:text-xl font-medium hover:text-green-400 transition duration-300 ease-in-out">
          <span className="mr-2 text-green-400">➤</span> Bell Block
        </li>
        <li className="flex justify-center items-center text-lg md:text-xl font-medium hover:text-green-400 transition duration-300 ease-in-out">
          <span className="mr-2 text-green-400">➤</span> Waitara
        </li>
      </ul>
    </div>
  );
};

export default Properties;
