import { Link } from "react-router-dom";

const EmptyAd = () => (
  <div className="container emptylist space flex-center-center">
    <div className="w-100">
      <h3>There's nothing here...</h3>
      <Link to="/"> Home</Link>
    </div>
  </div>
);

export default EmptyAd;
