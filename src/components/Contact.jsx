import React from "react";
import { useState } from "react";
import facebook from "../images/Vector (1).png";
import linkedin from "../images/Vector (2).png";
import instagram from "../images/Vector (3).png";
import twitter from "../images/Vector.png";
import ContactNavbar from "./ContactNavbar";
import { ToastContainer, toast } from "react-toastify";
const url = "https://backend.getlinked.ai/hackathon/contact-form";

const Contact = () => {
  const notify = () => toast("Your form has been submitted");
  const [input, setInput] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const inputFunc = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const clearInput = () => {
    setInput((prev) => {
      return {
        ...prev,
        first_name: "",
        email: "",
        message: "",
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataform = {
      first_name: input.first_name,
      email: input.email,
      message: input.message,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dataform),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      notify();
      console.log(data);
      clearInput();
      
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <ContactNavbar />
      
      <section className="contact-section">
      <ToastContainer />
        <div className="contact-container">
          <div className="contact-flex">
            <div className="contact-text">
              <h1>Get in touch</h1>
              <h4>Contact Information</h4>
              <h4>27, Alara Street Yaba 100012 Lagos State</h4>
              <h4>Call Us: 07067981819</h4>
              <div className="contact-icons">
                <h4>Share on</h4>
                <div className="contact-icons-flex">
                  <a href="#">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="#">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-box">
              <div className="contact-form-heading">
                <h1>Questions or need assistance? Let us know about it!</h1>
                <p className="desktop-none">
                  Email us below for any question related to our event
                </p>
              </div>
              <div className="contact-form">
                <form action="/contact" method="POST" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="first_name"
                    id=""
                    onChange={inputFunc}
                    value={input.first_name}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="email"
                    id=""
                    onChange={inputFunc}
                    value={input.email}
                    placeholder="Mail"
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    onChange={inputFunc}
                    value={input.message}
                  ></textarea>
                  <div className="form-btn">
                    <a href=""><button type="submit">Submit</button></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
