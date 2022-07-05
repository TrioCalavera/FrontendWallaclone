import { Link } from "react-router-dom";
const Subfooter = () => {
  return (
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
                <Link className="text-primary" to="/">
                  &nbsp; Cuarteto Calavera
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
