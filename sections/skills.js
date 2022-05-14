import React from "react";
import Divider from "../components/divider";
import SkillLists from "../components/skill_lists";
import Title from "../components/title";

function Skills() {
  return (
    <div id="skills" className="background">
      <Divider />
      <Title>Skills..</Title>
      <SkillLists />
    </div>
  );
}

export default Skills;
