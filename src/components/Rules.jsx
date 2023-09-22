import React from "react";
import rulesImage from '../images/7450159 1.png'
import purpleFlare from '../images/Purple-Lens-Flare-PNG (1).png'
import greyStar from '../images/star.png'
import whiteStar from '../images/star (1).png'
const Rules = () => {
  return (
    <>
      <section className="rules-section">
        
        <div className="rules-container">
         
        <img src={purpleFlare} className="rules-purple-flare-1 purple-flare" alt="" />
          <div className="rules-flex">
            <div className="rules-text">
           <img src={greyStar} className="rules-grey-star mobile-star" alt="" />
              <h1>
                Rules and <span> Guidelines</span>
              </h1>
              <p>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
              <img src={whiteStar} className="rules-white-star mobile-star" alt="" />
            </div>
            <div className="rules-img">
            
              <img src={rulesImage} alt="" />
            </div>

          </div>
          <img src={purpleFlare} className="rules-purple-flare-2 purple-flare" alt="" />
        </div>
      </section>
      <div className="nav-border"></div>
    </>
  );
};

export default Rules;
