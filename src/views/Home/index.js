import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./../../components/carousel";
import BannerContact from "./../../components/banner_contact_us";
import AboutBg from "./../../assets/images/about-bg1.jpg";
import CompanyValuesBg from "./../../assets/images/companyValues01.png";
import MissionVision from "./../../assets/images/missionvision3.jpg";
import Quote from "./../../assets/images/quotation.svg";
import { FaCheck, FaCheckCircle, FaAngleRight } from "react-icons/fa";
import RealPeople from "./../../assets/images/real-people.png";
import RealService from "./../../assets/images/real-service.jpg";
import RealSuccess from "./../../assets/images/real-success.jpg";
import ContactCall from "./../../assets/images/talking-telephone.png";

function Home() {
  return (
    <>
      <Carousel />
      <div className="container-fluid bg-light about mt-5 pb-lg-5 pb-md-2 homepage-section">
        <div className="container pb-5">
          <div className="row g-5 py-lg-5 py-md-2">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="about-item-contentrounded h-100">
                <h4 className="text-primary">Welcome to Agile Beyond</h4>
                <h1 className="mb-3 fw-bold h1">REAL PEOPLE <span class="text-secondary fw-bolder mx-1 dot">·</span> YOUR SUCCESS</h1>
                <p className="fw-light">
                  At AgileBeyond, we believe in the power of genuine
                  connections. Our slogan, <br/> “REAL PEOPLE<span class="fw-bolder ms-1 dot">·</span> YOUR SUCCESS”, is more
                  than just words—it’s the foundation of everything we do.
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary py-2 px-5 flex-shrink-0 rounded-pill home-about-btn"
                  data-bs-dismiss="offcanvas"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 col-md-5 col-sm-5 offset-md-1 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="rounded py-lg-5 py-md-3 pb-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded">
                      <img
                        src={AboutBg}
                        alt="Agile Beyond Image"
                        className="img-fluid rounded ag-img-home"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" style={{ backgroundColor: "#F3E9FF" }}>
        <div className="container pb-lg-5 pb-md-2 mt-lg-5 mt-md-2 ">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <h1 className="mb-4 fw-bold h1">Why Choose Us?</h1>
              <p className="fw-light">
                In a world increasingly driven by automation, we stand out by
                putting people first. We are a team of skilled professionals
                dedicated to providing exceptional Business Process Outsourcing
                (BPO) services tailored to your unique needs. Whether you’re a
                growing startup or an established enterprise, we understand that
                your success starts with real, reliable support.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-lg-5 py-md-4 mb-lg-5 mb-md-4">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-12 image p-0">
              <div className="bg-light">
                <img
                  src={RealPeople}
                  alt="Real"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 content px-lg-5 px-md-4 p-4 py-sm-4">
              <h3 className="fw-bold">REAL PEOPLE</h3>
              <p className="fw-light">
                We are more than just a service provider; we’re your partner in
                success. Our team of dedicated experts works with precision,
                care, and a personal touch to ensure that every task is handled
                with excellence. When you work with us, you’re not just
                outsourcing—you’re gaining a trusted extension of your team.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p><span className="fw-bolder">
                     Dedicated Teams:{" "}
                  </span>
                  Trained professionals who understand your business.</p>
                </li>
                <li className="d-flex">
                <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" /> 
                <p><span className="fw-bolder">
                   Human Touch:{" "}
                  </span>
                  Building genuine relationships for seamless collaboration.</p>
                </li>
                <li className="d-flex">
                <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                 <p> <span className="fw-bolder">
                    Accountability:{" "}
                  </span>
                  A focus on results delivered with integrity.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-md-5">
            <div className="col-lg-6 col-md-4 col-sm-12 image p-0">
              <div className="bg-light">
                <img
                  src={RealSuccess}
                  alt="Real"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 content pe-lg-5 pe-md-4 pe-sm-4 p-4">
              {" "}
              <h3 className="fw-bold">YOUR SUCCESS</h3>
              <p className="fw-light">
                Your goals are our goals. Our mission is to free up your time
                and resources so you can focus on growing your business. With
                streamlined processes, efficient operations, and measurable
                results, we are here to drive your success every step of the
                way.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                    <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p><span className="fw-bolder"> Custom Solutions:
                  </span> Tailored BPO services to meet your business needs. </p>
                </li>
                <li className="d-flex">
                    <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p> <span className="fw-bolder">
                    Scalable Operations: 
                  </span> Grow at your pace with our flexible solutions.</p>
                </li>
                <li className="d-flex">
                  <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p> <span className="fw-bolder">Unwavering Support: </span> 
                   We’re with you, 24/7, ensuring your business runs smoothly.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-md-5">
            <div className="col-lg-6 col-md-4 col-sm-12 image p-0">
              <div className="bg-light">
                <img
                  src={RealService}
                  alt="Real"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 content px-lg-5 px-md-4 px-sm-4 p-4">
              <h3 className="fw-bold">Our Services</h3>
              <p className="fw-light">
                We specialize in delivering top-tier BPO solutions designed to
                maximize efficiency and minimize overhead:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p><span className="fw-bolder">
                    Customer Support:{" "}
                  </span>
                  Real-time assistance that prioritizes your customers’
                  satisfaction.</p>
                </li>
                <li className="d-flex">
                  <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" /> 
                  <p><span className="fw-bolder">                    
                    Back-Office Solutions:{" "}
                  </span>
                  Streamlined data management, billing, and administrative
                  support.</p>
                </li>
                <li className="d-flex">
                <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" />
                  <p><span className="fw-bolder">
                    Logistics & Freight Support:
                  </span>{" "}
                  Specialized expertise in managing quotations, shipments, and
                  global networks.</p>
                </li>
                <li className="d-flex">
                <FaCheckCircle className="text-primary me-2 mt-1 facheckcircle-home" /> 
                  <p><span className="fw-bolder">
                   Tech-Enabled Solutions:
                  </span>{" "}
                  Harnessing technology to optimize and elevate your processes.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-lg-5 py-md-4 py-3 my-lg-5 my-md-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="my-4 fw-bold">What Makes Us Different?</h2>
            <p className="fw-light">
              At Agile Beyond, we combine technology and human expertise to
              create a powerful synergy. We don’t just manage your tasks; we
              enhance your capabilities.
            </p>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1 col-sm-12">
            <div className="section-mission">
              <h4 className="text-primary"> With us, you get:</h4>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <FaAngleRight className="mt-1 me-2" />
                  <div>
                    A team you can trust, working tirelessly behind the scenes.
                  </div>
                </li>
                <li className="d-flex"> 
                  <FaAngleRight className="mt-1 me-2" />
                  Customized approaches that fit your unique business model.
                </li>
                <li className="d-flex">
                  <FaAngleRight className="mt-1 me-2" />
                  The peace of mind that comes with knowing your operations are
                  in good hands.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 offset-lg-3 quote-text">
            <h1 className="fw-normal d-lg-flex d-md-flex justify-content-lg-end justify-content-md-end justify-content-start">
              REAL PEOPLE <span class="text-secondary fw-bolder mx-2 dot"> · </span> YOUR SUCCESS
            </h1>
            <h5 className="text-lg-end text-md-end">
              It’s not just our promise—it’s our purpose. Partner with us and
              experience the difference of working with a BPO provider that’s as
              invested in your success as you are.  
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 girl-phone">
            <img
              src={ContactCall}
              alt="fibs contact us"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column 
          justify-content-center align-content-center align-items-center mt-5">
              <Link
                to="/contact-us"
                className="btn btn-dark fs-2 py-3 px-5 flex-shrink-0 rounded-pill"
                data-bs-dismiss="offcanvas"
              >
                Contact Us Today
              </Link>

            <p className="mt-4">
              To learn how we can help transform your <br/> business operations and
              drive your growth!
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bout mt-5 pb-5 bg-dark">
        <div className="container">
          <div className="row g-5 ">
            <div
              className="col-xl-4 col-lg-4 col-sm-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="rounded py-lg-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src={MissionVision}
                        alt="AG Logo"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-8 wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="about-item-content rounded py-lg-5 h-100">
                <div className="section-mission">
                  <h4 className="text-primary">Our Mission</h4>
                  <p className="fw-light">
                    Our mission is to empower businesses across diverse
                    industries with exceptional back-office support that
                    enhances efficiency, optimizes costs, and enables them to
                    focus on their core strengths. We revolutionize operations
                    through automated processes, personalized analytics, and
                    flexible pricing, driving profitability for small to
                    medium-sized enterprises.
                  </p>
                  <p className="fw-light">
                    Our innovative platform enables data-driven decisions and
                    cost-effectiveness, ensuring customers only pay for what
                    they need. Through strategic partnerships and targeted
                    marketing, we raise awareness of our transformative
                    solutions, helping companies streamline processes, automate
                    tasks, and thrive in a competitive global market.
                  </p>
                </div>
                <div className="mission_quote">
                  <img src={Quote} alt="AG Logo" className="" />
                  <div>
                    <h4 className="text-warning mt-3">Our Vision</h4>
                    <p className="fw-light text-light">
                      Our vision is to become the leading provider of
                      back-office solutions across multiple industries,
                      continuously innovating and harnessing technology to
                      transform operational efficiency and drive success on a
                      global scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-light">
        <div className="container py-xl-5 py-lg-3">
          <div className="row welcome-left text-left py-3">
            <div className="title-content col-md-6">
              <h1 className="text-primary pb-3">Our Company Values</h1>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Innovation
              </h4>
              <p>
                At Agile Beyond, we are committed to continuously pushing the
                boundaries of what's possible. We embrace new ideas and
                technologies to deliver cutting-edge solutions that drive our
                clients' success.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Agility
              </h4>
              <p>
                We pride ourselves on our ability to adapt quickly to changing
                market conditions and client needs. Our agile approach ensures
                that we remain responsive, flexible, and effective in all that
                we do.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Integrity
              </h4>
              <p>
                Trust is the foundation of our relationships with clients,
                partners, and employees. We conduct our business with the
                highest standards of honesty, transparency, and ethical
                behaviour.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Customer-Centricity
              </h4>
              <p>
                Our clients' success is our success. We place our customers at
                the heart of everything we do, delivering personalized solutions
                that meet their unique needs and goals.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Collaboration
              </h4>
              <p>
                We believe that teamwork and collaboration are key to achieving
                greatness. At AB, we foster a culture of open communication and
                mutual respect, working together to create value for our
                clients.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Excellence
              </h4>
              <p>
                We strive for excellence in every aspect of our business, from
                the quality of our solutions to the service we provide. Our
                commitment to continuous improvement drives us to achieve the
                highest standards.
              </p>

              <h4 className="text-dark">
                <FaCheck className="text-primary me-3" /> Empowerment
              </h4>
              <p>
                We empower our clients, employees, and partners to reach their
                full potential. By providing the tools, support, and
                opportunities they need, we help them thrive in a competitive
                landscape.
              </p>
            </div>
            <div className="title-content col-md-6">
              <div className="rounded h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <div className="rounded bg-light">
                      <img
                        src={CompanyValuesBg}
                        alt="Company Values Bg"
                        className="img-fluid rounded w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerContact />
    </>
  );
}

export default Home;
