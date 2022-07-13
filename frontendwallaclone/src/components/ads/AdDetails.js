import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import EmptyAd from "../elements/emptyAd/EmptyAd";
import "./css/adDetails.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAd } from "../../api/service";
import Modal from "../elements/modal/Modal";
import Spinner from "../elements/spinner/Spinner";

import Product1 from "../../images/products-1.jpg";
import userThumb from "../../images/user-gray.png";

const AdDetails = () => {
  const [adDetail, setAdDetail] = useState(null);

  //Revisar pq lo tengo que hacer así... Object.values
  const adId = Object.values(useParams());

  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const handleModalVisible = () => setModal(true);
  const handleModalHidden = () => setModal(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      getAd(adId[0]).then((adDetail) => setAdDetail(adDetail.result));
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  }, []);

  return (
    <LayoutWithoutBanner>
      {modal && <Modal handleModalHidden={handleModalHidden} />}

      {!adDetail ? (
        <EmptyAd />
      ) : (
        <section className="section bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="product-details">
                  <h1 className="product-title uppercase">{adDetail.name}</h1>
                  <div className="product-meta">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-user-o"></i> By{" "}
                        <strong>Pepe Bigote</strong>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-folder-open-o"></i> Category{" "}
                        {adDetail.tags.map((tag, index) => (
                          <strong className="mr-2" key={index}>
                            {tag}
                          </strong>
                        ))}
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-user-o"></i> Type{" "}
                        <strong>{adDetail.sale ? "Sale" : "Buy"}</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="product-slider">
                    <div className="product-slider-item" data-image={Product1}>
                      <img
                        className="img-fluid w-100"
                        src={Product1}
                        alt="product-img"
                      />
                    </div>
                  </div>
                  <div className="content compess">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <h3 className="tab-title">Product Description</h3>
                        <p>{adDetail.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="widget price text-center">
                    <h4>Price</h4>
                    <p>{adDetail.price} €</p>
                  </div>
                  <div className="widget user text-center">
                    <img
                      className="rounded-circle img-fluid mb-5 px-5"
                      src={userThumb}
                      alt=""
                    />
                    <h4>
                      <Link to="/">Pepe Bigote</Link>
                    </h4>
                    <p className="member-time">Member Since Jun 27, 2017</p>
                    <Link to="/">See all ads</Link>
                    <ul className="list-inline mt-20">
                      <li className="list-block-item">
                        <Link
                          to="/"
                          className="btn btn-contact d-inline-block  btn-primary px-lg-5 my-1 px-md-3"
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="list-block-item">
                        <Link
                          to="/"
                          className="btn btn-offer d-inline-block btn-primary ml-n1 my-1 px-lg-4 px-md-3"
                        >
                          Make an offer
                        </Link>
                      </li>
                      <li className="list-block-item">
                        <Link
                          to="#"
                          className="btn btn-offer d-inline-block btn-danger ml-n1 my-1 px-lg-4 px-md-3"
                          onClick={handleModalVisible}
                        >
                          Delete Ad
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </LayoutWithoutBanner>
  );
};

export default AdDetails;
