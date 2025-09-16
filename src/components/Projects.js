import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    title: "E-commerce Automation Suite",
    summary: "Developed a robust Python-Selenium test suite for a major online retailer, covering end-to-end workflows and CI integration.",
    link: "#case-study-1"
  },
  {
    title: "API Testing Framework",
    summary: "Designed and implemented a scalable API automation framework using Python and Pytest, improving test coverage and reliability.",
    link: "#case-study-2"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects & Case Studies</h2>
      <div className="case-studies">
        {caseStudies.map((cs, idx) => (
          <CaseStudyCard key={idx} {...cs} />
        ))}
      </div>
    </section>
  );
}
