import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";


export const ContactUs = ({info}) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const form = useRef();

  if(!isLogged){
    info.user.name = "****";
    info.user.email = "****"
  }
  // Da error usar el .env ¿?
  const SERVICE_ID = process.env.CONTACT_US_YOUR_SERVICE_ID;
  const TEMPLATE_ID = process.env.CONTACT_US_YOUR_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.CONTACT_US_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    if(!isLogged){
      navigate('/login',{ replace: true });
    }else{
      emailjs
        .sendForm(
          "service_d5rd4no",
          "template_0jgn9ss",
          form.current,
          "Kx3a-jlIIeuC0lw8P"
        )
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
            <div className="col-lg-12 pt-2">
              <input
                type="email"
                name="email"
                placeholder={info.user.email}
                className="form-control"
                required
                disabled
              />
            </div>
          </div>
        </div>
        <textarea
          name="mensaje"
          placeholder={t("details.offers")}
          className="border w-100 p-3 mt-3 mt-lg-4"
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
