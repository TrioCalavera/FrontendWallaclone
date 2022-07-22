import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getCustomAds, getTags } from "../../api/service";
import Select from "react-select";
import tools from "../../utils/tools";

const Searcher = () => {
  const { t } = useTranslation();

  //State petición Tags
  const [tagsAd, setTagsAd] = useState([]);

  const [tags, setTags] = useState([]);

  //State nutrir select tags
  const [selectedOptions, setSelectedOptions] = useState();

  const [name, setName] = useState("");
  // const [price, setPrice] = useState("");

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
    const formData = new FormData();

    //Validaciones Searcher
    name && formData.append("name", name);
    tags.length && formData.append("tags", tags);
    console.log(Object.fromEntries(formData));

    let query = new URLSearchParams(formData);
    console.log(decodeURIComponent(query.toString()));

    try {
      const customAds = await getCustomAds(
        decodeURIComponent(query.toString())
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="advance-search">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 ">
            <form onSubmit={handleSubmit}>
              <div className="form-col">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control my-2 my-lg-1"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("searcher.looking_for")}
                  />
                </div>
                <div className="form-group col-md-12">
                  <Select
                    placeholder={t("newadvert.select_category")}
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                    options={tagsAd}
                    name={tags}
                    className="react-select__control react-select__value-container react-select__value-container"
                    classNamePrefix="react-select"
                  />
                </div>
                <div className="form-group col-md-2 align-self-center">
                  <button type="submit" className="btn btn-primary">
                    {t("searcher.search")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
