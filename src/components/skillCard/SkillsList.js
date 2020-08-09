import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "c",
    image: "./images/c.png",
    rating: 3.6,
  },

  {
    name: "java",
    image:
      "./images/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-Ömer-5b6766ab5dba25.7100170215335031473839.png",
    rating: 3.9,
  },

  {
    name: "react",
    image: "./images/react.png",
    rating: 4.5,
  },

  {
    name: "gatsby",
    image: "./images/gatsby.png",
    rating: 4,
  },

  {
    name: "framer ux design",
    image: "./images/framer.png",
    rating: 3.5,
  },
];
const SkillsList = () => {
  return (
    <div className="skillList">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          name={skill.name}
          image={skill.image}
          rating={skill.rating}
        />
      ))}
    </div>
  );
};

export default SkillsList;
