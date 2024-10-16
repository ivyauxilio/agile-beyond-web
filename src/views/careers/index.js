import SubPageBanner from "../../components/sub_banner";
import ValuesBg from "../../assets/images/values-bg.jpg";
import Faq from "../../assets/images/faq01.jpg";
import WhyChoose from "../../components/why_choose";
import Big14 from "../../assets/images/big-16.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Careers = () => {
  return (
    <>
      <SubPageBanner name="Our Careers at Agile Beyond" page_name="careers"/>

      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h1 className="container display-4 mb-4" style={{maxWidth: "900px"}}>
              Join Our Team and Innovate Beyond Limits
            </h1>
            <p className="mb-0">
              At Agile Beyond, we believe that our people are our greatest
              asset. We're always on the lookout for talented, passionate, and
              innovative individuals who are ready to make a difference. If
              you’re looking for a dynamic environment where you can grow your
              skills and advance your career, we’d love to hear from you!
            </p>
          </div>
        </div>
      </div>

      <WhyChoose bgLight={true} />

      <div className="container-fluid faq-section about py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded h-100">
                <h1 className="text-primary overline">Current Opportunities</h1>
                <p>
                  We are always looking for talented individuals to join our
                  team.
                  <br /> Explore our current openings below:
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="">
                <div className="accordion" id="accordionCareerOne">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="careerHeadingOne">
                      <button
                        className="accordion-button border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Customer Service Representative (CSR)
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show active p-3"
                      aria-labelledby="careerHeadingOne"
                      data-bs-parent="#accordionCareerOne"
                    >
                      <div className="accordion-body rounded">
                      
                        <p className="mb-0 fw-bold">Location: Philippines</p>
                        <p className="fw-bold">
                          Job Type: Full-time
                        </p>
                        <p>Experienced, Freight Forwarding, Logistics, Supply Chain</p>

                        <p className="mb-0 fw-bold">Job Responsibilities:</p>
                        <ul className="ms-4 pb-3">
                          <li>Assist client(s) with freight quotes and service
                            requests related to logistics solutions.
                          </li>
                          <li>Provide accurate information and guidance based on
                            internal systems provided offers or options, pricing
                            rates etc.
                          </li>
                          <li>Adhere to company policies, and procedures to meet
                            service standards
                          </li>
                        </ul>
                        <p className="mb-0 fw-bold">
                          Job Qualifications: 
                        </p>
                        <ul className="ms-4 pb-3">
                          <li>Prior experience in related
                          fields (BPO, Freight Forwarding, Logistics, Supply
                          Chain) </li>
                          <li>Able to work
                          on-site 1-2 times per week and work from home set-up.</li>
                          <li>Amenable to attending an on-site interview or
                          online.</li>
                        </ul>
                        <p className="mb-0 fw-bold">
                             What's in it for you?
                        </p>
                        <ul className="ms-4 pb-3">
                            <li> Hybrid set-up - 2 days office, 3 days WFH</li>
                            <li>Competitive Salary packages</li>
                            <li>Government Coverage / PhilHealth / SSS / Pag-IBIG</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        [Job Title 2]
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">Location: [City, Country]</p>
                        <p className="mb-0">
                          Job Type: [Full-time/Part-time/Contract]
                        </p>
                        <p className="mb-0">
                          Description: [Brief overview of the role and key
                          responsibilities.]
                        </p>
                        <p className="mb-0">
                          Apply Now: [Link to Application Form or Email Address]
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        [Job Title 3]
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">Location: [City, Country]</p>
                        <p className="mb-0">
                          Job Type: [Full-time/Part-time/Contract]
                        </p>
                        <p className="mb-0">
                          Description: [Brief overview of the role and key
                          responsibilities.]
                        </p>
                        <p className="mb-0">
                          Apply Now: [Link to Application Form or Email Address]
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <p className="my-4 fw-light fst-italic">
                    Don't see a role that fits? We're always interested in
                    hearing from talented individuals. Send us your resume and a
                    cover letter explaining why you'd be a great fit for Agile
                    Beyond at{" "}
                    <a href="mailto:inquire@agilebeyond.net">
                      {" "}
                      inquire@agilebeyond.net{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="0.4s">
              <img
                src={Big14}
                alt="AG Logo"
                className="dark:invert img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faq-section py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded h-100">
                <h4 className="text-primary overline">How to Apply</h4>
                <p>
                  Ready to take the next step in your career? Here’s how to
                  apply:
                </p>
              </div>
              <ul className="navTabDecimal">
                <li>
                  <strong>Browse Open Positions: </strong>
                  <p>Explore our current job openings listed above.</p>
                </li>
                <li>
                  <strong>Prepare Your Application</strong>
                  <p>
                    Include your resume, cover letter, and any relevant work
                    samples.
                  </p>
                </li>
                <li>
                  {" "}
                  <strong>Submit Your Application</strong>
                  <p>
                    Click the "Apply Now" button on the job listing or send your
                    application to{" "}
                    <a href="mailto:inquire@agilebeyond.net">
                      inquire@agilebeyond.net
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <strong>Interview Process</strong>
                  <p>
                    Our hiring team will review your application, and if you’re
                    a good fit, we’ll reach out to schedule an interview.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid faq-section bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-8 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="h-100">
                <div className="mb-5">
                  <h4 className="text-primary">Important FAQ's</h4>
                </div>
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
                        What is the application process like?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show active"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body rounded">
                        We review all applications carefully. If you meet the
                        qualifications for the position, we will contact you to
                        schedule an interview.
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
                        Can I apply for multiple positions?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, you can apply for any positions that match your
                        skills and interests.
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
                        What if I don’t see a position that suits me?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Feel free to send us your resume and a cover letter at{" "}
                        <a href="mailto:inquire@agilebeyond.net">
                          inquire@agilebeyond.net
                        </a>
                        . We’ll keep your information on file for future
                        opportunities.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInRight" data-wow-delay="0.4s">
              <img
                src={Faq}
                alt="AG Logo"
                className="dark:invert img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="middle py-5">
        <div className="container py-xl-5 py-lg-3">
          <div className="welcome-left text-left py-3">
            <div className="title-content">
              <h1 className="text-light">Stay Connected</h1>
              <p className="text-light">
                Follow us on LinkedIn to stay updated on new job openings and
                what’s happening at Agile Beyond
              </p>
            </div>
            <div className="text-center text-lg-start">
              <div className="d-flex justify-content-start mb-4">
                <div className="d-flex pe-3">
                  {/* <a className="btn p-0 text-primary me-3" href="#">
                    <FaFacebookF className="text-light" />{" "}
                  </a> */}
                  <a className="btn p-0 text-primary me-0" href="https://www.linkedin.com/company/agile-beyond-bpo/posts/?feedView=all">
                    <FaLinkedinIn className="text-light" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <a
              className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
              href="/contact-us"
            >
              <FaPhoneAlt className="fa fa-phone-alt me-2" /> Contact Us
            </a>
            <a
              className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
