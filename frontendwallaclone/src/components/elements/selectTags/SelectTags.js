import Select from "react-select";
import { useState, useEffect } from "react";
import { getTags } from "../../../api/service";

const SelectTags = () => {
  const [tagsAd, setTagsAd] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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

  return <Select isMulti options={tagsAd} />;
};

export default SelectTags;
