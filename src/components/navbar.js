import React, { useState } from 'react';
import { Link, NavLink,useLocation } from "react-router-dom";
import Logo from "./../assets/images/AgileBeyondLogo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Navbar() {

  const location = useLocation();

  const isDropdownActive =
  location.pathname === '/business-process-outsourcing' ||
  location.pathname === '/customer-integration-process' ;

  // const [ isActiveDropDown, setIsActiveDropDown] = useState(false);

  // const handleToggle = (open) => {
  //   setIsActiveDropDown(open); // Set state when dropdown is active
  // };

  return (
    <>
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="#" className="text-muted small">
                    <FaMapMarkerAlt className="text-primary me-2" /> Philippines
                  </a>
                </div>
                <div className="ps-3">
                  <a
                    href="mailto:support@agilebeyond.net"
                    className="text-muted small"
                  >
                    <FaEnvelope className="text-primary me-2" />{" "}
                    support@agilebeyond.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <img src={Logo} alt="AG Logo" className="dark:invert" />
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <FaBars />
            </button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Services"
                  menuVariant=""
                  className={`custom-dropdown ${isDropdownActive ? 'active' : ''}`}
                >
                  <NavDropdown.Item href="/business-process-outsourcing">
                  Business Process Outsourcing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/customer-integration-process">
                  Customer Integration Process
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Services
                </NavLink> */}
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Our Team
                </NavLink>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  News
                </NavLink>
                <div className="nav-btn px-3">
                  <Link
                    to="/contact-us"
                    className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
                  >
                    <FaPhoneAlt className="fa fa-phone-alt me-2" /> Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-brand mb-0 h1">Navbar</span>
        </div>
    </nav> */}

      <div
        className="offcanvas offcanvas-start bg-light"
        tabindex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="sidebarLabel">Agile Beyond</h5> */}
          <Link to="/" className="navbar-brand p-0">
            <img
              src={Logo}
              alt="AG Logo"
              className="dark:invert"
              width={"100px"}
            />
          </Link>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">
              <Link
                to="/"
                className="nav-item nav-link active"
                data-bs-dismiss="offcanvas"
              >
                Home
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/about"
                className="nav-item nav-link"
                data-bs-dismiss="offcanvas"
              >
                About
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li className="list-group-item list-dropdown-mobile">
               <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Services"
                  menuVariant=""
                  className='d-flex flex-column menu-mobile'
                >
                  <NavDropdown.Item className='' href="/business-process-outsourcing" data-bs-dismiss="offcanvas">
                  Business Process Outsourcing
                  </NavDropdown.Item>
                  <NavDropdown.Item className='' href="/customer-integration-process" data-bs-dismiss="offcanvas">
                  Customer Integration Process
                  </NavDropdown.Item>

                  
                </NavDropdown>

                {/* <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>

<svg  width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> 
<path fill="#181818" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
               
                </div> */}

              {/* <Link
                to="/services"
                className="nav-item nav-link"
                data-bs-dismiss="offcanvas"
              >
                Services
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link> */}
            </li>
            <li className="list-group-item">
              <Link
                to="/pricing"
                className="nav-item nav-link"
                data-bs-dismiss="offcanvas"
              >
                Pricing
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/team"
                className="nav-item nav-link active"
                data-bs-dismiss="offcanvas"
              >
                Our Team
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/careers"
                className="nav-item nav-link"
                data-bs-dismiss="offcanvas"
              >
                Careers
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/news"
                className="nav-item nav-link"
                data-bs-dismiss="offcanvas"
              >
                News
                <div class="Header__isMobileArrow__8hwJn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    svg-inline=""
                    alt="right"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M12.733 8l-6.666 6.667H3.333L10 8 3.333 1.333h2.734L12.733 8z"
                      fill="#181818"
                    ></path>
                  </svg>
                </div>
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/contact-us"
                className="btn btn-primary py-2 px-4 flex-shrink-0"
                data-bs-dismiss="offcanvas"
              >
                <FaPhoneAlt className="fa fa-phone-alt me-2" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
