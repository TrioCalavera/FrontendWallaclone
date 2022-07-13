import client, { setAuthorizationHeader, removeAuthorizationHeader} from "../../api/client";
import storage from "../../utils/storage";

const adsBaseUrl = "/api/v1";

export const login = ({ remember, ...credentials }) => {
  const url = `${adsBaseUrl}/authentication`;
  return client.post(url, credentials)
  .then(({token}) => {
    setAuthorizationHeader(token);  
    return token;  
  })
  .then(token => {
    storage.remove('auth');
    if (remember) {
      storage.set('auth', token);
    }
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
  });
};