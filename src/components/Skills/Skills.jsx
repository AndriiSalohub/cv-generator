import { useEffect, useState } from "react";
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

  const handleAddSkill = () => {
    setSkills([...skills, { id: skills.length + 1, skill: "" }]);
  };

  const handleKeyPress = (event, skillId) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.trim()) {
        setSkills([
          ...skills.map((skill) =>
            skill.id === skillId
              ? { ...skill, skill: event.target.value }
              : skill,
          ),
        ]);
      }
    }
  };

  useEffect(() => {
    if (skills.length === 0) {
      handleAddSkill();
    }
  }, [skills]);

  return (
    <section className="skills">
      <FormDescription
        titleNumber="4"
        title="Skills"
        description="Showcase your professional accomplishments and demonstrate your ability to contribute to an organization. In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it."
        addMoreButton={true}
        buttonText="Add Skill"
        handleClick={handleAddSkill}
      />
      <form action="" className="skills__form form">
        {skills.map((skill) => (
          <div key={skill.id}>
            <input
              type="text"
              className="skills__form-input form-input"
              placeholder={skill.skill ? `e.g. ${skill.skill}` : "New skill..."}
              onKeyDown={(e) => handleKeyPress(e, skill.id)}
            />
            {skills.length > 1 && (
              <button
                className="skills__form-delete-btn"
                onClick={() => handleDeleteSkill(skill.id)}
              >
                <RiDeleteBin5Line />
              </button>
            )}
          </div>
        ))}
      </form>
    </section>
  );
};

export default Skills;
