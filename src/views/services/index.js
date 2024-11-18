import SubPageBanner from "./../../components/sub_banner";
import Big14 from "./../../assets/images/versitileservice.jpg";
import WhyChoose from "./../../components/why_choose";

const Services = () => {
  return (
    <>
      <SubPageBanner name="Business Process Outsourcing (BPO) Across Industries" page_name="services"/>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {/* <h4 className="text-primary">We provide</h4>
            <h1 className="display-4 mb-4">
              Business Process Outsourcing (BPO) Across Industries
            </h1> */}
            <p className="mb-0">
            At Agile Beyond, we specialize in offering BPO services that streamline operations, enhance efficiency, and boost profitability across various industries. Our innovative platform and comprehensive solutions are designed to meet the unique challenges of each market we serve, providing customized support for businesses looking to optimize their processes.
            </p>
          </div>
          <div className="row g-4 justify-content-center cursor-default">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                {/* <!-- <div className="service-img">
                                <img src="img/blog-1.png" className="img-fluid rounded-top w-100" alt="">
                                <div className="service-icon p-3">
                                    <i className="fa fa-users fa-2x"></i>
                                </div>
                            </div> --> */}
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                      Comprehensive Back-Office Solutions
                    </p>
                    <p className="mb-4">
                    Our back-office services are designed to automate key processes, reducing inefficiencies and optimizing workflows. Whether in retail, finance, healthcare, or any other sector, our solutions save time, cut costs, and drive operational success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.4s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                {/* <!-- <div className="service-img">
                                <img src="img/blog-2.png" className="img-fluid rounded-top w-100" alt="">
                                <div className="service-icon p-3">
                                    <i className="fa fa-hospital fa-2x"></i>
                                </div>
                            </div> --> */}
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                    Pricing Desk and Analytics
                    </p>
                    <p className="mb-4">
                    Our pricing desk services provide accurate, competitive rates across industries. With quick turnaround times and around-the-clock support, we help businesses stay agile in a competitive market. Advanced data analytics empower better pricing strategies and decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.8s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                    Supply Chain Visibility
                    </p>
                    <p className="mb-4">
                    Our real-time supply chain visibility systems offer full insight into your operations, allowing for proactive management and ensuring smooth service delivery, regardless of the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.8s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                {/* <!-- <div className="service-img">
                                <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt="">
                                <div className="service-icon p-3">
                                    <i className="fa fa-home fa-2x"></i>
                                </div>
                            </div> --> */}
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                      Customer Dashboard Services
                    </p>
                    <p className="mb-4">
                    We offer customizable dashboards tailored to specific industry needs. These dashboards provide valuable insights that support data-driven decision-making, giving businesses a comprehensive view of their performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.6s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                {/* <!-- <div className="service-img">
                                <img src="img/blog-3.png" className="img-fluid rounded-top w-100" alt="">
                                <div className="service-icon p-3">
                                    <i className="fa fa-car fa-2x"></i>
                                </div>
                            </div> --> */}
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                    Personalized Analytics and Reporting
                    </p>
                    <p className="mb-4">
                    Our advanced analytics tools deliver in-depth insights into operations, uncovering trends and helping businesses optimize their processes for maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.8s"
              style={{ minHeight: "270px" }}
            >
              <div className="service-item">
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <p className="d-inline-block h4 mb-4">
                    Proactive Customer Service Support
                    </p>
                    <p className="mb-4">
                    We deliver exceptional customer support, ensuring that your business operates seamlessly. Our dedicated support team is always available to assist with queries or concerns, helping you maintain a smooth and efficient workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 text-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <a
                className="btn btn-primary rounded-pill py-3 px-5"
                href="/pricing"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faq-section bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="mb-5">
              <h1 className="display-4 mb-0">
                Versatile BPO Solutions for Other Industries
              </h1>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="h-100">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Retail and E-commerce
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show active"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body rounded">
                        Streamline your supply chain, enhance customer support,
                        and manage inventory with our tailored back-office
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Healthcare and Pharmaceuticals
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Improve patient care and streamline administrative
                        processes with our specialized healthcare BPO solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Financial Services
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Optimize your financial operations, including
                        accounting, HR management, payroll, and compliance, with our expert BPO
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Telecommunications:
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Enhance customer engagement and streamline billing and
                        support operations with our targeted telecom BPO
                        solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Manufacturing
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Improve production efficiency and manage your supply
                        chain with our comprehensive BPO services for the
                        manufacturing industry.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <img
                src={Big14}
                alt="AG Logo"
                className="dark:invert img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <WhyChoose bgLight={false} />
    </>
  );
};
export default Services;
