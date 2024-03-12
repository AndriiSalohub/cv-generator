import "./EducationInfo.scss";
import FormDescription from "../FormDescription/FormDescription.jsx";

const EducationInfo = () => {
  return (
    <section className="education">
      <FormDescription
        titleNumber="2"
        title="Education"
        description="The education demonstrates your commitment to learning and your willingness to acquire new skills. If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any formal education, consider including any relevant certifications or training you may have received."
        addMoreButton={true}
        buttonText="Add more education"
      />
      <form action="" className="education__form form">
        <div>
          <label
            htmlFor="school name"
            className="education__form-label form-label"
          >
            School name
          </label>
          <input
            type="text"
            name="school name"
            id="school name"
            className="education__form-input form-input"
          />
        </div>
        <div>
          <label htmlFor="degree" className="education__form-label form-label">
            Degree, certification or title
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            className="education__form-input form-input"
          />
        </div>
        <div>
          <label
            htmlFor="starting date"
            className="education__form-label form-label"
          >
            Starting date
          </label>
          <input
            type="text"
            name="starting date"
            id="starting date"
            className="education__form-input form-input"
            placeholder="MM/YYYY"
          />
        </div>
        <div>
          <label
            htmlFor="ending date"
            className="education__form-label form-label"
          >
            Ending date
          </label>
          <input
            type="text"
            name="ending date"
            id="ending date"
            className="education__form-input form-input"
            placeholder="MM/YYYY"
          />
        </div>
      </form>
    </section>
  );
};

export default EducationInfo;
