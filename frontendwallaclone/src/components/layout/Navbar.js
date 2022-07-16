import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../images/logo.png";

const Navbar = () => {
  const [menuBurger, setMenuBurger] = useState(false);
  const handleMenuBurger = () => setMenuBurger(!menuBurger);

  const lngs = {
    en: { nativeName: "En" },
    es: { nativeName: "Es" },
  };

  const { t, i18n } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light navigation">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleMenuBurger}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  menuBurger
                    ? "collapse navbar-collapse show"
                    : "collapse navbar-collapse"
                }
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto main-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/adverts"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive ? { color: "#4883ff" } : null
                      }
                    >
                      {t("general.home")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/user-profile"
                      className="nav-link"
                      style={({ isActive }) =>
                        isActive ? { color: "#4883ff" } : null
                      }
                    >
                      {t("general.user")}
                    </NavLink>
                  </li>
                  {Object.keys(lngs).map((lng) => (
                    <li className="nav-item" key={lng}>
                      <Link
                        to="#"
                        onClick={() => i18n.changeLanguage(lng)}
                        className={
                          i18n.resolvedLanguage === lng
                            ? "languaje-active nav-link"
                            : "nav-link"
                        }
                      >
                        {lngs[lng].nativeName}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link login-button">
                      {t("general.login")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link login-button">
                      {t("general.register")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white add-button" to="/new">
                      <i className="fa fa-plus-circle mr-2"></i>
                      {t("general.new_ad")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
