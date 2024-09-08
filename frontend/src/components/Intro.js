import React from "react";
import bg from "../assets/bg.DNG";

const Intro = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover transform scale-100 animate-zoomIn"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-normal mb-6">GREEN GLOW</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            At Green Glow, we pride ourselves on being your lawn's favorite
            beautician. Our team offers a wide range of services, including
            mowing, edging, trimming, blowing, cleanups, and more. With our
            reasonable, experienced, and reliable service, we ensure your lawn
            looks its best all year round. Your shortcut to a great-looking lawn
            starts with us. Contact us today for your earliest appointment.
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-3 text-white">
        <p className="text-sm md:text-base">OPERATION HOURS</p>
        <p className="text-sm md:text-base">MON - FRI: 8:00 AM - 5:00 PM</p>
      </div>
    </div>
  );
};

export default Intro;
