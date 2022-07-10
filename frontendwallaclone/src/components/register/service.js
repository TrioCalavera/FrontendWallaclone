import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

const adsBaseUrl = "";

export const register = ({ ...credentials }) => {
  const url = `${adsBaseUrl}/users`;
  return client.post(url, credentials);
};
