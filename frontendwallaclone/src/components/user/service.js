import client from "../../api/client";

const adsBaseUrl = "/api/v1";

export const getMe = () => {
  const url = `${adsBaseUrl}/users/me`;
  return client.get(url);
};

export const getOwner = (data) => {
  const url = `${adsBaseUrl}/users/${data}`;
  return client.get(url);
};
