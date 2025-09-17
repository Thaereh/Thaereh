import React from "react";
import myPic from "../my pic.jpg"; // Note the space in the filename

function Hero() {
  return (
    <section className="hero" id="hero">
      <img 
        src={myPic} 
        alt="Thae Reh" 
        className="hero-img" 
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          border: "4px solid #61dafb"
        }}
      />
      <h1>Thae Reh</h1>
      <h2>QA Engineer &amp; Automation Enthusiast</h2>
      <p>Ensuring quality, one test at a time.</p>
      <a href="#projects" className="hero-btn">See My Work</a>
    </section>
  );
}

export default Hero;
