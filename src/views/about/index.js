import SubPageBanner from "../../components/sub_banner";
import ValuesBg from "../../assets/images/companyValuesAsian.jpg";
import TeamBg from "../../assets/images/ourTeam.jpg";
import WhyChoose from "../../components/why_choose";
import { FaCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
        <SubPageBanner name="About Us" page_name="about"/>

        <div className="container-fluid about pt-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-item-content bg-white rounded py-5 h-100">
                            <h4 className="text-primary overline">Brief introduction about Agile Beyond</h4>
                            <h4 className="display-4 mb-4">Welcome to Agile Beyond </h4>
                            <p>At Agile Beyond, we offer comprehensive back-office solutions designed to empower small to medium-sized businesses across various industries. Our advanced platform automates processes, enhances operational efficiency, and drives profitability. With features like real-time tracking, customizable dashboards, personalized analytics, and proactive customer support, we provide the tools needed to make informed, data-driven decisions.</p>
                            <p>As a leader in Business Process Outsourcing (BPO) services, Agile Beyond helps companies focus on their core competencies while we manage the rest. Our flexible pricing models ensure cost-effectiveness, allowing you to pay only for the services you need.
                                What distinguishes us is our dedication to innovation and customer success. 
                                </p>
                            <p>Through strategic partnerships and targeted digital marketing, we connect with businesses worldwide, demonstrating the transformative impact of our platform. Whether you're in logistics, finance, healthcare, or any other sector, Agile Beyond is your trusted partner in revolutionizing operations and achieving success.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid about pt-5" id="mission&vission">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-item-content bg-white rounded h-100">
                            <h1 className="text-primary overline">Mission</h1>
                            <p>At Agile Beyond, our mission is to empower freight forwarding and logistics companies by delivering exceptional back-office support that enhances process efficiency, optimizes costs, and allows our clients to focus on their core strengths. We are committed to revolutionizing the logistics industry through a comprehensive back-office solution that automates processes, drives efficiency, and boosts profitability for small to medium-sized businesses.  </p>
                            <p>Our innovative platform provides personalized analytics and reporting tools, empowering companies to make informed, data-driven decisions. With flexible pricing models, we ensure cost-effectiveness, allowing customers to pay only for the services they use. By forming strategic partnerships and implementing targeted digital marketing campaigns, we effectively reach our audience and build awareness of our transformative platform.  </p>
                            <p>Our purpose is to solve inefficiencies in logistics operations, enabling companies to streamline their processes, automate tasks, and thrive in an increasingly competitive market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid about py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-item-content bg-white rounded h-100">
                            <h1 className="text-primary overline">Vision</h1>
                            <p>Our vision is to become the leading provider of back-office solutions across multiple industries, continuously innovating and harnessing technology to transform operational efficiency and drive success on a global scale.
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5 bg-light">
        <div className="container py-xl-5 py-lg-3">
            <div className="row welcome-left text-left py-3">
                <div className="title-content col-md-6">
                <h1 className="text-primary pb-3 overline">Our Company Values</h1>

                <h4 className="text-dark"><FaCheck className="fa fa-check text-primary me-3"/>  Innovation</h4>
                <p>We embrace creativity and continuously seek new ways to solve problems and improve our services.</p>

                <h4 className="text-dark"><FaCheck className="fa fa-check text-primary me-3"/>  Agility</h4>
                <p> In a rapidly changing world, we remain flexible and responsive, adapting quickly to our clients’ evolving needs.</p>

                <h4 className="text-dark"><FaCheck className="fa fa-check text-primary me-3"/> Integrity</h4>
                <p>We operate with transparency and honesty, building trust with our clients and partners through ethical business practices.</p>
              
                <h4 className="text-dark"><FaCheck className="fa fa-check text-primary me-3"/>  Excellence</h4>
                <p>We are committed to delivering the highest quality in everything we do, ensuring our clients receive exceptional service and results.</p>

                <h4 className="text-dark"><FaCheck className="fa fa-check text-primary me-3"/>  Customer-Centric </h4>
                <p>Our clients are at the heart of our business. We work closely with them to understand their needs and provide solutions that truly make a difference.</p>

                </div>
                <div className="title-content col-md-6">
                    <div className="rounded h-100">
                        <div className="row g-4 justify-content-center">
                            <div className="">
                                <div className="rounded bg-light">
                                    <img
                                        src={ValuesBg}
                                        alt="AG Logo"
                                        className="dark:invert img-fluid rounded w-100"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

       <div className="container-fluid about py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-item-content bg-white rounded h-100">
                            <h1 className="text-primary overline">Our Team</h1>
                            <p>Though Agile Beyond is a young company, our team brings together a wealth of experience from diverse backgrounds. Our professionals are experts in logistics, finance, technology, and customer service, united by a shared goal of helping businesses thrive. We combine industry knowledge with fresh perspectives to offer innovative solutions that are both practical and forward-thinking.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="col-12">
                            <div className="rounded bg-light">
                                     <img
                                        src={TeamBg}
                                        alt="AG Logo"
                                        className="dark:invert img-fluid rounded w-100"
                                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <WhyChoose bgLight={true} />

        <div className="middle py-5">
            <div className="container py-xl-5 py-lg-3">
            <div className="welcome-left text-center py-3">
                <div className="title-content">
                <h1 className="text-light">Join Us On Our Journey</h1>
                <p className="text-light my-4">As we embark on this exciting journey, we invite you to join us. 
                    Whether you're a potential client, partner, or future team member, we believe that together, we can achieve extraordinary things. 
                    At Agile Beyond, we’re not just another BPO provider; we’re your partner in success.</p>
        
                </div>
                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="/contact-us"><FaPhoneAlt className="fa fa-phone-alt me-2"/> Contact Us</a>
                <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="/about">Learn More</a>
            </div>
            </div>
        </div>

    </>
  );
};
export default About;
