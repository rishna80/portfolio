import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "Programming", percentage: 85, color: "red" },
  { name: "Leadership", percentage: 90, color: "purple" },
  { name: "Networking", percentage: 80, color: "blue" },
  { name: "Communication", percentage: 92, color: "magenta" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Working Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <p>{skill.name} <b>{skill.percentage}%</b></p>
          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;