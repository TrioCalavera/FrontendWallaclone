import { Link } from "react-router-dom";
import product from "../../images/products-1.jpg";
const AdCard = () => {
  return (
    <div className="col-sm-12 col-lg-4">
      <Link to="/adverts/:adsId">
        <div className="product-item bg-light">
          <div className="card">
            <div className="thumb-content">
              <div className="price">$200</div>
              <img
                className="card-img-top img-fluid"
                src={product}
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="single.html">11inch Macbook Air</a>
              </h4>
              <ul className="list-inline product-meta">
                <li className="list-inline-item">
                  <i className="fa fa-folder-open-o"></i>Electronics
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-calendar"></i>26th December
                </li>
              </ul>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, aliquam!
              </p>
              <div className="product-ratings">
                <ul className="list-inline">
                  <li className="list-inline-item selected">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item selected">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item selected">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item selected">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdCard;
