import LayoutWithoutBanner from "../layout/LayoutWithoutBanner";
import { Link } from "react-router-dom";
import AdDetailsCss from "./css/adDetails.css";

import Product1 from "../../images/products-1.jpg";
import userThumb from "../../images/user-gray.png";

const AdDetails = () => {
  return (
    <LayoutWithoutBanner>
      <section className="section bg-gray">
        {/* <!-- Container Start --> */}
        <div className="container">
          <div className="row">
            {/* <!-- Left sidebar --> */}
            <div className="col-md-8">
              <div className="product-details">
                <h1 className="product-title">
                  Hp Dual Core 2gb Ram-Slim Laptop Available In Very Low Price
                </h1>
                <div className="product-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-user-o"></i> By{" "}
                      <strong>Pepe Bigote</strong>
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-folder-open-o"></i> Category{" "}
                      <strong>Electronics</strong>
                    </li>
                  </ul>
                </div>
                {/* <!-- product slider --> */}
                <div className="product-slider">
                  <div className="product-slider-item" data-image={Product1}>
                    <img
                      className="img-fluid w-100"
                      src={Product1}
                      alt="product-img"
                    />
                  </div>
                </div>
                {/* <!-- product slider --> */}
                <div className="content compess">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h3 className="tab-title">Product Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officia laudantium beatae quod perspiciatis, neque
                        dolores eos rerum, ipsa iste cum culpa numquam amet
                        provident eveniet pariatur, sunt repellendus quas
                        voluptate dolor cumque autem molestias. Ab quod quaerat
                        molestias culpa eius, perferendis facere vitae commodi
                        maxime qui numquam ex voluptatem voluptate, fuga sequi,
                        quasi! Accusantium eligendi vitae unde iure officia amet
                        molestiae velit assumenda, quidem beatae explicabo
                        dolore laboriosam mollitia quod eos, eaque voluptas enim
                        fuga laborum, error provident labore nesciunt ad. Libero
                        reiciendis necessitatibus voluptates ab excepturi rem
                        non, nostrum aut aperiam? Itaque, aut. Quas nulla
                        perferendis neque eveniet ullam?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar">
                <div className="widget price text-center">
                  <h4>Price</h4>
                  <p>$230</p>
                </div>
                {/* <!-- User Profile widget --> */}
                <div className="widget user text-center">
                  <img
                    className="rounded-circle img-fluid mb-5 px-5"
                    src={userThumb}
                    alt=""
                  />
                  <h4>
                    <Link to="/">Jonathon Andrew</Link>
                  </h4>
                  <p className="member-time">Member Since Jun 27, 2017</p>
                  <Link to="/">See all ads</Link>
                  <ul className="list-inline mt-20">
                    <li className="list-inline-item">
                      <Link
                        to="/"
                        className="btn btn-contact d-inline-block  btn-primary px-lg-5 my-1 px-md-3"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="/"
                        className="btn btn-offer d-inline-block btn-primary ml-n1 my-1 px-lg-4 px-md-3"
                      >
                        Make an offer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </section>
    </LayoutWithoutBanner>
  );
};

export default AdDetails;
