import EducationInfo from "./components/EducationInfo";
import Footer from "./components/Footer";
import GeneralInfo from "./components/GeneralInfo";
import Header from "./components/Header";
import Profile from "./components/Profile";

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
