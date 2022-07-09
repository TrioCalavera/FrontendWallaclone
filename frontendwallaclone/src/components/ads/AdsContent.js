import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import AdCard from "./AdCard";
import { getLatestAds } from "../../api/service";

const AdsContent = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    const execute = async () => {
      const ads = await getLatestAds();
      setAds(ads.result);
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
            {ads.map((ad, index) => (
              <AdCard ad={ad} key={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdsContent;
