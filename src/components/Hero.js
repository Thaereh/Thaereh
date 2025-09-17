import React from "react";
import "./Hero.css"; // (optional: see styling below)

function Hero() {
  return (
    <section className="hero">
      <img
        src="https://avatars.githubusercontent.com/u/your-github-id" // Replace with your GitHub avatar or upload your own
        alt="Thae Reh"
        className="hero-avatar"
      />
      <h1>Thae Reh</h1>
      <h2>QA Engineer & Automation Enthusiast</h2>
      <p>Ensuring quality, one test at a time.</p>
      <a href="#projects" className="hero-btn">View My Work</a>
    </section>
  );
}

export default Hero;
