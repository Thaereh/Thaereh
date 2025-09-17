import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>QA-USA-Python Automation</h3>
          <p>
            Custom Python automation framework for UI and API testing with detailed reporting.
          </p>
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
