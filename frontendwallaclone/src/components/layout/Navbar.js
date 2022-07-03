import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [menuBurger, setMenuBurger] = useState(false);
  const handleMenuBurger = () => setMenuBurger(!menuBurger);

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
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown dropdown-slide">
                    <a className="nav-link dropdown-toggle" href="#">
                      Pages{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    {/* <!-- Dropdown list --> */}
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="about-us.html">
                        About Us
                      </a>
                      <a className="dropdown-item" href="contact-us.html">
                        Contact Us
                      </a>
                      <a className="dropdown-item" href="user-profile.html">
                        User Profile
                      </a>
                      <a className="dropdown-item" href="404.html">
                        404 Page
                      </a>
                      <a className="dropdown-item" href="package.html">
                        Package
                      </a>
                      <a className="dropdown-item" href="single.html">
                        Single Page
                      </a>
                      <a className="dropdown-item" href="store.html">
                        Store Single
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single Post
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <Link to="/register" className="nav-link login-button">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link login-button">
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
