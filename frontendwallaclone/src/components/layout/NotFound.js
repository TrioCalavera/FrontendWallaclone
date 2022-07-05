import { Link } from "react-router-dom";
import LayoutWithoutBanner from "./LayoutWithoutBanner";
import Error from "../../images/404.png";

const NotFound = () => {
  return (
    <LayoutWithoutBanner>
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mx-auto">
              <div className="404-img">
                <img src={Error} className="img-fluid" alt="" />
              </div>
              <div className="404-content">
                <h1 className="display-1 pt-1 pb-2">Oops</h1>
                <p className="px-3 pb-2 text-dark">
                  Something went wrong, we can't find the page that you are
                  looking for :( <br />
                  But there is a lot more for you!
                </p>
                <Link to="/adverts" className="btn btn-info">
                  GO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWithoutBanner>
  );
};

export default NotFound;
