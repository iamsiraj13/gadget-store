import React from "react";

const Header = () => {
  return (
    <div className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <h2>logo</h2>
          </div>
          <div className="navbar">
            <div className="menu1">
              <h4>store</h4>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
          <div className="navbar">
            <div className="menu1">
              <h4>product</h4>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
          <div className="navbar">
            <div className="menu1">
              <h4>blog</h4>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
