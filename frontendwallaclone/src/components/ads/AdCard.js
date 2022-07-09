import { Link } from "react-router-dom";
import product from "../../images/products-1.jpg";
const AdCard = ({ ad }) => {
  return (
    <div className="col-sm-12 col-lg-4">
      <Link to="/adverts/:adsId">
        <div className="product-item bg-light">
          <div className="card">
            <div className="thumb-content">
              <div className="price">{ad.price} €</div>
              <img
                className="card-img-top img-fluid"
                src={product}
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title uppercase">{ad.name}</h4>
              <ul className="list-inline product-meta">
                <li className="list-block-item">
                  <i className="fa fa-folder-open-o mr-2"></i>
                  {ad.tags.map((tag, index) => (
                    <strong className="mr-2" key={index}>
                      {tag}
                    </strong>
                  ))}
                </li>
                <li className="list-block-item">
                  <i className="fa fa-calendar mr-2"></i>
                  <strong>{ad.create}</strong>
                </li>
              </ul>
              <p className="card-text">{ad.description}</p>
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
