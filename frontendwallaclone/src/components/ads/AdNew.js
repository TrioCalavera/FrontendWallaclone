import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
const AdNew = () => {
  return (
    <LayoutWithoutBanner>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us-content p-4">
                <h5>New Advert</h5>
                <h1 className="pt-3">Hello, what's on your mind?</h1>
                <p className="pt-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  elit dolor, blandit vel euismod ac, lentesque et dolor. Ut id
                  tempus ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <form action="#">
                <fieldset className="p-4">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 py-2">
                        <input
                          type="text"
                          placeholder="Name *"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-lg-6 pt-2">
                        <input
                          type="text"
                          placeholder="Price *"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <select name="" id="" className="form-control w-100">
                    <option value="1">Select Category</option>
                    <option value="1">Work</option>
                    <option value="1">Lifestyle</option>
                    <option value="1">Mobile</option>
                    <option value="1">Motor</option>
                    <option value="1">IT</option>
                  </select>
                  <div className="form-group col-lg-12 pt-4">
                    <div className="choose-file">
                      <input
                        type="file"
                        className="form-control-file mt-2 pt-1"
                        id="input-file"
                      />
                    </div>
                  </div>
                  <textarea
                    name="description"
                    id=""
                    placeholder="Description *"
                    className="border w-100 p-3 mt-3 mt-lg-4"
                  ></textarea>
                  <div className="btn-grounp">
                    <button
                      type="submit"
                      className="btn btn-primary mt-2 float-right"
                    >
                      SUBMIT
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayoutWithoutBanner>
  );
};

export default AdNew;
