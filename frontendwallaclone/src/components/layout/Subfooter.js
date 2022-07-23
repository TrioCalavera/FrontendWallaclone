import { t } from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Subfooter = () => {
   const { t } = useTranslation();
  return (
    <footer className="footer-bottom">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12">
            {/* <!-- Copyright --> */}
            <div className="copyright">
              <p>
                {t("subfooter.copy")} © {new Date().getFullYear()}. {t("subfooter.rights")},
                {t("subfooter.theme")}
                <Link className="text-primary" to="/">
                  &nbsp; {t("subfooter.quartet")}
                </Link>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            {/* <!-- Social Icons --> */}
            <ul className="social-media-icons text-right">
              <li>
                <Link to="/" className="fa fa-facebook"></Link>
              </li>
              <li>
                <Link to="/" className="fa fa-twitter"></Link>
              </li>
              <li>
                <Link to="/" className="fa fa-pinterest-p"></Link>
              </li>
              <li>
                <Link to="/" className="fa fa-vimeo"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Subfooter;
