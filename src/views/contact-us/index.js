import React, { useState } from "react";
import SubPageBanner from "./../../components/sub_banner";
import InstaBg5 from "./../../assets/images/instagram-footer-5.jpg";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    var contactUs = {
      service_id: "service_ihxugv9",
      template_id: "template_81tc7ki",
      user_id: "UbwAAgHets2PLFLJn",
      accessToken: "hegeZncccZqv6tgOWIYPz",
      template_params: {
        to_name: "Agile Beyond Customer Service",
        from_name: data.name,
        message: data.message,
        reply_to: data.email,
        phone: data.phone,
        from_subject: data.subject,
        project: data.project,
      },
    };

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(contactUs),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log("Success:", response.status);
        setLoading(false);
        Swal.fire({
          title: "Success",
          text: "Message sent",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const autoMessage = `<div> <p>Good day ${data.name}!</p><p> Thank you for getting in touch with us.</p> <p> This confirms receipt of your email.</p> <p> Thank you!</p>  <p>FIBS Admin</p></div>`;

    const autoReplyContactUs = {
      name: data.name,
      sendto: data.email,
      subject: `Automatic reply: Welcome to the FIBS Family!`,
      message: autoMessage,
    };

    reset();
  };

  return (
    <>
      <SubPageBanner name="Contact Us" page_name="contacts"/>
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h1 className="display-4 mb-4">We Would Love to Hear From You!</h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="contact-img d-flex justify-content-center">
                <div className="contact-img-inner">
                  <img
                    src={InstaBg5}
                    alt="AG Logo"
                    className="dark:invert img-fluid rounded w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div>
                <h4 className="text-primary">Contact Us | Agile Beyond</h4>
                <p className="mb-4">
                  At Agile Beyond, we are committed to innovating beyond your
                  global success. Whether you have a question, need support, or
                  want to explore how our services can propel your business
                  forward, our team is ready to assist.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-3">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                          {...register("name", { required: true })}
                          required=""
                        />
                        <label htmlFor="name">Your Name</label>
                        {errors.name && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                This field is required
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                          {...register("email", { required: true })}
                        />
                        <label htmlFor="email">Your Email</label>
                        {errors.email && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                Please enter a valid email address
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control border-0"
                          id="phone"
                          placeholder="Phone"
                          {...register("phone", { required: true })}
                        />
                        <label htmlFor="phone">Your Phone</label>
                        {errors.phone && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                Please enter a valid phone number
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="project"
                          placeholder="Project"
                          {...register("project", { required: true })}
                        />
                        <label htmlFor="project">Your Project</label>
                        {errors.project && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                Please enter a valid project
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                          {...register("subject", { required: true })}
                        />
                        <label htmlFor="subject">Subject</label>
                        {errors.subject && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                Please enter a valid Subject
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "120px" }}
                          {...register("message", { required: true })}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                        {errors.message && (
                          <>
                            <p className="my-2 mt-2">
                              <small className="text-danger ">
                                Please enter a valid message
                              </small>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      {loading ? (
                        <div className="btn btn-primary w-100 py-3 disabled" tabindex="-1" role="button" aria-disabled="true">
                          Sending ...
                        </div>
                      ) : (
                        <button className="btn btn-primary w-100 py-3">
                          Send Message
                        </button>
                      )}

                      <p className="mt-4 fw-light fst-italic">
                        At Agile Beyond, your privacy is of utmost importance to
                        us. Learn more about how we protect your information by
                        reading our <a href="/privacy">Privacy Policy</a>.{" "}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div>
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <FaMapMarkedAlt className="fa-2x" />
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0 fw-light">
                          La Grande Residence, Ph2, Unit 1402,{" "}
                        </p>
                        <p className="mb-0 fw-light">
                          46 Sarmiento St. Plaridel 1 Subdivision,{" "}
                        </p>
                        <p className="mb-0 fw-light">
                          Malabanias, Angeles City, 2009, Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <FaPhoneAlt className="fa-2x" />
                      </div>
                      <div>
                        <h4>Customer Support</h4>
                        <p className="mb-0 fw-light">
                          📧 Email: support@agilebeyond.net
                        </p>
                        <p className="mb-0 fw-light">
                          📞 Phone: +63 905 335 8369
                        </p>
                        <p className="mb-0 fw-light">
                          🕒 Hours of Operation: Mon-Fri – 09:00AM – 06:00PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <FaFirefoxBrowser className="fa-2x" />
                      </div>
                      <div>
                        <h4>Connect with us</h4>
                        <p className="mb-0 fw-light">
                          Follow us on our social media channels to stay updated
                          on the latest news and insights from Agile Beyond:
                        </p>
                      </div>
                      <div className="text-center text-lg-start">
                        <div className="d-flex justify-content-start mb-4">
                          <div className="d-flex pe-3">
                            {/* <a className="btn p-0 text-primary me-3" href="#">
                              <FaFacebookF />
                            </a> */}
                            {/* <a className="btn p-0 text-primary me-3" href="#">
                              <FaInstagram />
                            </a> */}
                            <a className="btn p-0 text-primary me-0" href="https://www.linkedin.com/company/agile-beyond-bpo/posts/?feedView=all">
                              <FaLinkedinIn />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
