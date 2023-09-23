import React, { useEffect } from "react";
import { useState } from "react";
import registerImage from "../images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import formImage from "../images/Part of move.png";
import ContactNavbar from "./ContactNavbar";

import Modal from "./Modal";

const url = "https://backend.getlinked.ai/hackathon/registration";
const categoryUrl = "https://backend.getlinked.ai/hackathon/categories-list";

const Register = () => {
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);


  const [input, setInput] = useState({
    email: "",
    team_name: "",
    phone_number: "",
    project_topic: "",
    category: parseInt(""),
    group_size: parseInt(""),
    privacy_poclicy_accepted: true,
  });

  const inputFunc = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const showModal = ()=>{
    setModal(true);
  }
  const removeModal = ()=>{
    setModal(false)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataform = {
      email: input.email,
      team_name: input.team_name,
      phone_number: input.phone_number,
      project_topic: input.project_topic,
      category: input.category,
      group_size: input.group_size,
      privacy_poclicy_accepted: input.privacy_poclicy_accepted,
    };
    console.log(dataform);

    const fetchApi = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dataform),
      });

      if (!response.ok) {
        return <h1>error</h1>;
      }

      const data = await response.json();
      return data;
    };

    fetchApi();
    showModal()
    clearInput();
  };
  const fetchCategory = async () => {
    const categoryRes = await fetch(categoryUrl);
    const categorydata = await categoryRes.json();
    setCategory(categorydata);
  };
  useEffect(() => {
    fetchCategory();
  });
  const clearInput = () => {
    setInput((prev) => {
      return {
        ...prev,
        email: "",
        phone_number: "",
        team_name: "",
        project_topic: "",
        category: "",
        group_size: "",
        privacy_poclicy_accepted: false,
      };
    });
  };

  return (
    <>
      <ContactNavbar />
      <div className={`modal ${modal ? "visible" : ""}`}>
        {modal && <Modal />}
      </div>
      <section className="register-section">
        <div className="register-container">
          <div className="register-flex">
            <div className="register-img">
              <img src={registerImage} alt="" />
            </div>
            <div className="register-form-box">
              <div className="register-form-heading">
                <h2>Register</h2>
                <img src={formImage} alt="" />
                <h1>Create your account</h1>
              </div>
              <div className="register-form">
                <form action="/register" method="POST" onSubmit={handleSubmit}>
                  <div className="register-row">
                    <div className="input-1 input">
                      <label htmlFor="team_name">Team's name</label>
                      <input
                        type="text"
                        name="team_name"
                        id="team_name"
                        onChange={inputFunc}
                        value={input.team_name}
                        placeholder="Enter the name of your group"
                        required
                      />
                    </div>
                    <div className="input-2 input">
                      <label htmlFor="phone_number">Phone</label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        onChange={inputFunc}
                        value={input.phone_number}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="input-1 input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={inputFunc}
                        value={input.email}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="input-2 input">
                      <label htmlFor="project_topic">Project Topic</label>
                      <input
                        type="text"
                        name="project_topic"
                        id="project_topic"
                        onChange={inputFunc}
                        value={input.project_topic}
                        placeholder="What is your group's project topic"
                        required
                      />
                    </div>
                  </div>
                  <div className="register-row">
                    <div className="input-1 input">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        value={input.category}
                        onChange={inputFunc}
                        required
                      >
                        {category.map((cat, index) => {
                          return (
                            <option value={cat.id} key={index}>
                              {cat.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="input-2 input">
                      <label htmlFor="group_size">Group size</label>
                      <select
                        name="group_size"
                        id="group_size"
                        value={input.group_size}
                        onChange={inputFunc}
                        required
                      >
                        <option value="1">10</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <p>
                    Please review your registration details before submitting
                  </p>
                  <div className="agree-flex">
                    <input
                      type="checkbox"
                      name="privacy_policy_accepted"
                      id="privacy_policy_accepted"
                      required
                    />
                    <p>
                      I agree with the event terms and conditions and privacy
                      policy
                    </p>
                  </div>
                  <div className="register-form-btn">
                    <a href="">
                      <button type="submit">Register Now</button>
                    </a>
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
export default Register;
