import React from 'react'
import maharaja from '../assets/Rewards/Maharaja-Entrance.png'
import '../components/maharajaentrance.scss';
function MaharajaEntrance() {
  return (
    <div className='maharaja-entrance'>
      <span>By unlocking fragemts each day, you can win MAHARAJA ENTRANCE <br /> * 3 DAYS + 50 MODAKS</span>
      <img src={maharaja} alt="" />
    </div>
  )
}

export default MaharajaEntrance
