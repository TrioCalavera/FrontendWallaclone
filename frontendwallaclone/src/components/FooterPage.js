import phoneIcon from "../images/phone-icon.png";
import apple from "../images/apple-app-store.png";
import google from "../images/google-play-store.png";
import logoFooter from "../images/logo-footer.png";

const FooterPage = () => (
  <di>
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
                  <a href="#">Boston</a>
                </li>
                <li>
                  <a href="#">How It works</a>
                </li>
                <li>
                  <a href="#">Deals & Coupons</a>
                </li>
                <li>
                  <a href="#">Articls & Tips</a>
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
                  <a href="category.html">Category</a>
                </li>
                <li>
                  <a href="single.html">Single Page</a>
                </li>
                <li>
                  <a href="store.html">Store Single</a>
                </li>
                <li>
                  <a href="single-blog.html">Single Post</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Promotion --> */}
          <div className="col-lg-4 col-md-7">
            {/* <!-- App promotion --> */}
            <div className="block-2 app-promotion">
              <div className="mobile d-flex">
                <a href="">
                  {/* <!-- Icon --> */}
                  <img src={phoneIcon} alt="mobile-icon" />
                </a>
                <p>Get the Dealsy Mobile App and Save more</p>
              </div>
              <div className="download-btn d-flex my-3">
                <a href="#">
                  <img src={google} className="img-fluid" alt="" />
                </a>
                <a href="#" className="ml-3">
                  <img src={apple} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container End --> */}
    </footer>
    {/*  <!-- Footer Bottom --> */}
    <footer className="footer-bottom">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12">
            {/* <!-- Copyright --> */}
            <div className="copyright">
              <p>
                Copyright © {new Date().getFullYear()}. All Rights Reserved,
                theme by
                <a
                  className="text-primary"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp; Cuarteto Calavera
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            {/* <!-- Social Icons --> */}
            <ul className="social-media-icons text-right">
              <li>
                <a
                  className="fa fa-facebook"
                  href="https://www.facebook.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-twitter"
                  href="https://www.twitter.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-pinterest-p"
                  href="https://www.pinterest.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a className="fa fa-vimeo" href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Container End -->
    <!-- To Top --> */}
      <div className="top-to">
        <a id="top" className="" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </footer>
  </di>
);

export default FooterPage;
