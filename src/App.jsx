import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Profile />
      </main>
      <Footer />
    </>
  );
}

export default App;
