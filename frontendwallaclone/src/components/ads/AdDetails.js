import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import "./css/adDetails.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAd } from "../../api/service";
import { getMe, getOwner } from "../user/service";
import Modal from "../elements/modal/Modal";
import NotFound from "../layout/NotFound";
import Spinner from "../elements/spinner/Spinner";
import { useAuth } from "../context";
import { ContactUs } from "../elements/ContactUs/ContactUs";

import noImage from "../../images/no-image.jpg";
import userThumb from "../../images/user-gray.png";

const AdDetails = () => {
  const { isLogged } = useAuth();

  const [user, setUser] = useState(null);

  const [adDetail, setAdDetail] = useState(null);

  //Revisar pq lo tengo que hacer así... Object.values
  const adId = Object.values(useParams());

  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const handleModalVisible = () => setModal(true);
  const handleModalHidden = () => setModal(false);

  useEffect(() => {
    const execute = async () => {
      setIsLoading(true);
      await getAd(adId[0]).then((adDetail) => {
        setAdDetail(adDetail.result);
      });
      isLogged &&
        (await getMe()
          .then((user) => setUser(user.result))
          .catch((error) => console.log(error)));
      setIsLoading(false);
    };
    execute();
  }, []);

  return (
    <LayoutWithoutBanner>
      {modal && <Modal handleModalHidden={handleModalHidden} />}

      {isLoading ? (
        <Spinner />
      ) : adDetail ? (
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
                        <strong className="label-color">Nombre</strong>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-folder-open-o"></i> Category{" "}
                        {/* Parsear anuncios creados del front */}
                        {/* {JSON.parse(adDetail.tags[0]).map((tag, index) => (
                          <strong className="mr-2 label-color text-capitalize" key={index}>
                            {tag}
                          </strong>
                        ))} */}
                        {/* Anuncios creados del Back */}
                        {adDetail.tags.map((tag, index) => (
                          <strong
                            className="mr-2 label-color text-capitalize"
                            key={index}
                          >
                            {tag}
                          </strong>
                        ))}
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-user-o"></i> Type{" "}
                        <strong className="label-color">
                          {adDetail.sale ? "Sale" : "Buy"}
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="product-slider">
                    <div className="product-slider-item p-4 mx-auto">
                      <img
                        className="img-fluid w-100"
                        src={
                          process.env.REACT_APP_API_BASE_URL + adDetail.image ||
                          noImage
                        }
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
                      <Link to="/">Nombre</Link>
                    </h4>
                    <p className="member-time">Member Since Jun 27, 2017</p>
                    <Link to="/">See all ads</Link>
                    <ul className="list-inline mt-20">
                      {user?._id !== adDetail.user && (
                        <li className="list-block-item">
                          <ContactUs />
                        </li>
                      )}
                      {user?._id === adDetail.user && (
                        <li className="list-block-item">
                          <Link
                            to="#"
                            className="btn btn-offer d-inline-block btn-danger ml-n1 my-1 px-lg-4 px-md-3"
                            onClick={handleModalVisible}
                          >
                            Delete Ad
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </LayoutWithoutBanner>
  );
};

export default AdDetails;
