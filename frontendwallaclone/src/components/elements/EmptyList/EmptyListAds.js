import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./emptyListAds.css";

const EmptyListAds = () => {
  const { t } = useTranslation();
  return (
    <div className="container emptylist">
      <h3>Be the first to upload something</h3>
      <Link to="/new">Create new adverts</Link>
    </div>
  );
};

export default EmptyListAds;
