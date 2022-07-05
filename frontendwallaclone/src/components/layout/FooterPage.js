import { Link } from "react-router-dom";
import phoneIcon from "../../images/phone-icon.png";
import apple from "../../images/apple-app-store.png";
import google from "../../images/google-play-store.png";
import logoFooter from "../../images/logo-footer.png";

const FooterPage = () => {
  return (
    <footer className="footer section section-sm">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-7 offset-md-1 offset-lg-0">
            {/* <!-- About --> */}
            <div className="block about">
              {/* <!-- footer logo --> */}
              <img src={logoFooter} alt="" />
              {/* <!-- description --> */}
              <p className="alt-color">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* <!-- Link list --> */}
          <div className="col-lg-2 offset-lg-1 col-md-3">
            <div className="block">
              <h4>Site Pages</h4>
              <ul>
                <li>
                  <Link to="/">Boston</Link>
                </li>
                <li>
                  <Link to="/">How It works</Link>
                </li>
                <li>
                  <Link to="/">Deals & Coupons</Link>
                </li>
                <li>
                  <Link to="/">Articls & Tips</Link>
                </li>
                <li>
                  <a href="terms-condition.html">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Link list --> */}
          <div className="col-lg-2 col-md-3 offset-md-1 offset-lg-0">
            <div className="block">
              <h4>Admin Pages</h4>
              <ul>
                <li>
                  <Link to="/">Category</Link>
                </li>
                <li>
                  <Link to="/">Single Page</Link>
                </li>
                <li>
                  <Link to="/">Store Single</Link>
                </li>
                <li>
                  <Link to="/">Single Post</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Promotion --> */}
          <div className="col-lg-4 col-md-7">
            {/* <!-- App promotion --> */}
            <div className="block-2 app-promotion">
              <div className="mobile d-flex">
                <Link to="/">
                  {/* <!-- Icon --> */}
                  <img src={phoneIcon} alt="mobile-icon" />
                </Link>
                <p>Get the Dealsy Mobile App and Save more</p>
              </div>
              <div className="download-btn d-flex my-3">
                <Link to="/">
                  <img src={google} className="img-fluid" alt="" />
                </Link>
                <Link to="/" className="ml-3">
                  <img src={apple} className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container End --> */}
    </footer>
  );
};

export default FooterPage;
