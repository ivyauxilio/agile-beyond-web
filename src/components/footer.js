import Logo from "./../assets/images/AgileBeyondLogo.png"
import { FaCheckDouble } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const BannerContactUs = () => {
  return (
    <>
    <footer className="w3l-footer-66">
      <section className="footer-inner-main">
        <div className="footer-hny-grids">
          <div className="container py-5">
            <div className="text-txt">
              {/* <div className="row newsletter-grids-footer">
                <div className="col-lg-6 newsletter-text pr-lg-5">
                  <h2 className="text-dark two">Newsletter</h2>
                  <p>
                    Sign up for our monthly newsletter to get the latest news.
                  </p>
                </div>
                <div className="col-lg-6 newsletter-right">
                  <form action="#" method="post" className="footer-newsletter">
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email.."
                    />

                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div> */}

              <div className="right-side">
                <div className="row sub-columns">
                  <div className="col-lg-4 col-md-6 sub-one-left pr-lg-4">
                    <a className="navbar-brand" href="#index.html">
                      <img
                        src={Logo}
                        alt="Agile Beyond Logo"
                        className="dark:invert footer-logo pb-5"
                         style={{height:'auto', width:'100%'}}
                      />
                    </a>
                  </div>
                  <div className="col-lg-5 col-md-6 sub-one-left">
                    <h6>Our Services</h6>
                    <div className="mid-footer-gd sub-two-right">
                      <ul>
                        <li>
                          <a href="/about">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> About
                          </a>
                        </li>
                        <li>
                          <a href="/business-process-outsourcing">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Business Process Outsourcing
                          </a>
                        </li>
                        <li>
                          <a href="/customer-integration-process">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Customer Integration Process
                          </a>
                        </li>
                        <li>
                          <a href="/pricing">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Pricing & Revenue Model
                          </a>
                        </li>
                        <li>
                          <a href="/about#whychoose">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Why Choose Agile Beyond
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/about#mission&vission">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Mission & Vision
                          </a>
                        </li>
                        <li>
                          <a href="/team">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Our Team
                          </a>
                        </li>
                        <li>
                          <a href="/news">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> News
                          </a>
                        </li>
                        <li>
                          <a href="/careers">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Careers
                          </a>
                        </li>
                        <li>
                          <a href="/contact-us">
                            <FaCheckDouble className="fa fa-angle-double-right mr-2" /> Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 sub-one-left">
                    <h6>Contact Info</h6>
                    <div className="sub-contact-info">
                      <p className="my-3">
                        Phone:{" "}
                        <strong>
                          <a href="tel:+63 90 5335 8369">+63 90 5335 8369</a>
                        </strong>
                      </p>
                      <p>
                        E-mail:
                        <strong>
                          {" "}
                          <a href="mailto:support@agilebeyond.net">
                            support@agilebeyond.net
                          </a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="below-section">
          <div className="container">
            <div className="copyright-footer d-block d-lg-grid d-md-grid text-lg-start text-md-start text-center">
              <div className="columns text-lg-left">
                <p className="mb-0">
                  © {new Date().getFullYear()} Agile Beyond. All rights reserved.
                </p>
              </div>
              <ul className="columns text-lg-right mb-0 d-lg-flex d-md-flex">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li className="mx-1">|</li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
    {/* <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><FaArrowUp /></a>    */}
    </>
  );
};
export default BannerContactUs;
