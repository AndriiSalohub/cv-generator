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
    </section>
  );
};

export default WorkExperience;
