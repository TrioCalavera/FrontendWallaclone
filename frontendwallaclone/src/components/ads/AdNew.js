import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getTags, setAdverts } from "../../api/service";
import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import SelectTags from "../elements/selectTags/SelectTags";

const AdNew = () => {
  const { t, i18n } = useTranslation();

  const [credentials, setCredentials] = useState({
    name: "",
    price: "",
    photo: "",
    tags: [],
    sale: false,
  });
  const { name, sale, price, tags, photo } = credentials;

  const handleChange = (event) => {
    console.log("event.target.type", event.target.type);
    setCredentials((credentials) => ({
      ...credentials,
      // [event.target.name]: event.target.type === "radio" ? event.target.checked : event.target.value,
      [event.target.name]:
        event.target.type === "radio"
          ? event.target.checked
          : event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    }));
  };

  return (
    <LayoutWithoutBanner>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us-content p-4">
                <h5>{t("newadvert.new_advert")}</h5>
                <h1 className="pt-3">{t("newadvert.on_your_mind")}</h1>
                <p className="pt-3 pb-5">{t("newadvert.subtitle")}</p>
              </div>
            </div>
            <div className="col-md-6">
              <form action="#">
                <fieldset className="p-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <input
                          type="text"
                          placeholder={t("newadvert.name")}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-lg-6 pt-2">
                        <input
                          type="text"
                          placeholder={t("newadvert.price")}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <SelectTags />
                  <div className="form-group col-lg-12 pt-4">
                    <div className="choose-file">
                      <input
                        type="file"
                        className="form-control-file mt-2 pt-1"
                        id="input-file"
                      />
                    </div>
                  </div>
                  <textarea
                    name="description"
                    id=""
                    placeholder={t("newadvert.description")}
                    className="border w-100 p-3 mt-3 mt-lg-4"
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
            </div>
          </div>
        </div>
      </section>
    </LayoutWithoutBanner>
  );
};

export default AdNew;
