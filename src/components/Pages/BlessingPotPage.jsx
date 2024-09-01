import React from 'react'
import EventGifts from '../EventGifts'
import MaharajaEntrance from '../MaharajaEntrance'
import Chances from '../Chances'
import Unlock from '../Unlock'
import Calendar from '../Calendar'
import Redeem from '../Redeem'
import Resplenish from '../Resplenish'

function BlessingPotPage() {
  return (
    <div>
      <EventGifts/>
        <MaharajaEntrance/>
        <Chances/>
        <Unlock/>
        <Calendar year={2024} />
        <Redeem/>
        <Resplenish/>
      
    </div>
  )
}

export default BlessingPotPage
