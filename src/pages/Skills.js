import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import SkillsList from "../components/skillCard/SkillsList";

const Skills = () => {
  return (
    <div className = "slills">
      <NavBar />
        <div className = "skillsContainer">
        <SkillsList/>
        </div>
      <Footer />
    </div>
  );
};

export default Skills;
