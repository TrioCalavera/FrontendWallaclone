const Subfooter = () => {
  return (
    <footer className="footer-bottom">
      {/* <!-- Container Start --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12">
            {/* <!-- Copyright --> */}
            <div className="copyright">
              <p>
                Copyright © {new Date().getFullYear()}. All Rights Reserved,
                theme by
                <a
                  className="text-primary"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp; Cuarteto Calavera
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            {/* <!-- Social Icons --> */}
            <ul className="social-media-icons text-right">
              <li>
                <a
                  className="fa fa-facebook"
                  href="https://www.facebook.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-twitter"
                  href="https://www.twitter.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fa fa-pinterest-p"
                  href="https://www.pinterest.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <a className="fa fa-vimeo" href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Subfooter;
