import React from "react";
import "./Hero.css";
import { SlMouse } from "react-icons/sl";

function Hero() {
  return (
    <div className="heroContent">
      <h1>
        Crafting <span className="heroText"> digital masterpieces </span> with
        pixel-perfect precision
      </h1>
      <SlMouse className="heroIcon" />
    </div>
  );
}

export default Hero;
