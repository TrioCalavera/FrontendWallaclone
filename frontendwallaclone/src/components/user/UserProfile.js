import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import UserGray from "../../images/user-gray.png";
const UserProfile = () => {
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
                  <h5 className="text-center">Pepe Bigote</h5>
                </div>
                {/* <!-- Dashboard Links --> */}
                <div className="widget dashboard-links">
                  <ul>
                    <li className="my-1 block">Podemos</li>
                    <li className="my-1 block">Poner</li>
                    <li className="my-1 block">Los datos que</li>
                    <li className="my-1 block">Tengamos del user</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-9 offset-lg-0">
              {/* <!-- Edit Profile Welcome Text --> */}
              <div className="widget welcome-message">
                <h2>Edit profile</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
              {/* <!-- Edit Personal Info --> */}
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="widget personal-info">
                    <h3 className="widget-header user">
                      Edit Personal Information
                    </h3>
                    <form action="#">
                      {/* <!-- First Name --> */}
                      <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                        />
                      </div>
                      {/* <!-- Last Name --> */}
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
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
                        <label htmlFor="comunity-name">Comunity Name</label>
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
                          Hide Profile from Public/Comunity
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
                        Save My Changes
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  {/* <!-- Change Password --> */}
                  <div className="widget change-password">
                    <h3 className="widget-header user">Edit Password</h3>
                    <form action="#">
                      {/* <!-- Current Password --> */}
                      <div className="form-group">
                        <label htmlFor="current-password">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="current-password"
                        />
                      </div>
                      {/* <!-- New Password --> */}
                      <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="new-password"
                        />
                      </div>
                      {/* <!-- Confirm New Password --> */}
                      <div className="form-group">
                        <label htmlFor="confirm-password">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirm-password"
                        />
                      </div>
                      {/* <!-- Submit Button --> */}
                      <button className="btn btn-transparent">
                        Change Password
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  {/* <!-- Change Email Address --> */}
                  <div className="widget change-email mb-0">
                    <h3 className="widget-header user">Edit Email Address</h3>
                    <form action="#">
                      {/* <!-- Current Password --> */}
                      <div className="form-group">
                        <label htmlFor="current-email">Current Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="current-email"
                        />
                      </div>
                      {/* <!-- New email --> */}
                      <div className="form-group">
                        <label htmlFor="new-email">New email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="new-email"
                        />
                      </div>
                      {/* <!-- Submit Button --> */}
                      <button className="btn btn-transparent">
                        Change email
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWithoutBanner>
  );
};

export default UserProfile;
