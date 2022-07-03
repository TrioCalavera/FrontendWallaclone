import Layout from "../layout/Layout";
import AdCard from "./AdCard";
const AdsContent = () => {
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
            <AdCard />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdsContent;