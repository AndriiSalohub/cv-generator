import FormDescription from "../FormDescription/FormDescription";
import "./WorkExperience.scss";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <FormDescription
        titleNumber="3"
        title="Work Experience"
        description="Showcase your professional accomplishments and demonstrate your ability to contribute to an organization.In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it."
        addMoreButton={true}
        buttonText="Add more experience"
      />

      <form action="" className="work-experience__form form">
        <div>
          <label
            htmlFor="your position"
            className="work-experience__form-label form-label"
          >
            Your position
          </label>
          <input
            type="text"
            name="your position"
            id="your position"
            className="work-experience__form-input form-input"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="work-experience__form-label form-label"
          >
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="work-experience__form-input form-input"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="work-experience__form-label form-label"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="work-experience__form-input form-input"
          />
        </div>
        <div className="work-experience__form-company">
          <div>
            <label
              htmlFor="from"
              className="work-experience__form-label form-label"
            >
              From
            </label>
            <input
              type="text"
              name="from"
              id="from"
              className="work-experience__form-input form-input"
              placeholder="MM/YYYY"
            />
          </div>
          <div>
            <label
              htmlFor="to"
              className="work-experience__form-label form-label"
            >
              To
            </label>
            <input
              type="text"
              name="to"
              id="to"
              className="work-experience__form-input form-input"
              placeholder="MM/YYYY"
            />
          </div>
        </div>
        <label
          htmlFor="tasks"
          className="work-experience__form-label form-label"
        >
          Tasks / Achievements
        </label>
        <textarea
          name="tasks"
          id="tasks"
          rows="6"
          placeholder="Describe your main tasks and responsibilities in this role, as well as any achievements or accomplishments you are particularly proud of. Be specific and use metrics or numbers to quantify your impact whenever possible."
          className="work-experience__form-textarea form-input"
        ></textarea>
      </form>
    </section>
  );
};

export default WorkExperience;
