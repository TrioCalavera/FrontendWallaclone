import Navbar from "./Navbar";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import Subfooter from "./Subfooter";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <HeaderPage />
      {children}
      <FooterPage />
      <Subfooter />
    </div>
  );
};

export default Layout;
