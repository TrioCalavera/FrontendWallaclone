import Searcher from "./Searcher";

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
            <Searcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderPage;
