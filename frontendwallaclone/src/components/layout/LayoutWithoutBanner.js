import Navbar from "./Navbar";
import FooterPage from "./FooterPage";
import Subfooter from "./Subfooter";

const LayoutWithoutBanner = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FooterPage />
      <Subfooter />
    </div>
  );
};

export default LayoutWithoutBanner;
