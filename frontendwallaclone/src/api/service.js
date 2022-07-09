import client from "./client";

// CUANDO BACK TENGA LAS RUTAS ESPECIFICARLAS
const adsBaseUrl = "/api";

// Lastes Ads
export const getLatestAds = () => {
  const url = `/adverts`;
  return client.get(url);
};

// Tags
export const getTags = () => {
  const url = `${adsBaseUrl}/v1/adverts/tags`;
  return client.get(url);
};

// Create Ads
export const setAdverts = () => {
  const url = `${adsBaseUrl}/v1/adverts`;
  return client.post(url);
};

// Delete

// Detail
