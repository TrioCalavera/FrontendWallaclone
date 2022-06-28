import Layout from "../layout/Layout";
const RegisterPage = () => {
  return (
    <Layout>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border border">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form action="#">
                  <fieldset className="p-4">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      placeholder="Password*"
                      className="border p-3 w-100 my-2"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password*"
                      className="border p-3 w-100 my-2"
                    />

                    <button
                      type="submit"
                      className="d-block mt-3 py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold"
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
    </Layout>
  );
};

export default RegisterPage;
