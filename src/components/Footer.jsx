import React from "react";
import phone from "../assets/images/footer/phone.svg";
import email from "../assets/images/footer/email.svg";
import location from "../assets/images/footer/location.svg";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-container">
          {/* footer logo  */}
          <div className="footer-about">
            <h2 className="footer-title">logo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <div className="footer-contact">
              <div className="f-item">
                <img src={phone} alt="" />
                <p>location</p>
              </div>
              <div className="f-item">
                <img src={email} alt="" />
                <p>contact@gmail.com</p>
              </div>
              <div className="f-item">
                <img src={location} alt="" />
                <p>Location</p>
              </div>
            </div>
          </div>
          {/* footer quick links */}
          <div className="quick-links">
            <h2 className="footer-title">quick link</h2>
            <div className="footer-menu">
              <div className="menu">
                <ul>
                  <li>headphone</li>
                  <li>smart watch</li>
                  <li>video game & consoles</li>
                  <li>laptop</li>
                  <li>television</li>
                </ul>
              </div>
              <div className="menu">
                <ul>
                  <li>home</li>
                  <li>about us</li>
                  <li>blog</li>
                  <li>services</li>
                  <li>contact us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer customer care  */}
          <div className="customer-care">
            <h2 className="footer-title">customer care</h2>
            <div className="footer-menu">
              <div className="menu">
                <ul>
                  <li>my account</li>
                  <li>order tracking</li>
                  <li>wish list</li>
                  <li>customer service</li>
                  <li>FAQS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
