import React from "react";
import ModalImage from '../images/congratulation.png'
const Modal = () => {
  return (
    <>
      <section className="modal-section">
        <div className="modal-box">
          <img src={ModalImage} alt="" />
          <div className="modal-text">
            <h1>Congratulations <br /> you have successfully Registered!</h1>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
            </p>
            <div className="modal-btn">
                <a href="/">
                    <button>Back</button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
