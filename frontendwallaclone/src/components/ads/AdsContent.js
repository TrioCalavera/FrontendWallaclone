import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import AdCard from "./AdCard";
import { getLatestAds } from "../../api/service";

const AdsContent = () => {
  // const [ads, setAds] = useState([]);
  // useEffect(() => {
  //   const execute = async () => {
  //     const ads = await getLatestAds();
  //     setAds(ads);
  //     console.log(ads);
  //   };
  //   execute();
  //   return () => {};
  // }, []);
  const ads = [
    {
      _id: "62c5b3bd886aeac85d62001d",
      name: "nintendo wii",
      image: "./public/images/productos/wii.jpg",
      price: 29.99,
      sale: true,
      tags: ["lifestyle"],
    },
    {
      _id: "62c5b3bd886aeac85d62001e",
      name: "calzado de seguridad gyear",
      price: 25,
      sale: false,
      tags: ["lifestyle,work"],
    },
    {
      _id: "62c5b3bd886aeac85d62001f",
      name: "ford grand cmax",
      image: "./public/images/productos/fordgrnadcmax.jpg",
      price: 4500,
      sale: true,
      tags: ["motor,work"],
    },
    {
      _id: "61f54aca4de7191a46531504",
      name: "iMac 2015",
      image: "./public/images/productos/imac2015.jpg",
      price: 750,
      sale: true,
      tags: ["lifestyle,work"],
    },
    {
      _id: "62c5b3bd886aeac85d620021",
      name: "iPhone SE 2020",
      image: "./public/images/productos/iphonese2020.jpg",
      price: 399,
      sale: true,
      tags: ["lifestyle,work,mobile"],
    },
  ];
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
            {ads.map((ad) => (
              <AdCard ad={ad} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdsContent;
