import React from "react";
import { education } from "../constants/education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Education_lists = () => {
  return (
    <div className="education-container">
      {education.map((edu) => (
        <div className="education" key={edu.id}>
          <div className="box-with-arrow">
            <div className="box box-background">
              <h4 className="education-text text-decoration-underline">
                {edu.degree}
              </h4>
              <h6 className="education-text">{edu.institution}</h6>
              <p>{edu.description}</p>
            </div>
            <div className="icon-right-arrow">
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </div>

          <div className="education-time">
            <span className="title-text-color">{edu.start_time}</span>
            <span className="title-text-color">-</span>
            <span className="title-text-color">{edu.end_time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education_lists;
