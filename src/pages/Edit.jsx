import Profile from "../components/Profile/Profile";
import EducationInfo from "../components/EducationInfo/EducationInfo.jsx";
import GeneralInfo from "../components/GeneralInfom/GeneralInfo.jsx";
import Interests from "../components/Interests/Interests.jsx";
import Languages from "../components/Languages/Languages.jsx";
import Skills from "../components/Skills/Skills.jsx";
import WorkExperience from "../components/WorkExperience/WorkExperience.jsx";

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
