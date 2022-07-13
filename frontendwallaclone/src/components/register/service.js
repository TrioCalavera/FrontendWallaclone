import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

const adsBaseUrl = "/api/v1";

export const register = ({ ...credentials }) => {
  const url = `${adsBaseUrl}/users`;
  return client.post(url, credentials);
};
