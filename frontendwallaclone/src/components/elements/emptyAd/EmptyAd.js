import { t } from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { t } = useTranslation();
const EmptyAd = () => (
  <div className="container emptylist space flex-center-center">
    <div className="w-100">
      <h3>{t("empty.emptyAd")}</h3>
      <Link to="/">{t("empty.home")}</Link>
    </div>
  </div>
);

export default EmptyAd;
