import React from 'react'
import '../components/redeem.scss';
import submit from '../assets/submitbtn.png'

function Redeem() {
  return (
    <div className='redeem-img'>
        <div className="redmee-here">
            <div className="event-bg">
                <span>
                    REDEEM HERE !!!
                </span>
            </div>
            <span className='bottom-text'>
                Claim your missed sign-in by paying beans
            </span>
        </div>

        <div className="redeem-beans">
            <div className="redeem-boxes"><span>Remaining Missed Days</span></div>
            <div className="redeem-boxes"><span>Redeem For</span></div>
            <div className="redeem-boxes"><span>Beans Required</span></div>
        </div>

        <div className="redeem-number">
            <div className="redeem-numboxes"><span>0</span></div>
            <div className="redeem-numboxes"><span>0</span></div>
            <div className="redeem-numboxes"><span>0</span></div>
        </div>

        <img src={submit} alt="" />
      
    </div>
  )
}

export default Redeem
