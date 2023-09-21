import React from "react";
import privacyImage from '../images/08 1.png'
import listImage from '../images/list terms.png'
const Privacy = () => {
  return (
    <>
    <div className="nav-border"></div>
      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-flex">
            <div className="privacy-text">
              <div className="privacy-text-heading">
                <h1>
                  Privacy Policy and <span> Terms</span>
                </h1>
                <p>Last updated on September 12, 2023</p>
                <h6>
                  Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant
                </h6>
              </div>
              <div className="privacy-text-box">
                <div className="upper-text">
                  <p>
                    At getlinked tech Hackathon 1.0, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                  </p>
                </div>
                <div className="lower-text">
                  <div className="lower-text-heading">
                    <h3>Licensing Policy</h3>
                    <p>Here are terms of our Standard License:</p>
                  </div>
                  <div className="lower-text-list">
                    <ul>
                      <li>
                        <span>
                          <img src={listImage} alt="" />
                        </span>
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </li>
                      <li>
                        <span>
                          <img src={listImage} alt="" />
                        </span>
                        You are licensed to use the item available at any free
                        source sites, for your project development
                      </li>
                    </ul>
                  </div>
                 <div className="privacy-button">
                 <a href="#">
                    <button>Read More</button>
                  </a>
                 </div>
                </div>
              </div>
            </div>
            <div className="privacy-img">
                <img src={privacyImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
