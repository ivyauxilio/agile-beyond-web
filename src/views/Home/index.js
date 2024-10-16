import React from "react";
import Carousel from "./../../components/carousel";
import BannerContact from "./../../components/banner_contact_us";
import AboutBg from "./../../assets/images/about-bg1.jpg";
import CompanyValuesBg from "./../../assets/images/companyValues01.png";
import MissionVision from "./../../assets/images/missionvision3.jpg";
import Quote from "./../../assets/images/quotation.svg";
import { FaCheck } from "react-icons/fa";


function Home() {
  return (
    <>
    <Carousel />
      <div className="container-fluid bg-light about mt-5 pb-lg-5 pb-md-5">
        <div className="container pb-5">
          <div className="row g-5 pt-5">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-contentrounded h-100">
                <h4 className="text-primary">Welcome to Agile Beyond</h4>
                <h1 className="display-4 mb-4 fw-bold">
                  We offer comprehensive back-office solutions{" "}
                </h1>
                <p className="fw-light">
                  Designed to empower small to medium-sized businesses across
                  various industries. Our advanced platform automates processes,
                  enhances operational efficiency, and drives profitability.
                  With features like real-time tracking, customizable
                  dashboards, personalized analytics, and proactive customer
                  support, we provide the tools needed to make informed,
                  data-driven decisions.
                </p>
                <p className="fw-light">
                  As a leader in Business Process Outsourcing (BPO) services,
                  Agile Beyond helps companies focus on their core competencies
                  while we manage the rest. Our flexible pricing models ensure
                  cost-effectiveness, allowing you to pay only for the services
                  you need. What distinguishes us is our dedication to
                  innovation and customer success.
                </p>
                <p className="fw-light">
                  Through strategic partnerships and targeted digital marketing,
                  we connect with businesses worldwide, demonstrating the
                  transformative impact of our platform. Whether you're in
                  logistics, finance, healthcare, or any other sector, Agile
                  Beyond is your trusted partner in revolutionizing operations
                  and achieving success.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="rounded py-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src={AboutBg}
                        alt="AG Logo"
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
      <div
        className="container-fluid bout mt-5 pb-5 bg-dark">
        <div className="container">
          <div className="row g-5 ">
            <div className="col-xl-4 col-lg-4 col-sm-4 wow fadeInRight" data-wow-delay="0.2s">
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
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-contentrounded py-lg-5 h-100">
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
                  <img
                    src={Quote}
                    alt="AG Logo"
                    className=""
                  />
                  <div>
                    <h4 className="text-warning mt-3">Our Vision</h4>
                    <p className="fw-light text-light">
                        Our vision is to become the leading provider of back-office
                        solutions across multiple industries, continuously
                        innovating and harnessing technology to transform
                        operational efficiency and drive success on a global scale.
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
