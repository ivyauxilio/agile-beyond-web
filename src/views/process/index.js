import React from "react";
import {
  FaLightbulb,
  FaComments,
  FaCogs,
  FaChartLine,
  FaSearch,
  FaSyncAlt,
  FaTools,
  FaChartBar,
  FaPhoneAlt
} from "react-icons/fa";
import SubPageBanner from "./../../components/sub_banner";
import "./ProcessOverview.css";

const Process = () => {
  const steps = [
    {
      icon: <FaLightbulb size={50} color="#007BFF" />,
      title: "Understand",
      description: "Gather insights into customer needs and expectations.",
    },
    {
      icon: <FaComments size={50} color="#28A745" />,
      title: "Feedback",
      description: "Collect and analyze customer data effectively.",
    },
    {
      icon: <FaCogs size={50} color="#FFC107" />,
      title: "Implement",
      description: "Use customer insights to improve products and services.",
    },
    {
      icon: <FaChartLine size={50} color="#DC3545" />,
      title: "Monitor",
      description: "Continuously track outcomes and customer satisfaction.",
    },
  ];
  const preBoarding = [
    {
      title: "Initial Contact: ",
      content:
        "Our team connects with you to understand your business requirements and service expectations.",
    },
    {
      title: "Service Level Agreement (SLA):",
      content:
        "We define the services, pricing structure, performance metrics, and communication protocols to ensure transparency and mutual understanding.",
    },
    {
      title: "Data Security Agreement (DSA): ",
      content:
        "Protecting your data is paramount. We put in place robust protocols for managing and securing sensitive information.",
    },
  ];
  const onboarding = [
    {
      title: "Data Transfer & Integration ",
      content:
        "We work closely with your IT team to securely transfer relevant data and integrate systems for smooth operational efficiency.",
    },
    {
      title: "Training",
      content:
        "Our staff receives comprehensive training on your specific processes, systems, and workflows to ensure we handle your business needs effectively.",
    },
    {
      title: "Test Phase",
      content:
        "A pilot run is conducted to test the workflow and address any issues before full-scale operations commence.",
    },
  ];

  const postBoarding = [
    {
      title: "Go-Live & Support",
      content:
        "We go live with our services, and our dedicated support team remains on hand to assist with any queries or issues.",
    },
    {
      title: "Performance Monitoring",
      content:
        "We regularly monitor key performance indicators (KPIs) such as accuracy, processing speed, and cost savings to ensure continuous improvement.",
    },
    {
      title: "Ongoing Communication",
      content:
        "Regular check-ins ensure we remain aligned with your evolving needs and maintain a strong partnership.",
    },
  ];

  const journeySteps = [
    {
      icon: <FaSearch size={40} color="#007BFF" />,
      label: "Research",
    },
    {
      icon: <FaSyncAlt size={40} color="#28A745" />,
      label: "Feedback Loop",
    },
    {
      icon: <FaTools size={40} color="#FFC107" />,
      label: "Implement",
    },
    {
      icon: <FaChartBar size={40} color="#DC3545" />,
      label: "Monitor & Improve",
    },
  ];

  return (
    <>
      <SubPageBanner name="Customer Integration Process" page_name="services" />

      <div className="container-fluid service pt-5">
        <div className="container">
          <section className="process-overview">
            <p>
              At Agile Beyond, we provide a seamless customer integration
              process tailored to meet the needs of diverse industries. We focus
              on ensuring smooth onboarding and establishing long-term,
              successful partnerships. Here’s how it works:
            </p>
          </section>
          <section className="process-details">
            <div className="details-container">
              <h2>
                <FaLightbulb size={35} color="#007BFF" /> Pre-boarding{" "}
              </h2>
              <ul className="ms-5 mt-4">
                {preBoarding.map((detail, index) => (
                  <div key={index} className="detail">
                    <li>
                      <h3>{detail.title}</h3>
                      <p>{detail.content}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="details-container">
              <h2>
                <FaCogs size={35} color="#FFC107" /> Onboarding
              </h2>
              <ul className="ms-5 mt-4">
                {onboarding.map((onboard, index) => (
                  <div key={index} className="detail">
                    <li>
                      <h3>{onboard.title}</h3>
                      <p>{onboard.content}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="details-container">
              <h2>
                <FaChartLine size={35} color="#DC3545" /> Post-Boarding{" "}
              </h2>
              <ul className="ms-5 mt-4">
                {postBoarding.map((postboard, index) => (
                  <div key={index} className="detail">
                    <li>
                      <h3>{postboard.title}</h3>
                      <p>{postboard.content}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
          <section className="customer-journey">
            <p>
              Agile Beyond is committed to data security, flexibility, and clear
              communication throughout the entire integration process, ensuring
              a successful and long-lasting collaboration across industries.
            </p>
          </section>
          {/* <section className="call-to-action">
            <h2>Ready to Improve Your Customer Experience?</h2>
            <p>
              Contact us today to start!
            </p>
            <button className="cta-button">Contact Us</button>
          </section> */}

        </div>
      </div>
      <div className="middle py-5">
            <div className="container py-xl-5 py-lg-3">
              <div className="welcome-left text-center py-3">
                <div className="title-content">
                  <h1 className="text-light"> Ready to Improve Your Customer Experience?</h1>
                  <p className="text-light my-4">
                  Contact us today to start!
                  </p>
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
export default Process;
