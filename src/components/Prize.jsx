import React from "react";
import prizeImage from "../images/9486889 1.png";
import prizeTextImage from "../images/Rewards.png";
import prizeFlare from '../images/Purple-Lens-Flare-PNG (1).png'
import pinkStar from '../images/star pu.png'
import whiteStar1 from '../images/star (1).png'
import whiteStar2 from '../images/star (1).png'
import greyStar from '../images/star.png'

const Prize = () => {
  return (
    <>
      <section className="prize-section">
        <div className="prize-container">
            <img src={pinkStar} className="prize-pink mobile-star" alt="" />
            <img src={whiteStar1} className="prize-white-1 mobile-star" alt="" />
            <img src={greyStar} className="prize-grey mobile-star" alt="" />
            <img src={whiteStar2} className="prize-white-2 mobile-star" alt="" />
            <img src={prizeFlare} className="prize-flare-1 purple-flare" alt="" />
            <img src={prizeFlare} className="prize-flare-2 purple-flare" alt="" />
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
