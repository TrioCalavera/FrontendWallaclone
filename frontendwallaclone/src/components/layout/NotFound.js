import { t } from "i18next";
import { Link } from "react-router-dom";
import Error from "../../images/404.png";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section className="section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center mx-auto">
            <div className="404-img">
              <img src={Error} className="img-fluid" alt="" />
            </div>
            <div className="404-content">
              <h1 className="display-1 pt-1 pb-2">{t("404.ops")}</h1>
              <p className="px-3 pb-2 text-dark">
                {t("404.something")}( <br />
                {t("404.but")}
              </p>
              <Link to="/adverts" className="btn btn-info">
                {t("404.home")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
