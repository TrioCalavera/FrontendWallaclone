import { Link } from "react-router-dom";
import "./emptyListAds.css";

const EmptyListAds = () => (
  <div className="container emptylist">
    <h3>Be the first to upload something</h3>
    <Link to="/new">Create new adverts</Link>
  </div>
);

export default EmptyListAds;
