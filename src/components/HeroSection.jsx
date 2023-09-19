import React from "react";
import blurImage from "../images/Purple-Lens-Flare-PNG (1).png";
import absoluteImage from "../images/Image 1.png";
import manImage from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import vectorImage from "../images/Vector 4.png";
import creativeImage from "../images/Creative 1.png";
import chainImage from "../images/chain-9365116-7621444.png";
import sparkImage from "../images/1f4a5.png";
import mobileImage from '../images/Hackathon guy.png'
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="right-text">
        <h2>
          Igniting a Revolution in{" "}
          <span className="relative-right-text">
            {" "}
            HR Innovation{" "}
            <span>
              <img src={vectorImage} className="vector-1" alt="" />
            </span>
          </span>
        </h2>{" "}
      </div>
      <div className="hero-section-grid">
        <div className="hero-section-text">
          <div className="light-up">
            <img src={blurImage} className="light-up-img" alt="" />
          </div>
          <h1>
           
            getlinked{" "}
            <span className="relative-bulb">
              Tech{" "}
              <div className="creative">
              <img src={creativeImage} className="vector-2 small-mobile-icons" alt="" />
            </div>
            </span>{" "}
         <span className="mobile-increase">   Hackathon <span className="relative-chain" style={{ color: '#d434fe'}}>1.0  <div className="chain-spark">
                <img src={chainImage} alt="" className="chain small-mobile-icons" />
                <img src={sparkImage} alt="" className="spark small-mobile-icons" />
              </div></span></span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <a href="">
            <button>Register</button>
          </a>
          <div className="count-down-text">
            <div>
              <h3>
                00<span>H</span>
              </h3>
            </div>
            <div>
              <h3>
                00<span>M</span>
              </h3>
            </div>
            <div>
              <h3>
                00<span>S</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hero-section-img">
          <div className="mobile-hero-section-img">
            <img src={mobileImage} alt="" />
          </div>
          <div className="mobile-none">
          <div className="main-img">
            <img src={manImage} alt="" />
          </div>
          <div className="metrix-abs-1">
            <img src={absoluteImage} alt="" />
          </div>
          <div className="metrix-abs-2">
            <img src={blurImage} alt="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
