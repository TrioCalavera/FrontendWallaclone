import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth } from '../context';
import { logout } from "../login/service";

const Navbar = () => {
  const { isLogged, handleLogout: onLogout } = useAuth();

  console.log(isLogged);
  const [menuBurger, setMenuBurger] = useState(false);
  const handleMenuBurger = () => setMenuBurger(!menuBurger);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ?(
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
                      Home
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
                      User
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown dropdown-slide">
                    <a href="#" className="nav-link dropdown-toggle">
                      Pages{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    {/* <!-- Dropdown list --> */}
                    <div className="dropdown-menu">
                      <NavLink
                        to="/user-profile"
                        className="dropdown-item"
                        style={({ isActive }) =>
                          isActive ? { color: "#fff" } : null
                        }
                      >
                        User
                      </NavLink>
                      <NavLink
                        to="/404"
                        className="dropdown-item"
                        style={({ isActive }) =>
                          isActive ? { color: "#fff" } : null
                        }
                      >
                        404 Page
                      </NavLink>
                      <Link to="/" className="dropdown-item">
                        Test
                      </Link>
                      <Link to="/" className="dropdown-item">
                        Blog
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <Link to="/" className="nav-link login-button" onClick={handleLogoutClick}>
                      Log Out
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white add-button" to="/new">
                      <i className="fa fa-plus-circle"></i> New Ad
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  ):(
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
                      Home
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
                      User
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown dropdown-slide">
                    <a href="#" className="nav-link dropdown-toggle">
                      Pages{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    {/* <!-- Dropdown list --> */}
                    <div className="dropdown-menu">
                      <NavLink
                        to="/user-profile"
                        className="dropdown-item"
                        style={({ isActive }) =>
                          isActive ? { color: "#fff" } : null
                        }
                      >
                        User
                      </NavLink>
                      <NavLink
                        to="/404"
                        className="dropdown-item"
                        style={({ isActive }) =>
                          isActive ? { color: "#fff" } : null
                        }
                      >
                        404 Page
                      </NavLink>
                      <Link to="/" className="dropdown-item">
                        Test
                      </Link>
                      <Link to="/" className="dropdown-item">
                        Blog
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link login-button">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link login-button">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white add-button" to="/new">
                      <i className="fa fa-plus-circle"></i> New Ad
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
