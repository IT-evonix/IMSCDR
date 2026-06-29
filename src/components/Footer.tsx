import React from "react";
import Image from "next/image";
import Link from "next/link";
import CoursesStrip from "./homepage/CoursesStrip";

const Footer = () => {
  return (
    <footer>
      <CoursesStrip/>
      <div className="footer_main">
        <div className="container">
          <div className="footer_inner">
            <div className="footerbox blueBox">
              <div className="logo-wrapper">
                <Image
                  src="/images/home/white_logo.webp"
                  alt="BPHES IMSCDR"
                  width={220}
                  height={150}
                  className="img-fluid"
                />
              </div>

              {/* Address */}
              <div className="address-content">
                <p>
                  Institute of Management Studies Career Development & Research,
                  Station Road,
                </p>
                <p className="p-0 m-0">Ahmednagar (MH) - 414001</p>
              </div>
              {/* Social Icons */}
              <div className="social-icons">
                <Link href="#" className="social-icon">
                  <Image
                    src="/images/home/facebook.png"
                    alt="BPHES IMSCDR"
                    width={10}
                    height={20}
                    className="img-fluid"
                  />
                </Link>
                <Link href="#" className="social-icon">
                  <Image
                    src="/images/home/instagram.png"
                    alt="BPHES IMSCDR"
                    width={20}
                    height={20}
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div className="footerbox footerbox2">
              <div className="footerheading">Other Menu</div>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Program</Link>
                </li>
                <li>
                  <Link href="/">Governance</Link>
                </li>
                <li>
                  <Link href="/">Placement</Link>
                </li>
                <li>
                  <Link href="/">Library</Link>
                </li>
                <li>
                  <Link href="/">Admission</Link>
                </li>
                <li>
                  <Link href="/">R & D</Link>
                </li>
                <li>
                  <Link href="/">IQAC</Link>
                </li>
                <li>
                  <Link href="/">People</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footerbox footerbox3">
              <div className="footerheading">Important Links</div>
              <ul>
                <li>
                  <Link href="/">
                    Anti Ragging Committee
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Anti Sexual Harassment Committee
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    SC/ST Cell & Anti Discrimination Committee
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Grievance Redressal Committee
                  </Link>
                </li>
                <li>
                  <Link href="/">NIRF</Link>
                </li>
                <li>
                  <Link href="/">IQAC</Link>
                </li>
                <li>
                  <Link href="/">Mandatory Disclosure</Link>
                </li>
              </ul>
            </div>

            <div className="footerbox footerbox4">
              <div className="footerheading">Contact Us</div>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2417 13C10.737 13 9.25046 12.6721 7.78194 12.0163C6.31343 11.3606 4.97731 10.4306 3.77361 9.22639C2.56991 8.0222 1.64017 6.68609 0.984389 5.21806C0.328611 3.75002 0.000481481 2.26344 0 0.758333C0 0.541667 0.0722222 0.361111 0.216667 0.216667C0.361111 0.0722222 0.541667 0 0.758333 0H3.68333C3.85185 0 4.00232 0.0572962 4.13472 0.171889C4.26713 0.286481 4.34537 0.421778 4.36944 0.577778L4.83889 3.10556C4.86296 3.29815 4.85694 3.46065 4.82083 3.59306C4.78472 3.72546 4.71852 3.83981 4.62222 3.93611L2.87083 5.70555C3.11157 6.15093 3.39733 6.58113 3.72811 6.99617C4.05889 7.4112 4.42313 7.81156 4.82083 8.19722C5.19398 8.57037 5.58519 8.91656 5.99444 9.23578C6.4037 9.555 6.83704 9.84678 7.29444 10.1111L8.99167 8.41389C9.1 8.30556 9.24156 8.22443 9.41633 8.1705C9.59111 8.11657 9.76252 8.10141 9.93056 8.125L12.4222 8.63056C12.5907 8.6787 12.7292 8.76609 12.8375 8.89272C12.9458 9.01935 13 9.16067 13 9.31667V12.2417C13 12.4583 12.9278 12.6389 12.7833 12.7833C12.6389 12.9278 12.4583 13 12.2417 13Z"
                      fill="white"
                    />
                  </svg>
                  <Link href="tel:0241 - 2346532">0241 - 2346532</Link>
                </div>
                <div className="contact-item">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2417 13C10.737 13 9.25046 12.6721 7.78194 12.0163C6.31343 11.3606 4.97731 10.4306 3.77361 9.22639C2.56991 8.0222 1.64017 6.68609 0.984389 5.21806C0.328611 3.75002 0.000481481 2.26344 0 0.758333C0 0.541667 0.0722222 0.361111 0.216667 0.216667C0.361111 0.0722222 0.541667 0 0.758333 0H3.68333C3.85185 0 4.00232 0.0572962 4.13472 0.171889C4.26713 0.286481 4.34537 0.421778 4.36944 0.577778L4.83889 3.10556C4.86296 3.29815 4.85694 3.46065 4.82083 3.59306C4.78472 3.72546 4.71852 3.83981 4.62222 3.93611L2.87083 5.70555C3.11157 6.15093 3.39733 6.58113 3.72811 6.99617C4.05889 7.4112 4.42313 7.81156 4.82083 8.19722C5.19398 8.57037 5.58519 8.91656 5.99444 9.23578C6.4037 9.555 6.83704 9.84678 7.29444 10.1111L8.99167 8.41389C9.1 8.30556 9.24156 8.22443 9.41633 8.1705C9.59111 8.11657 9.76252 8.10141 9.93056 8.125L12.4222 8.63056C12.5907 8.6787 12.7292 8.76609 12.8375 8.89272C12.9458 9.01935 13 9.16067 13 9.31667V12.2417C13 12.4583 12.9278 12.6389 12.7833 12.7833C12.6389 12.9278 12.4583 13 12.2417 13Z"
                      fill="white"
                    />
                  </svg>
                  <Link href="tel:0241 - 2324830">0241 - 2324830</Link>
                </div>
                <div className="contact-item">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2417 13C10.737 13 9.25046 12.6721 7.78194 12.0163C6.31343 11.3606 4.97731 10.4306 3.77361 9.22639C2.56991 8.0222 1.64017 6.68609 0.984389 5.21806C0.328611 3.75002 0.000481481 2.26344 0 0.758333C0 0.541667 0.0722222 0.361111 0.216667 0.216667C0.361111 0.0722222 0.541667 0 0.758333 0H3.68333C3.85185 0 4.00232 0.0572962 4.13472 0.171889C4.26713 0.286481 4.34537 0.421778 4.36944 0.577778L4.83889 3.10556C4.86296 3.29815 4.85694 3.46065 4.82083 3.59306C4.78472 3.72546 4.71852 3.83981 4.62222 3.93611L2.87083 5.70555C3.11157 6.15093 3.39733 6.58113 3.72811 6.99617C4.05889 7.4112 4.42313 7.81156 4.82083 8.19722C5.19398 8.57037 5.58519 8.91656 5.99444 9.23578C6.4037 9.555 6.83704 9.84678 7.29444 10.1111L8.99167 8.41389C9.1 8.30556 9.24156 8.22443 9.41633 8.1705C9.59111 8.11657 9.76252 8.10141 9.93056 8.125L12.4222 8.63056C12.5907 8.6787 12.7292 8.76609 12.8375 8.89272C12.9458 9.01935 13 9.16067 13 9.31667V12.2417C13 12.4583 12.9278 12.6389 12.7833 12.7833C12.6389 12.9278 12.4583 13 12.2417 13Z"
                      fill="white"
                    />
                  </svg>
                  <Link href="tel:0241 - 2346529">0241 - 2346529</Link>
                </div>
                <div className="contact-item mt-3">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3.456V9.5625C15 10.1851 14.7618 10.7841 14.3342 11.2367C13.9067 11.6892 13.3221 11.961 12.7005 11.9963L12.5625 12H2.4375C1.8149 12 1.21588 11.7618 0.763327 11.3342C0.310775 10.9067 0.038999 10.3221 0.00375009 9.7005L0 9.5625V3.456L7.239 7.248C7.31953 7.29018 7.40909 7.31222 7.5 7.31222C7.59091 7.31222 7.68047 7.29018 7.761 7.248L15 3.456ZM2.4375 1.77038e-08H12.5625C13.1667 -7.2761e-05 13.7494 0.224247 14.1975 0.62945C14.6457 1.03465 14.9274 1.59186 14.988 2.193L7.5 6.1155L0.012 2.193C0.0701425 1.61573 0.332287 1.07814 0.751312 0.676847C1.17034 0.275557 1.71876 0.0368902 2.298 0.0037501L2.4375 1.77038e-08Z"
                      fill="white"
                    />
                  </svg>
                  <Link href="mailto:imscdr.ac@gmail.com">imscdr.ac@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerstrip">
        <div className="container">
          <div className="footerstripinner">
            <p className="p-0 m-0">Copyright ©2026 IMS. All rights reserved.</p>
            <div className="div">
              Crafted by{" "}
              <Link target="_blank" href="https://www.evonix.co/" className="img-fluid">
                <Image
                  src="/images/home/footerlogo.webp"
                  alt="BPHES IMSCDR"
                  width={80}
                  height={30}
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
