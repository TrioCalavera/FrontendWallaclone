import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "./service";
import Spinner from "../elements/spinner/Spinner";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email, password, remember } = credentials;

  const handleChange = useCallback((event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }, []);

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials)
      .then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }).catch(err =>
        window.alert(err.error));
      setIsLoading(false);
      onLogin();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const buttonDisabled = useMemo(() => {
    return !email || !password || isLoading;
  }, [email, password, isLoading]);

  return (
    <LayoutWithoutBanner>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border">
                <h3 className="bg-gray p-4">Login Now</h3>
                <form action="#" onSubmit={handleSubmit}>
                  <fieldset className="p-4">
                    <input
                      type="text"
                      name="email"
                      placeholder="Username"
                      className="border p-3 w-100 my-2"
                      value={email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border p-3 w-100 my-2"
                      value={password}
                      onChange={handleChange}
                    />
                    <div className="loggedin-forgot">
                      <input type="checkbox" 
                      id="keep-me-logged-in"
                      name="remember"
                      checked={remember}
                      onChange={handleChange}/>
                      <label
                        htmlFor="keep-me-logged-in"
                        className="pt-3 pb-2 ml-2"
                      >
                        Keep me logged in
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3"                      
                      disabled={buttonDisabled}
                    >
                      Log in
                    </button>
                    {/* <Link to="/login" className="mt-3 d-block text-primary">
                      Forget Password?
                    </Link> */}
                    <Link className="mt-3 d-block text-primary" to="/register">
                      Register Now
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Spinner />}
    </LayoutWithoutBanner>
  );
}

export default LoginPage;
