import React from 'react'
import beanicon from '../assets/beansicon.png';
import '../components/chances.scss';

function Chances() {
  return (
    <div className='beanspot'>
        <div className='bean-number'>
        <img src={beanicon} alt="" />
        <span>00,000,000</span>
        </div>
        <div className="b-textbg">
            <span>you have a chances to win above beans by signing-up daily</span>
        </div>

    </div>
  )
}

export default Chances
