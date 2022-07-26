import React, { useRef, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { sendEmailAd } from "../../../api/service";

export const ContactUs = ({info}) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const form = useRef();
  const [content, setContent] = useState("");

  if(!isLogged)
    info.user.name = "****";
    
  
  const handleChange = useCallback((event) => {
    setContent(event.target.value);
  }, []);

  const sendEmail = async(e) => {
    e.preventDefault();
    if(!isLogged){
      navigate('/login',{ replace: true });
    }else{
      const data = {
        "advert":info._id,
        "receiverId":info.user._id,
        "message":content
      };      
      sendEmailAd(data)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <fieldset className="p-4">
        <h4>{t("details.make_offer")}</h4>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-12 py-2">
              <input
                type="text"
                name="nombre"
                placeholder={info.user.name}
                className="form-control"
                disabled
              />
            </div>
          </div>
        </div>
        <textarea
          name="mensaje"
          placeholder={t("details.offers")}
          className="border w-100 p-3 mt-3 mt-lg-4"
          value={content}
          onChange={handleChange}
          required
        ></textarea>
        <div className="btn-grounp">
          <button
            type="submit"
            className="btn btn-primary mt-2 float-right uppercase"
          >
            {t("newadvert.submit")}
          </button>
        </div>
      </fieldset>
    </form>
  );
};
