import React from "react";
import introductionImage from "../images/the big idea 1.png";

const Introduction = () => {
  return (
    
   <>
    <section className="introduction-section">
        
        <div className="introduction-container">
          <div className="introduction-flex">
            <div className="introduction-img">
              <img src={introductionImage} alt="" />
            </div>
            <div className="introduction-text">
              <h1>Introduction to getlinked <span> tech Hackathon 1.0</span></h1>
              <p>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're a
                coding genius, a design maverick, or a concept wizard, you'll have
                the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>
       
      </section>
       <div className="nav-border"></div>
   </>
  );
};

export default Introduction;
