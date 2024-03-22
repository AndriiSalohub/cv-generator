import EducationInfo from "./components/EducationInfo/EducationInfo.jsx";
import Footer from "./components/Footer/Footer";
import GeneralInfo from "./components/GeneralInfom/GeneralInfo.jsx";
import Header from "./components/Header/Header.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Languages from "./components/Languages/Languages.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Skills from "./components/Skills/Skills.jsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Profile />
        <GeneralInfo />
        <EducationInfo />
        <WorkExperience />
        <Skills />
        <Languages />
        <Interests />
      </main>
      <Footer />
    </>
  );
}

export default App;
