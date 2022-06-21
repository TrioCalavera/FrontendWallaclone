import logo from "../images/logo.png";

const HeaderPage = () => (
  <div>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light navigation">
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto main-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-slide">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href=""
                    >
                      Dashboard
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>

                    {/* <!-- Dropdown list --> */}
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="dashboard.html">
                        Dashboard
                      </a>
                      <a className="dropdown-item" href="dashboard-my-ads.html">
                        Dashboard My Ads
                      </a>
                      <a
                        className="dropdown-item"
                        href="dashboard-favourite-ads.html"
                      >
                        Dashboard Favourite Ads
                      </a>
                      <a
                        className="dropdown-item"
                        href="dashboard-archived-ads.html"
                      >
                        Dashboard Archived Ads
                      </a>
                      <a
                        className="dropdown-item"
                        href="dashboard-pending-ads.html"
                      >
                        Dashboard Pending Ads
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown dropdown-slide">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
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
                  <li className="nav-item dropdown dropdown-slide">
                    <a
                      className="nav-link dropdown-toggle"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Listing{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    {/* <!-- Dropdown list --> */}
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="category.html">
                        Ad-Gird View
                      </a>
                      <a className="dropdown-item" href="ad-listing-list.html">
                        Ad-List View
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <li className="nav-item">
                    <a className="nav-link login-button" href="login.html">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white add-button"
                      href="ad-listing.html"
                    >
                      <i className="fa fa-plus-circle"></i> Add Listing
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section className="hero-area bg-1 text-center overly">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Header Contetnt --> */}
            <div className="content-block">
              <h1>Buy & Sell Near You</h1>
              <p>
                Join the millions who buy and sell from each other <br />
                everyday in local communities around the world
              </p>
              <div className="short-popular-category-list text-center">
                <h2>Popular Category</h2>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="category.html">
                      <i className="fa fa-bed"></i> Hotel
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">
                      <i className="fa fa-grav"></i> Fitness
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">
                      <i className="fa fa-car"></i> Cars
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">
                      <i className="fa fa-cutlery"></i> Restaurants
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">
                      <i className="fa fa-coffee"></i> Cafe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Advance Search --> */}
            <div className="advance-search">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 align-content-center">
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <input
                            type="text"
                            className="form-control my-2 my-lg-1"
                            id="inputtext4"
                            placeholder="What are you looking for"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <select className="w-100 form-control mt-lg-1 mt-md-2">
                            <option>Category</option>
                            <option value="1">Top rated</option>
                            <option value="2">Lowest Price</option>
                            <option value="4">Highest Price</option>
                          </select>
                        </div>
                        <div className="form-group col-md-3">
                          <input
                            type="text"
                            className="form-control my-2 my-lg-1"
                            id="inputLocation4"
                            placeholder="Location"
                          />
                        </div>
                        <div className="form-group col-md-2 align-self-center">
                          <button type="submit" className="btn btn-primary">
                            Search Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container End --> */}
    </section>
  </div>
);

export default HeaderPage;
