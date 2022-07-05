import client, { setAuthorizationHeader, removeAuthorizationHeader} from "../../api/client";
import storage from "../../utils/storage";

const adsBaseUrl = "";

export const login = ({ remember, ...credentials }) => {
  const url = `${adsBaseUrl}/authentication`;
  return client.post(url, credentials).then(({token}) => {
    setAuthorizationHeader(token);
    storage.set("auth",token);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
  });
};