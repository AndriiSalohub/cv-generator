import EducationInfo from "./components/EducationInfo/EducationInfo.jsx";
import Footer from "./components/Footer/Footer";
import GeneralInfo from "./components/GeneralInfom/GeneralInfo.jsx";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Profile />
        <GeneralInfo />
        <EducationInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
