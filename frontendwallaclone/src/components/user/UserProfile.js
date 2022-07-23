import { useState, useEffect } from "react";
import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import UserGray from "../../images/user-gray.png";
import Spinner from "../elements/spinner/Spinner";
import { getMe } from "./service";
import { useTranslation } from "react-i18next";



const UserProfile = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    const execute = async () => {
      setIsLoading(true);
      const user = await getMe();      
      setUser(user.result);
      setIsLoading(false);
    };
    execute();
    return () => {};
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-9 offset-lg-0">
              {/* <!-- Edit Profile Welcome Text --> */}
              <div className="widget welcome-message">
                <h2>{t("users.edit")}</h2>
                <p>
                  {t("users.text")}
                </p>
              </div>
              {/* <!-- Edit Personal Info --> */}
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="widget personal-info">
                    <h3 className="widget-header user">
                      {t("users.personal")}
                    </h3>
                    <form action="#">
                      {/* <!-- First Name --> */}
                      <div className="form-group">
                        <label htmlFor="first-name">{t("users.name")}</label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                        />
                      </div>
                      {/* <!-- Last Name --> */}
                      <div className="form-group">
                        <label htmlFor="last-name">{t("users.last")}</label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                        />
                      </div>
                      {/* <!-- File chooser --> */}
                      <div className="form-group choose-file d-inline-flex">
                        <i className="fa fa-user text-center px-3"></i>
                        <input
                          type="file"
                          className="form-control-file mt-2 pt-1"
                          id="input-file"
                        />
                      </div>
                      {/* <!-- Comunity Name --> */}
                      <div className="form-group">
                        <label htmlFor="comunity-name">{t("users.comunity")}</label>
                        <input
                          type="text"
                          className="form-control"
                          id="comunity-name"
                        />
                      </div>
                      {/* <!-- Checkbox --> */}
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          htmlFor="hide-profile"
                        >
                          <input
                            className="form-check-input mt-1"
                            type="checkbox"
                            value=""
                            id="hide-profile"
                          />
                          {t("users.hide")}
                        </label>
                      </div>
                      {/* <!-- Zip Code --> */}
                      <div className="form-group">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip-code"
                        />
                      </div>
                      {/* <!-- Submit button --> */}
                      <button className="btn btn-transparent">
                        {t("users.save")}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  {/* <!-- Change Password --> */}
                  <div className="widget change-password">
                    <h3 className="widget-header user">{t("users.password")}</h3>
                    <form action="#">
                      {/* <!-- Current Password --> */}
                      <div className="form-group">
                        <label htmlFor="current-password">
                          {t("users.current")}
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="current-password"
                        />
                      </div>
                      {/* <!-- New Password --> */}
                      <div className="form-group">
                        <label htmlFor="new-password">{t("users.new")}</label>
                        <input
                          type="password"
                          className="form-control"
                          id="new-password"
                        />
                      </div>
                      {/* <!-- Confirm New Password --> */}
                      <div className="form-group">
                        <label htmlFor="confirm-password">
                          {t("users.confirm")}
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirm-password"
                        />
                      </div>
                      {/* <!-- Submit Button --> */}
                      <button className="btn btn-transparent">
                        {t("users.change")}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  {/* <!-- Change Email Address --> */}
                  <div className="widget change-email mb-0">
                    <h3 className="widget-header user">{t("users.editEmail")}</h3>
                    <form action="#">
                      {/* <!-- Current Password --> */}
                      <div className="form-group">
                        <label htmlFor="current-email">{t("users.currentEmail")}</label>
                        <input
                          type="email"
                          className="form-control"
                          id="current-email"
                        />
                      </div>
                      {/* <!-- New email --> */}
                      <div className="form-group">
                        <label htmlFor="new-email">{t("users.newEmail")}</label>
                        <input
                          type="email"
                          className="form-control"
                          id="new-email"
                        />
                      </div>
                      {/* <!-- Submit Button --> */}
                      <button className="btn btn-transparent">
                        {t("users.changeEmail")}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Spinner />}
    </LayoutWithoutBanner>
  );
};

export default UserProfile;
