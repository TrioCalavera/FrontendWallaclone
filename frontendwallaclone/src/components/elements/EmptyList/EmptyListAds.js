import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./emptyListAds.css";

const EmptyListAds = () => {
  const { t } = useTranslation();
  return (
    <div className="container emptylist">
      <h3>{t("emptyList.first")}</h3>
      <Link to="/new">{t("emptyList.create")}</Link>
    </div>
  );
};

export default EmptyListAds;
