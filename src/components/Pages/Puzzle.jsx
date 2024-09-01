import React from 'react'
import '../../components/Pages/puzzle.scss'
import one from '../../assets/Puzzel/1.png'
import two from '../../assets/Puzzel/2.png'
import three from '../../assets/Puzzel/3.png'
import four from '../../assets/Puzzel/4.png'
import five from '../../assets/Puzzel/5.png'
import six from '../../assets/Puzzel/6.png'
import seven from '../../assets/Puzzel/7.png'
// import eight from '../../assets/Puzzel/8.png'
// import nine from '../../assets/Puzzel/9.png'
import ten from '../../assets/Puzzel/10.png'
import eleven from '../../assets/Puzzel/11.png'
import twelve from '../../assets/Puzzel/12.png'

function Puzzle() {
  return (
    <div className='puzzle'>
        <div className="row1">
            <img src={one} alt="" className='one' />
            <img src={two} alt="" className='two' />
            <img src={three} alt="" className='three' />
        </div>
        <div className="row2">
            <img src={four} alt="" className='four' />
            <img src={five} alt="" className='five' />
            <img src={six} alt="" className='six' />
        </div>
        <div className="row3">
            <img src={seven} alt="" className='seven' />
        </div>
        <div className="row4">
            <img src={ten} alt="" className='ten' />
            <img src={eleven} alt="" className='eleven' />
            <img src={twelve} alt="" className='twelve' />
        </div>
      
    </div>
  )
}

export default Puzzle
