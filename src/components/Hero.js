import React from "react";
import myPic from "../my-pic.jpg"; // Note the new filename and path

function Hero() {
  return (
    <section className="hero" id="hero">
      <img 
        src={myPic} 
        alt="Thae Reh" 
        className="hero-img" 
      />
      <h1>Thae Reh</h1>
      <h2>QA Engineer & Automation Enthusiast</h2>
      <p>Ensuring quality, one test at a time.</p>
      <a href="#projects" className="hero-btn">See My Work</a>
    </section>
  );
}

export default Hero;
