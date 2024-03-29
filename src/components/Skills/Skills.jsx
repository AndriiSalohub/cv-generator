import { useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./Skills.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  addSkill,
  deleteSkill,
  skillChange,
} from "../../store/slices/skillsSlice";
import { useDispatch, useSelector } from "react-redux";

const Skills = () => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    dispatch(skillChange({ index, name, value }));
  };

  const handleAddSkill = () => {
    dispatch(addSkill());
  };

  const handleDeleteSkill = (event, index) => {
    event.preventDefault();

    dispatch(deleteSkill(index));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
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
                onClick={(event) => handleDeleteSkill(event, index)}
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
