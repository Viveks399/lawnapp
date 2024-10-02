import React, { useRef } from "react";
import Navbar from "./Navbar";
import Service from "./Service";
import Properties from "./Properties";
import Inquire from "./Inquire";
import Intro from "./Intro";
import Offers from "./Offers";
import Photos from "./Photos";

const Main = () => {
  const serviceRef = useRef(null);
  const propertiesRef = useRef(null);
  const inquireRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="scroll-smooth">
      <Navbar
        scrollToService={() => scrollToSection(serviceRef)}
        scrollToProperties={() => scrollToSection(propertiesRef)}
        scrollToInquire={() => scrollToSection(inquireRef)}
      />
      <Intro />
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={propertiesRef}>
        <Properties />
      </div>
      <div>
        <Photos />
      </div>
      <div>
        <Offers />
      </div>
      <div ref={inquireRef}>
        <Inquire />
      </div>
    </div>
  );
};

export default Main;
