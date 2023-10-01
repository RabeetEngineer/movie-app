import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer footer-dark bg-dark text-white">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-3">
                <img
                  src="/images/logo.png"
                  alt=""
                  style={{ widows: "auto", height: "80px" }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-4">
                <a href="" target="_blank">
                  <i
                    class="fa fa-facebook-f text-white me-4"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i
                    class="fa fa-linkedin text-white me-4"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i
                    class="fa fa-youtube text-white me-4"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="" target="_blank">
                  <i
                    class="fa fa-instagram text-white me-4"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
               <div className="footer-links d-flex flex-column align-items-center mt-3 mb-5">
                <a href=""><p>Get the IMDB App</p></a>
                <a href=""><p>Help</p></a>
                <a href=""><p>Box Office Mojo</p></a>
                <a href=""><p>Privacy Policy</p></a>
                <a href=""><p>Conditions of Use</p></a>

               </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-center text-white mt-3 mb-5">
                <h1>Top Movies</h1>
                <p >Movie 1</p>
                <p>Movie 2</p>
                <p>Movie 3</p>
                <p>Movie 4</p>
                <p>Movie 5</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
