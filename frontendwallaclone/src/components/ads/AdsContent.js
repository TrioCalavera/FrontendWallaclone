import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import AdCard from "./AdCard";
import { getLatestAds } from "../../api/service";
import EmptyListAds from "../elements/EmptyList/EmptyListAds";
import Spinner from "../elements/spinner/Spinner";

const AdsContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    const execute = async () => {
      setIsLoading(true);
      const ads = await getLatestAds();
      setAds(ads.result);
      setIsLoading(false);
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
                <h2>Trending Adds</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quas, magnam.
                </p>
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
