import React from "react";
import prizeImage from "../images/9486889 1.png";
import prizeTextImage from "../images/Rewards.png";

const Prize = () => {
  return (
    <>
      <section className="prize-section">
        <div className="prize-container">
        <div className="prize-text-heading">
              <div className="empty-prize">
              
              </div>
              <div className="prize-sub">
               <h1>
                  Prizes and <span>Rewards</span>
                </h1>
                <p>
                  Highlight of the prizes or rewards for winners and for
                  participants.
                </p>
               </div>
              </div>
          <div className="prize-flex">
            <div className="prize-img">
              <img src={prizeImage} alt="" />
            </div>
            <div className="prize-text">
              <div className="prize-text-img">
                <img src={prizeTextImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prize;
