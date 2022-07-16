import { useState, useEffect } from "react";
import Searcher from "./Searcher";
import { Link } from "react-router-dom";
import { getTags } from "../../api/service";
import { useTranslation } from "react-i18next";

const HeaderPage = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const tags = await getTags();
      setTags(tags);
    };
    execute();
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <section className="hero-area bg-1 text-center overly">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-block">
              <h1>{t("banner.buyAndSell")}</h1>
              <p>{t("banner.subtitle")}</p>
              <div className="short-popular-category-list text-center">
                <h2>{t("banner.popular_category")}</h2>
                <ul className="list-inline">
                  {tags.map((tag, index) => (
                    <li className="list-inline-item" key={index}>
                      <Link to="/">
                        <i className={tag.icon}></i> {tag.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Searcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderPage;
