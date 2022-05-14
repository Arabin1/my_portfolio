import React from "react";
import Divider from "../components/divider";
import Education_lists from "../components/education_lists";
import Title from "../components/title";

const Education = () => {
  return (
    <div id="education" className="background">
      <Divider />
      <Title>Education</Title>
      <Education_lists />
    </div>
  );
};

export default Education;
