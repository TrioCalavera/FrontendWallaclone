import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import { useState, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../elements/spinner/Spinner";
import { register } from "./service";

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email, name, password } = credentials;

  const handleChange = useCallback((event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await register(credentials).then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }).catch(err =>
        window.alert(err.error));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log("error", error);
    }
  };

  const buttonDisabled = useMemo(() => {
    return !email || !name || !password || isLoading;
  }, [email, name, password, isLoading]);

  return (
    <LayoutWithoutBanner>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border border">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form action="#" onSubmit={handleSubmit}>
                  <fieldset className="p-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="border p-3 w-100 my-2"
                      required
                      value={email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className="border p-3 w-100 my-2"
                      required
                      value={name}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      className="border p-3 w-100 my-2"
                      required
                      value={password}
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="btn py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3"
                      disabled={buttonDisabled}
                    >
                      Register Now
                    </button>
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
};

export default RegisterPage;
