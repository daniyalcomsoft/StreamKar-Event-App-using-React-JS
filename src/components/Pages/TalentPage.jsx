import React, { useState } from 'react'
import EventGifts from '../EventGifts'
import Chances from '../Chances'
import SubTabs from '../SubTabs/SubTabs';
import SliderItems from '../RewardsSlider/SliderItems';
import Leaderboard from '../Leaderboard/Leaderboard';
import Info from '../Info';

function TalentPage({tab2}) {
  const [subTabs, setSubTabs] = useState({
    hourly: true,
    overall: false,
  });
  return (
    <div>
      <EventGifts/>
      <Chances/>
      <SubTabs subtabs={subTabs} setsubtabs={setSubTabs}/>
      <SliderItems subtabs={subTabs} tab2={tab2}/>
      <Info/>
      <Leaderboard/>
    </div>
  )
}

export default TalentPage
