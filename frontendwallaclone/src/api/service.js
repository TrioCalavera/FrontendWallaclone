import client from "./client";

const adsBaseUrl = "api/v1";

// Lastes Ads ordenados por fecha de creación
export const getLatestAds = () => {
  const url = `${adsBaseUrl}/adverts?sort=create`;
  return client.get(url);
};

// Trae 1 anuncio, el del ID
export const getAd = (adId) => {
  const url = `${adsBaseUrl}/adverts/${adId}`;
  return client.get(url);
};

// Tags
export const getTags = () => {
  const url = `${adsBaseUrl}/tags`;
  return client.get(url);
};

// Create Ads
export const setAdverts = (data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const url = `${adsBaseUrl}/adverts`;
  return client.post(url, data, config);
};

// Delete anuncio :id
export const deleteAdvert = (adId) => {
  const url = `${adsBaseUrl}/adverts/${adId}`;
  return client.delete(url);
};
