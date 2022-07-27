import { Link } from "react-router-dom";
import noImage from "../../images/no-image.jpg";
import timeConfig from "../../utils/timeConfig";
const AdCard = ({ ad }) => {
  return (
    <div className="col-sm-12 col-lg-4">
      <Link to={`/adverts/${ad._id}`}>
        <div className="product-item bg-light">
          <div className="card">
            <div className="thumb-content">
              <div className="price">{ad.price} €</div>
              <img
                className="card-img-top img-fluid"
                src={
                  ad.image !== undefined
                    ? process.env.REACT_APP_API_BASE_URL + ad.image
                    : noImage
                }
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title uppercase">{ad.name}</h4>
              <ul className="list-inline product-meta">
                <li className="list-block-item mb-1">
                  <i className="fa fa-folder-open-o mr-2"></i>
                  {ad.tags.map((tag, index) => (
                    <strong
                      className="mr-2 label-color text-capitalize"
                      key={index}
                    >
                      {tag}
                    </strong>
                  ))}
                </li>
                <li className="list-block-item">
                  <i className="fa fa-calendar mr-2"></i>
                  <strong>
                    {new Intl.DateTimeFormat("default", timeConfig).format(
                      ad.create
                    )}
                  </strong>
                </li>
              </ul>
              <p className="card-text">{ad.description}</p>
              <div className="flex-between-center">
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
                <strong>{ad.sale ? "Sale" : "Buy"}</strong>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdCard;
