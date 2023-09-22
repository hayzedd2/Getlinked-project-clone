import React from 'react'
import partnersImage from '../images/Partner and Sponsors.png'
import partnerFlare from '../images/Purple-Lens-Flare-PNG (1).png'
import partnerPink from '../images/star pu.png'
import partnerWhite from '../images/star (1).png'

const Partners = () => {
  return (
    <>
    <section className="partners-section">
       <div className="partners-container">
        <img src={partnerFlare} className='partner-flare-1 purple-flare' alt="" />
        <img src={partnerPink} className='partner-pink-1 mobile-star' alt="" />
        <img src={partnerWhite} className='partner-white mobile-star' alt="" />
        <img src={partnerPink} className='partner-pink-2 mobile-star' alt="" />
        <img src={partnerFlare} className='partner-flare-2 purple-flare' alt="" />
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