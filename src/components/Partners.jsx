import React from 'react'
import partnersImage from '../images/Partner and Sponsors.png'

const Partners = () => {
  return (
    <>
    <section className="partners-section">
       <div className="partners-container">
       <div className="partners-heading">
            <h1>Partners and Sponsors</h1>
            <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
        </div>
        <div className="partners-img-box">
            <img src={partnersImage} alt="" />
        </div>
       </div>
        
    </section>
    </>
  )
}

export default Partners