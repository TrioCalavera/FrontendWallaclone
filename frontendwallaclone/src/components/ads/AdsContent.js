import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import AdCard from "./AdCard";
import { getLatestAds } from "../../api/service";
import EmptyListAds from "../elements/EmptyList/EmptyListAds";
import Spinner from "../elements/spinner/Spinner";
import { useTranslation } from "react-i18next";

const AdsContent = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    const execute = async () => {
      try {
        setIsLoading(true);
        const ads = await getLatestAds();
        // Ordenados de mas nuevos a mas antiguos
        ads.result.sort((b, a) => {
          return a.create - b.create;
        });
        setAds(ads.result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    execute();
    return () => {};
  }, []);
  return (
    <Layout>
      <section className="popular-deals section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>{t("adscontent.title")}</h2>
                <p>{t("adscontent.text")}</p>
              </div>
            </div>
          </div>
          {/* Productos */}
          <div className="trending-ads-slide row">
            {!ads.length ? (
              <EmptyListAds />
            ) : (
              ads.map((ad, index) => <AdCard ad={ad} key={index} />)
            )}
          </div>
        </div>
      </section>
      {isLoading && <Spinner />}
    </Layout>
  );
};

export default AdsContent;
