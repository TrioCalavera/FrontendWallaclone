import { useState, useEffect } from "react";
import "./scrollTo.css";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <a className="icon-position icon-style" onClick={goToTop}>
          <i className="fa fa-angle-up"></i>
        </a>
      )}{" "}
    </div>
  );
};

export default ScrollTop;
