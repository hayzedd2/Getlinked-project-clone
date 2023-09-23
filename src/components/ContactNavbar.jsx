import React from "react";
const ContactNavbar = () => {
 
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <h1>
              get<span>linked</span>
            </h1>
          </div>
          <div className="mobile-nav-show">
            <div className="nav-links">
              <ul>
                <li>
                  <a href="/">Timeline</a>
                </li>
                <li>
                  <a href="/">Overview</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/contact" className="nav-active">Contact</a>
                </li>
              </ul>
            </div>
            <div className="nav-button">
              <a href="/register">
                <button>Register</button>
              </a>
            </div>
          </div>
        </nav>
      </div>
     
    </>
  );
};

export default ContactNavbar;
