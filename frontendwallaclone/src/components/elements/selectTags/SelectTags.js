import Select from "react-select";
import { useState, useEffect } from "react";
import { getTags } from "../../../api/service";
import { useTranslation } from "react-i18next";

const SelectTags = () => {
  const { t } = useTranslation();
  const [tagsAd, setTagsAd] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSelect = (data) => {
    setSelectedOptions(data);
  };

  useEffect(() => {
    const execute = async () => {
      let tagsAd = await getTags();
      let tagsNameLabel = tagsAd.map((tag) => ({
        value: tag.name,
        label: capitalizeFirstLetter(tag.name),
      }));
      tagsAd = tagsNameLabel;
      setTagsAd(tagsAd);
    };
    execute();
  }, []);

  return (
    <Select
      placeholder={t("newadvert.select_category")}
      value={selectedOptions}
      onChange={handleSelect}
      isSearchable={true}
      isMulti
      options={tagsAd}
    />
  );
};

export default SelectTags;
