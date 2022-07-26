import Navbar from "./Navbar";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import Subfooter from "./Subfooter";

const Layout = ({ children, handleData }) => {
  return (
    <div>
      <Navbar />
      <HeaderPage handleData={handleData} />
      {children}
      <FooterPage />
      <Subfooter />
    </div>
  );
};

export default Layout;
