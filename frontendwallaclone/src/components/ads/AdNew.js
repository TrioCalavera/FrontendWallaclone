import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { setAdverts, getTags } from "../../api/service";
import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import Select from "react-select";
import tools from "../../utils/tools";
// import FileUploader from "../elements/fileInput/FileInput";

const AdNew = () => {
  const { t, i18n } = useTranslation();

  //State petición Tags
  const [tagsAd, setTagsAd] = useState([]);
  //State nutrir select tags
  const [selectedOptions, setSelectedOptions] = useState();
  //State Post New Ads
  const [createAd, setCreateAd] = useState(null);

  //States formulario
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [sale, setSale] = useState(false);

  //Maneja input type file
  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  //Manejar nutrir datos al select, los transforma y se los manda a los tags
  const handleSelect = (data) => {
    setSelectedOptions(data);
    const tagsValue = data.map((tag) => tag.value);
    setTags(tagsValue);
  };

  //Petición de tags y completa la información necesaria para tener Obj para el select
  useEffect(() => {
    const execute = async () => {
      let tagsAd = await getTags();
      let tagsNameLabel = tagsAd.map((tag) => ({
        value: tag.name,
        label: tools.capitalizeFirstLetter(tag.name),
      }));
      tagsAd = tagsNameLabel;
      setTagsAd(tagsAd);
    };
    execute();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("file", image);
      formData.append("sale", sale);
      formData.append("tags", JSON.stringify(tags));

      console.log(Object.fromEntries(formData));
      // resetError();
      // setIsLoading(true);
      // const createAd = await setAdverts({ name, sale, price, tags });
      // setCreateAd(createAd);
      // setIsLoading(false);
    } catch (error) {
      // setError(error);
      // setIsLoading(false);
      // console.log(error);
    }
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
              <form action="#" onSubmit={handleSubmit}>
                <fieldset className="p-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <input
                          type="text"
                          placeholder={t("newadvert.name")}
                          className="form-control"
                          required
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          name="name"
                        />
                      </div>
                      <div className="col-lg-6 pt-2">
                        <input
                          type="text"
                          placeholder={t("newadvert.price")}
                          className="form-control"
                          required
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}
                          name="price"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-6 text-center">
                        <label>
                          <input
                            type="radio"
                            name="sale"
                            value="false"
                            className="mr-2"
                            required
                            onChange={(e) => setSale(e.target.value)}
                          />
                          {t("newadvert.buy")}
                        </label>
                      </div>
                      <div className="col-6 text-center">
                        <label>
                          <input
                            type="radio"
                            name="sale"
                            value="true"
                            className="mr-2"
                            required
                            onChange={(e) => setSale(e.target.value)}
                          />
                          {t("newadvert.sale")}
                        </label>
                      </div>
                    </div>
                  </div>

                  <Select
                    placeholder={t("newadvert.select_category")}
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                    options={tagsAd}
                    name={tags}
                  />

                  <div className="form-group col-lg-12 pt-4">
                    <div className="choose-file">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  <textarea
                    name="description"
                    id=""
                    placeholder={t("newadvert.description")}
                    className="border w-100 p-3 mt-3 mt-lg-4"
                    onChange={(e) => setDescription(e.target.value)}
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
