import React from "react";

export default function CaseStudyCard({ title, summary, link }) {
  return (
    <div className="case-study-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <a href={link} className="cs-link">Read More</a>
    </div>
  );
}
