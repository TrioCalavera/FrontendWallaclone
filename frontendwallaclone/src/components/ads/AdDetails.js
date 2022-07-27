import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import "./css/adDetails.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAd, getUserAd } from "../../api/service";
import { getMe } from "../user/service";
import Modal from "../elements/modal/Modal";
import NotFound from "../layout/NotFound";
import Spinner from "../elements/spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context";
import { ContactUs } from "../elements/ContactUs/ContactUs";

import noImage from "../../images/no-image.jpg";
import userThumb from "../../images/user-gray.png";

const AdDetails = ({isLogged}) => {
  const [user, setUser] = useState(null);

  const [adDetail, setAdDetail] = useState(null);

  const { t } = useTranslation();

  //Revisar pq lo tengo que hacer así... Object.values
  const adId = Object.values(useParams());

  const [isLoading, setIsLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const handleModalVisible = () => setModal(true);
  const handleModalHidden = () => setModal(false);

  useEffect(() => {
    const execute = async () => {
      setIsLoading(true);
      const adDetail = await getAd(adId[0]);
      const userAd = await getUserAd(adDetail.result.user);
      adDetail.result.user = {
        name: userAd.result.name,
        _id: userAd.result._id,
      };
      setAdDetail(adDetail.result);
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

      {!adDetail ? (
        <NotFound />
      ) : isLoading ? (
        <Spinner />
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
                        <strong className="label-color">
                          {adDetail.user.name}
                        </strong>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-folder-open-o"></i>{" "}
                        {t("details.category")}{" "}
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
                        <i className="fa fa-user-o"></i> {t("details.type")}{" "}
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
                          adDetail.image !== undefined
                            ? process.env.REACT_APP_API_BASE_URL +
                              adDetail.image
                            : noImage
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
                        <h3 className="tab-title">
                          {t("details.description")}
                        </h3>
                        <p>{adDetail.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sidebar">
                  <div className="widget price text-center">
                    <h4>{t("details.price")}</h4>
                    <p>{adDetail.price} €</p>
                  </div>
                  <div className="widget user text-center">
                    <img
                      className="rounded-circle img-fluid mb-5 px-5"
                      src={userThumb}
                      alt=""
                    />
                    <h4>
                      <Link to="/">{adDetail.user.name}</Link>
                    </h4>
                    <p className="member-time">
                      {t("details.memberSince")} Jun 27, 2017
                    </p>
                    <Link to="/">{t("details.see")}</Link>
                    <ul className="list-inline mt-20">
                      {user && user._id === adDetail.user._id ? (
                        <li className="list-block-item">
                          <Link
                            to="#"
                            className="btn btn-offer d-inline-block btn-danger ml-n1 my-1 px-lg-4 px-md-3"
                            onClick={handleModalVisible}
                          >
                            {t("details.delete")}
                          </Link>
                        </li>
                      ) : (
                        <li className="list-block-item">
                          <ContactUs info={adDetail} isLogged={isLogged} />
                        </li>
                      )}
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
