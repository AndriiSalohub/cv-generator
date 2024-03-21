import { useEffect, useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./Skills.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event, index) => {
    setSkills((prevState) =>
      prevState.map((skill, i) => {
        if (i === index) {
          return {
            ...skill,
            [event.target.name]: event.target.value,
          };
        }

        return skill;
      }),
    );
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: "" }]);
  };

  const handleDeleteSkill = (event, index) => {
    event.preventDefault();

    setSkills((prevState) => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
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
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              name="skill"
              className="skills__form-input form-input"
              placeholder={skill.skill ? `e.g. ${skill.skill}` : "New skill..."}
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
            {skills.length > 1 && (
              <button
                className="skills__form-delete-btn delete-btn"
                onClick={(event) => handleDeleteSkill(event)}
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
