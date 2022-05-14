import React from "react";
import { skills } from "../constants/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function SkillLists() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-wrapper" key={skill.id}>
          <div className="skill-container">
            <div className="d-flex justify-content-start align-items-center">
              {index === 1 || index === 4 ? (
                <span className="icon-skill">
                  <Image
                    src={skill.icon}
                    width="40px"
                    height="40px"
                    alt={skills.name}
                  />
                </span>
              ) : (
                <span className="icon-skill">
                  <FontAwesomeIcon icon={skill.icon} />
                </span>
              )}
              <h2 className="title-text-color"> {skill.name} </h2>
            </div>
            <div className={skill.className}>
              <p className="des-text-color">{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillLists;
