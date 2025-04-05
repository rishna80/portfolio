import React from "react";
import "../styles/Knowledges.css";



const knowledges = [
  "Digital Marketing",
  "Marketing",
  "Communication",
  "Leadership",
  "Time Management",
  "SQL",
  "Php",
];

const Knowledges = () => {
  return (
    <div className="knowledges-container">
      <h2>Knowledges</h2>
      <div className="knowledges-list">
        {knowledges.map((item, index) => (
          <span key={index} className="knowledge-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Knowledges;

