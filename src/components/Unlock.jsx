import React from 'react'
import unlockbtn from '../../src/assets/Unlock-btn.png'
import '../components/unlock.scss';

function Unlock() {
  return (
    <div className='unlock-bg'>

      <div className="unlock">
        <span>UNLOCK TODAY'S FRAGMENT!!</span>
        <img src={unlockbtn} alt="" />
      </div>
    </div>
  )
}

export default Unlock
