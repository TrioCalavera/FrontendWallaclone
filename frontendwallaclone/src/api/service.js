import client from "./client";

// CUANDO BACK TENGA LAS RUTAS ESPECIFICARLAS
const adsBaseUrl = "api/v1";

// Lastes Ads
export const getLatestAds = () => {
  const url = `${adsBaseUrl}/adverts`;
  return client.get(url);
};

// Trae 1 anuncio, el del ID
export const getAd = (adId) => {
  const url = `${adsBaseUrl}/adverts/${adId}`;
  return client.get(url);
};

// Tags
export const getTags = () => {
  const url = `${adsBaseUrl}/adverts/tags`;
  return client.get(url);
};

// Create Ads
export const setAdverts = () => {
  const url = `${adsBaseUrl}/adverts`;
  return client.post(url);
};

// Delete anuncio :id
export const deleteAdvert = (adId) => {
  const url = `${adsBaseUrl}/adverts/${adId}`;
  return client.delete(url);
};

// Detail
