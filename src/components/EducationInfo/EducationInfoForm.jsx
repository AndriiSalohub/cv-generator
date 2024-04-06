import FormDescription from "../FormDescription/FormDescription.jsx";
import "./EducationInfo.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  deleteEducation,
  educationChange,
} from "../../store/slices/educationSlice.js";

const EducationInfo = () => {
  const educations = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name.split(" ").length == 1) {
      dispatch(
        educationChange({
          index,
          name,
          value,
        }),
      );
    } else {
      const fieldName =
        name.split(" ")[0] +
        name.split(" ")[1][0].toUpperCase() +
        name.split(" ")[1].slice(1);

      dispatch(
        educationChange({
          index,
          name: fieldName,
          value,
        }),
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleAddEducation = () => {
    dispatch(addEducation());
  };

  const handleDeleteEducation = (event, index) => {
    event.preventDefault();

    dispatch(deleteEducation(index));
  };

  return (
    <section className="education">
      <FormDescription
        titleNumber="2"
        title="Education"
        description="The education demonstrates your commitment to learning and your willingness to acquire new skills. If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any formal education, consider including any relevant certifications or training you may have received."
        addMoreButton={true}
        buttonText="Add more education"
        handleClick={handleAddEducation}
      />
      {educations.map(
        ({ schoolName, degree, startingDate, endingDate }, index) => (
          <form action="" className="education__form form" key={index}>
            <div>
              <label
                htmlFor={`school name-${index}`}
                className="education__form-label form-label"
              >
                School name
              </label>
              <input
                type="text"
                name="school name"
                id={`school name-${index}`}
                value={schoolName}
                className="education__form-input form-input"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
            <div>
              <label
                htmlFor={`degree-${index}`}
                className="education__form-label form-label"
              >
                Degree, certification or title
              </label>
              <input
                type="text"
                name="degree"
                id={`degree-${index}`}
                value={degree}
                className="education__form-input form-input"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
            <div>
              <label
                htmlFor={`starting date-${index}`}
                className="education__form-label form-label"
              >
                Starting date
              </label>
              <input
                type="text"
                name="starting date"
                id={`starting date-${index}`}
                value={startingDate}
                className="education__form-input form-input"
                placeholder="MM/YYYY"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
            <div>
              <label
                htmlFor={`ending date-${index}`}
                className="education__form-label form-label"
              >
                Ending date
              </label>
              <input
                type="text"
                name="ending date"
                id={`ending date-${index}`}
                value={endingDate}
                className="education__form-input form-input"
                placeholder="MM/YYYY"
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
            </div>
            {educations.length > 1 && (
              <button
                className="education__form-delete-btn delete-btn"
                onClick={(event) => handleDeleteEducation(event, index)}
              >
                <RiDeleteBin5Line />
              </button>
            )}
          </form>
        ),
      )}
    </section>
  );
};

export default EducationInfo;
