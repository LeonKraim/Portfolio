import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
  
            if (skills.fontAwesomeClassname.includes("/")) {                return (
                <li key={i} className="software-skill-inline" name={skills.skillName}>
                  <i>
                  <img className="software-skill-image"
                    src={skills.fontAwesomeClassname}
                    style={{ width: "1em", height: "1em" }}
                    alt={skills.skillName}
                  />
                  </i>
                  <p>{skills.skillName}</p>
                </li>
                );
            }
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}

              >
                
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
