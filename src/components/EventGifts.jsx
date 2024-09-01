import React from "react";
import rewardsbg from "../assets/rewardsbg.png";
import eventgifttag from "../assets/eventgifttag.png";
import giftbackbg from "../assets/Giftbackbg.png";
import giftbackbg1 from "../assets/Giftbackbg1.png";
import gajraj from "../assets/Gifts/Gajraj200.png";
import mushakraj from "../assets/Gifts/mushakraj200.png";
import beanicons from "../assets/beansicon.png";
import '../components/eventgifts.scss';

function EventGifts() {
  return (
    <div className="event_gift">
      {/* <img src={rewardsbg} alt="" className='rewardsbg' /> */}
      <img src={eventgifttag} alt="" className="eventgifttag" />

      {/* <img src={giftbackbg} alt="" className='giftbackbg' />
            <img src={giftbackbg1} alt="" className='giftbackbg' /> */}
      <div className="gifts">
        <div className="box">
          <img src={gajraj} alt="" className="gajrag" />
        </div>
        <div className="box">
          <img src={mushakraj} alt="" className="mushakraj" />
        </div>
      </div>

      <div className="gift-desc">
        <div className="box">
          <span className="mus">
            Musakraj 
            
          </span>
          <span className="bean-count">25k

          <img src={beanicons} alt="" className="beanicons" />
          </span>
        </div>
        <div className="box">
          <span className="mus">
            Musakraj 
            
          </span>
          <span className="bean-count">25k

          <img src={beanicons} alt="" className="beanicons" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventGifts;
