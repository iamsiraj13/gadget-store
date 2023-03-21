import React from "react";
import logo1 from "../assets/images/client/logo1.png";
import logo2 from "../assets/images/client/logo2.png";
import logo3 from "../assets/images/client/logo3.png";
import logo4 from "../assets/images/client/logo4.png";
import logo5 from "../assets/images/client/logo5.png";
import logo6 from "../assets/images/client/logo6.png";
const ClientLogo = () => {
  return (
    <div className="client-logo-section">
      <div className="client-border">
        <div className="container">
          <div className="client-container">
            <div className="client-logo">
              <img src={logo1} alt="" />
            </div>
            <div className="client-logo">
              <img src={logo2} alt="" />
            </div>
            <div className="client-logo">
              <img src={logo3} alt="" />
            </div>
            <div className="client-logo">
              <img src={logo4} alt="" />
            </div>
            <div className="client-logo">
              <img src={logo5} alt="" />
            </div>
            <div className="client-logo">
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogo;
