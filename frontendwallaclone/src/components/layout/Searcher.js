import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getCustomAds } from "../../api/service";

const Searcher = () => {
  const { t } = useTranslation();
  // const [customAds, setCustomAds] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const data = "?name=wii";
  // useEffect(() => {
  //   const execute = async () => {
  //     // setIsLoading(true);
  //     // const customAds = await getCustomAds(data);
  //     // setCustomAds(customAds.result);
  //     // console.log("customAds", customAds);
  //     // setIsLoading(false);
  //   };
  //   execute();
  //   return () => {};
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    console.log(Object.fromEntries(formData));

    let query = new URLSearchParams(formData);
    console.log(decodeURIComponent(query.toString()));

    try {
      // resetError();
      // setIsLoading(true);
      const customAds = await getCustomAds(
        decodeURIComponent(query.toString())
      );
      // setIsLoading(false);
    } catch (error) {
      // setError(error);
      // setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="advance-search">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 align-content-center">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    className="form-control my-2 my-lg-1"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("searcher.looking_for")}
                  />
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="text"
                    className="form-control my-2 my-lg-1"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="precios"
                  />
                </div>
                <div className="form-group col-md-3">
                  <select className="w-100 form-control mt-lg-1 mt-md-2">
                    <option>Category</option>
                    <option value="1">Top rated</option>
                    <option value="2">Lowest Price</option>
                    <option value="4">Highest Price</option>
                  </select>
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
