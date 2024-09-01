import React, { useState } from 'react'
import Lightup from '../Lightup'
import Unlock from '../Unlock'
import MissedChance from '../MissedChance'
import SubTabs from '../SubTabs/SubTabs'
import Chances from '../Chances'
import SliderItems from '../RewardsSlider/SliderItems'
import Leaderboard from '../Leaderboard/Leaderboard'
import Puzzle from './Puzzle'

function UserPage({tab1}) {
  const [subTabs, setSubTabs] = useState({
    hourly: true,
    overall: false,
  });
  return (
    <div>
      <Lightup/>
      <Unlock/>
      <Puzzle/>
      <MissedChance/>
      <SubTabs subtabs={subTabs} setsubtabs={setSubTabs}/>
      <Chances/>
      <SubTabs subtabs={subTabs} setsubtabs={setSubTabs}/>
      <SliderItems subtabs={subTabs} singleItem={true} tab1={tab1}/>
      <Leaderboard/>
    </div>
  )
}

export default UserPage
