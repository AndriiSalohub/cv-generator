import { useState } from "react";
import FormDescription from "../FormDescription/FormDescription";
import "./WorkExperience.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
      tasks: "",
    },
  ]);

  const handleInputChange = (event, index) => {
    setWorkExperiences((prevState) =>
      prevState.map((experience, i) => {
        if (i === index) {
          return {
            ...experience,
            [event.target.name]: event.target.value,
          };
        }

        return experience;
      }),
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleAddExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
        tasks: "",
      },
    ]);
  };

  const handleDeleteExperience = (event, index) => {
    event.preventDefault();

    setWorkExperiences((prevState) => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  return (
    <section className="work-experience">
      <FormDescription
        titleNumber="3"
        title="Work Experience"
        description="Showcase your professional accomplishments and demonstrate your ability to contribute to an organization. In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it."
        addMoreButton={true}
        buttonText="Add more experience"
        handleClick={handleAddExperience}
      />

      {workExperiences.map((experience, index) => (
        <form key={index} action="" className="work-experience__form form">
          <div>
            <label
              htmlFor={`your position-${index}`}
              className="work-experience__form-label form-label"
            >
              Your position
            </label>
            <input
              type="text"
              name="position"
              id={`your position-${index}`}
              className="work-experience__form-input form-input"
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
          </div>
          <div>
            <label
              htmlFor={`company-${index}`}
              className="work-experience__form-label form-label"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id={`company-${index}`}
              className="work-experience__form-input form-input"
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
          </div>
          <div>
            <label
              htmlFor={`location-${index}`}
              className="work-experience__form-label form-label"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id={`location-${index}`}
              className="work-experience__form-input form-input"
              onChange={(event) => handleInputChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
          </div>
          <div className="work-experience__form-company">
            <div>
              <label
                htmlFor={`from-${index}`}
                className="work-experience__form-label form-label"
              >
                From
              </label>
              <input
                type="text"
                name="from"
                id={`from-${index}`}
                className="work-experience__form-input form-input"
                placeholder="MM/YYYY"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
            <div>
              <label
                htmlFor={`to-${index}`}
                className="work-experience__form-label form-label"
              >
                To
              </label>
              <input
                type="text"
                name="to"
                id={`to-${index}`}
                className="work-experience__form-input form-input"
                placeholder="MM/YYYY"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
          </div>
          <label
            htmlFor={`tasks-${index}`}
            className="work-experience__form-label form-label"
          >
            Tasks / Achievements
          </label>
          <textarea
            name="tasks"
            id={`tasks-${index}`}
            rows="6"
            placeholder="Describe your main tasks and responsibilities in this role, as well as any achievements or accomplishments you are particularly proud of. Be specific and use metrics or numbers to quantify your impact whenever possible."
            className="work-experience__form-textarea form-input"
            onChange={(event) => handleInputChange(event, index)}
            onKeyDown={(event) => handleKeyPress(event)}
          ></textarea>
          {workExperiences.length > 1 && (
            <button
              className="work-experience__form-delete-btn delete-btn"
              onClick={(event) => handleDeleteExperience(event, index)}
            >
              <RiDeleteBin5Line />
            </button>
          )}
        </form>
      ))}
    </section>
  );
};

export default WorkExperience;
