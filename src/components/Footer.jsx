import React from "react";
import facebook from '../images/Vector (1).png'
import linkedin from '../images/Vector (2).png'
import  instagram from '../images/Vector (3).png'
import twitter from '../images/Vector.png'
import phone from '../images/Group.png'
import location from '../images/Vector (4).png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="about-company">
              <h1>
                get<span>linked</span>
              </h1>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>

              <div className="about-flex">
                <p >Terms of Use</p>
                <div className="about-flex-border"></div>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="company-links similar">
              <h3>Useful links</h3>
              <ul>
                <li><a href="">Overview</a></li>
                <li><a href="">Timeline</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Register</a></li>
                <li>
                  Follow us <div className="social-icons-flex">
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                   <a href="#"> <img src={facebook} alt="" /></a>
                   <a href="#"> <img src={linkedin} alt="" /></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-us similar">
              <h3>Contact us</h3>
              <ul>
                <li>
                  <span>
                    <img src={phone} alt="" />
                  </span>
                  +234 6707653444
                </li>
                <li>
                  <span>
                    <img src={location} alt="" />
                  </span>
                  27,Alara Street Yaba 100012 Lagos State
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-last-text">
            <p>All rights reserved. © getlinked Ltd.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
