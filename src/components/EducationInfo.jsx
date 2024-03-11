import "../styles/EducationInfo.scss";
import FormDescription from "./FormDescription";

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
    </section>
  );
};

export default EducationInfo;
