import { useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./Skills.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, skill: "JavaScript" },
    { id: 2, skill: "Strong communication" },
    { id: 3, skill: "Adaptability" },
  ]);

  const handleDeleteSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId));
  };

  return (
    <section className="skills">
      <FormDescription
        titleNumber="4"
        title="Skills"
        description="Showcase your professional accomplishments and demonstrate your ability to contribute to an organization. In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it."
        addMoreButton={true}
        buttonText="Add Skill"
      />
      <form action="" className="skills__form form">
        {skills.map((skill) => (
          <div key={skill.id}>
            <input
              type="text"
              className="skills__form-input form-input"
              placeholder={`e.g. ${skill.skill}`}
            />
            <button
              className="skills__form-delete-btn"
              onClick={() => handleDeleteSkill(skill.id)}
            >
              <RiDeleteBin5Line />
            </button>
          </div>
        ))}
      </form>
    </section>
  );
};

export default Skills;
