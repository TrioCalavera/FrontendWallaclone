import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteAdvert } from "../../../api/service";
import Spinner from "../spinner/Spinner";
import { useTranslation } from "react-i18next";

import "./modal.css";

const Modal = ({ handleModalHidden }) => {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const params = Object.values(useParams());
  //   const navigate = Navigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAd = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      handleModalHidden();
      await deleteAdvert(params[0]);
      setIsLoading(false);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      handleModalHidden();
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-confirm">
      <div className="modal-confirm__content">
        <p>{t("modal.estasSeguro")}</p>
        <div className="text-center">
          <button
            className="btn btn-danger px-lg-4 px-md-3 mb-2"
            onClick={handleDeleteAd}
          >
            {t("modal.delete")}
          </button>
          <button
            className="btn btn-primary px-lg-4 px-md-3 mb-2"
            onClick={handleModalHidden}
          >
            {t("modal.close")}
          </button>
        </div>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Modal;
