import React from 'react'
import modak from '../assets/Modak.png'
import '../components/lightup.scss'

function Lightup() {
  return (
    <div className='ligh-up'>
        Sign-in to get 2 modaks <span className='modak'><img src={modak} alt="" /></span> + 20 everyday 
        <br /><span className='bt-text'>Light up all fragmets</span>
    </div>
  )
}

export default Lightup
