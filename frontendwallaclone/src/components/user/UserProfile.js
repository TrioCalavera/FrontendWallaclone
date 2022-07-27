import { useState, useEffect } from "react";
import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import UserGray from "../../images/user-gray.png";
import Spinner from "../elements/spinner/Spinner";
import { getMe } from "./service";
import { useTranslation } from "react-i18next";
import EditProfile from "./EditProfile";
import AdvertsProfile from "./AdvertsProfile";
import { Link } from "react-router-dom";

const UserProfile = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});  
  const { t } = useTranslation();

  const [AdvertsVisible, setAdvertsVisible] = useState(false);
  const handleAdvertsVisible = () => setAdvertsVisible(true);
  const handleAdvertsHidden = () => setAdvertsVisible(false);

  useEffect(() => {
    const execute = async () => {
      setIsLoading(true);
      const user = await getMe();      
      setUser(user.result);
      setIsLoading(false);
    };
    execute();
    return () => [];
  }, []); 
  
  return (
    <LayoutWithoutBanner>
      <section className="user-profile section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-3 offset-lg-0">
              <div className="sidebar">
                {/* <!-- User Widget --> */}
                <div className="widget user">
                  {/* <!-- User Image --> */}
                  <div className="image d-flex justify-content-center">
                    <img src={UserGray} alt="" />
                  </div>
                  {/* <!-- User Name --> */}
                  <h5 className="text-center">{user.name}</h5>
                </div>
                {/* <!-- Dashboard Links --> */}
                <div className="widget dashboard-links">
                  <ul>
                    <li className="my-1 block">{t("users.userName")}: {user.name}</li>
                    <li className="my-1 block">{t("users.role")}: {user.role}</li>
                    <li className="my-1 block">{t("users.email")}: {user.email}</li>
                    <li className="my-1 block"><Link to='/user-profile' onClick={handleAdvertsVisible}>{t("users.ownerAds")}</Link></li>
                    <li className="my-1 block"><Link to='/user-profile' onClick={handleAdvertsHidden}>{t("users.edit")}</Link></li>
                  </ul>
                </div>                
              </div>
            </div>
           {!AdvertsVisible ? (<EditProfile/>) : (<AdvertsProfile/>)} 
          </div>
        </div>
      </section>
      {isLoading && <Spinner />}
    </LayoutWithoutBanner>
  );
};

export default UserProfile;
