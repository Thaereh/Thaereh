import React from "react";

function Projects() {
  return (
    <section id="projects" style={{ padding: "2rem 1rem", textAlign: "center" }}>
      <h2>Featured Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
        {/* Example Project Card */}
        <div style={{
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "10px",
          minWidth: "240px",
          maxWidth: "300px"
        }}>
          <h3>Automation Framework</h3>
          <p>Custom Python automation framework for UI and API testing with reporting.</p>
          <a href="https://github.com/Thaereh/QA-USA-Python_Automation" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;
