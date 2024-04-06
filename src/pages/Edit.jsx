import Profile from "../components/Profile/Profile";
import EducationInfo from "../components/EducationInfo/EducationInfoForm.jsx";
import GeneralInfo from "../components/GeneralInfo/GeneralInfoForm.jsx";
import Interests from "../components/Interests/InterestsForm.jsx";
import Languages from "../components/Languages/LanguagesForm.jsx";
import Skills from "../components/Skills/SkillsForm.jsx";
import WorkExperience from "../components/WorkExperience/WorkExperienceForm.jsx";

const Edit = () => {
  return (
    <>
      <Profile />
      <GeneralInfo />
      <EducationInfo />
      <WorkExperience />
      <Skills />
      <Languages />
      <Interests />
    </>
  );
};

export default Edit;
