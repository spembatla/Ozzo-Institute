import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="newsletter-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-6 bdr-right">
                  <div className="call-us">
                    <div className="phone-img">
                      <img src="https://weblordinstitute.com/assets/images/call-us.svg" />
                    </div>
                    <div className="con-text">
                      <h4>Call us</h4>
                      <h6>8422-014-356</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6">
                  <div className="call-us">
                    <div className="phone-img">
                      <img src="https://weblordinstitute.com/assets/images/email.svg" />
                    </div>
                    <div className="con-text">
                      <h4>Email us</h4>
                      <h6>ozzo@gmail.com</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <form>
                <div className="input-group form-group">
                  <input
                    type="text"
                    className="form-control bk"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required="required"
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button
                      class="btn btn-outline-secondary bt"
                      id="mc-submit"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="upper-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-content">
                <img
                  src="https://weblordinstitute.com/assets/images/footer-logo.png"
                  className="foot-logo"
                />
                <p className="mt-0">
                  Any successfull career starts with advance higher education.
                  At our university.You will have a deeper knowledge of the
                  subjects that will be perticularly useful when climbing the
                  career ladder.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-title">
                <h3>Our Courses</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      Commerce & Management
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      Science /Business Management
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      Engineering & Technology
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      PHD LAW
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      Paramedical Courses
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-chevron-circle-right"></i>
                      Teacher's Training Courses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-title">
                <h3>Contact Information</h3>
              </div>
              <div className="footer-content">
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  B-Wing, G-5, Sargam Apartment, Ramdas Nagar, Near Aditya
                  Hotel, Vasai(East), Palghar(MH), India 401208.
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i>Call Us: (+91)
                  8422-014-356
                </p>
                <p>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>Email Us:
                  Weblordinstitute@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="footer-social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="copyright-sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="cop-p">
                        <p>2024 Design By <a href="#">OZZO Pvt Ltd </a></p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="copy-link">
                        <ul>
                            <li><a href="#">Terms &amp; Condition </a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </footer>
  );
};
