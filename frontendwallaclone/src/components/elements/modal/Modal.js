import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteAdvert } from "../../../api/service";
import Spinner from "../spinner/Spinner";

import "./modal.css";

const Modal = ({ handleModalHidden }) => {
  let navigate = useNavigate();

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
        <p>Are you sure you want to delete it?</p>
        <div className="text-center">
          <button
            className="btn btn-danger px-lg-4 px-md-3 mb-2"
            onClick={handleDeleteAd}
          >
            Delete
          </button>
          <button
            className="btn btn-primary px-lg-4 px-md-3 mb-2"
            onClick={handleModalHidden}
          >
            Close Modal
          </button>
        </div>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Modal;
