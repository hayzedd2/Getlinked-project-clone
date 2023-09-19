import React from "react";
import faqImage from '../images/cwok_casual_21 1.png'

const FAQ = () => {
  return (
    <>
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-flex">
            <div className="faq-text">
              <div className="faq-heading">
                <h1>frequently asked <span>questions</span></h1>
                <p>
                  We got answers to the questions that you might want to ask
                  about getlinked Hackathon 1.0
                </p>
              </div>
              <div className="faq-accordion">
                <ul>
                  <li>
                    Can I work on a project I started before the hackathon?{" "}
                    <span>+</span>
                  </li>
                  <li>
                  What happens if I need help during the hackathon?{" "}
                    <span>+</span>
                  </li>
                  <li>
                  What happens if I don't have an idea for a project?{" "}
                    <span>+</span>
                  </li>
                  <li>
                  Can I join a team or do I have to come with one?{" "}
                    <span>+</span>
                  </li>
                  <li>
                  What happens after the hackathon ends?{" "}
                    <span>+</span>
                  </li>
                  <li>
                  Can I work on a project I started before the hackathon?{" "}
                    <span>+</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq-img">
                <img src={faqImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
