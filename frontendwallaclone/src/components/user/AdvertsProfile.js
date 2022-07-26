import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import EmptyListAds from "../elements/EmptyList/EmptyListAds";
import AdCard from "../ads/AdCard";
import Spinner from "../elements/spinner/Spinner";
import { getMyAds } from "../../api/service";

const AdvertsProfile = () => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [adsUser, setAdsUser] = useState([]);

    useEffect(() => {
        const execute = async () => {
          setIsLoading(true);
          const adverts = await getMyAds();
          setAdsUser(adverts.result);
          setIsLoading(false);
        };
        execute();
        return () => {};
      }, []);

      console.log(adsUser);
return (
    
      <section className="popular-deals section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>{t("adsOwner.title")}</h2>
                <p>{t("adsOwner.text")}</p>
              </div>
            </div>
          </div>
          {/* Productos */}
          <div className="trending-ads-slide row">
            {!adsUser.length ? (
              <EmptyListAds />
            ) : (
                adsUser.map((ad, index) => <AdCard ad={ad} key={index} />)
            )}
          </div>
        </div>
        {isLoading && <Spinner />}
      </section>    
  );
}            

export default AdvertsProfile;