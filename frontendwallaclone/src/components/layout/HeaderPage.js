import Searcher from "./Searcher";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <section className="hero-area bg-1 text-center overly">
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
                    <Link to="/">
                      <i className="fa fa-briefcase"></i> Work
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-heart"></i> Lifestyle
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-mobile"></i> Mobile
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-car"></i> Motor
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-coffee"></i> IT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Searcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderPage;
