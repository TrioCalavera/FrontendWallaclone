import HeaderPage from "./components/layout/HeaderPage";
import FooterPage from "./components/layout/FooterPage";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Subfooter from "./components/layout/Subfooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderPage />
      <Main />
      <FooterPage />
      <Subfooter />
    </div>
  );
}

export default App;
