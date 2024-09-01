import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
import { tab1hourlyRewards,tab1overallRewards,tab2hourlyRewards,tab2overallRewards } from "./../../js/data";
import title from '../../assets/Winexitingprizetag.png'
import '../../components/RewardsSlider/rewardslider.scss'
function SliderItems({subtabs,tab1,tab2}) {
  let rewards
  if (tab1) {
    if (subtabs.hourly) {
      rewards=tab1hourlyRewards
    }else{
      rewards=tab1overallRewards
    }
  }else if (tab2) {
    if (subtabs.hourly) {
      rewards=tab2hourlyRewards
    }else{
      rewards=tab2overallRewards
    }
  }
  return (
    <>
        <div className="rewards-slider-gifting">
          <div className="sliderItem">
            <img className="title" src={title} alt="" />
            <RewardSlider tab1={tab1}>
              {rewards &&
                rewards?.map((item, i) => {
                  let index = i + 1;
                  return (
                    <CarouselItem key={i}>
                      <div className="inner-box">
                        {/* <div className="rank ">
                          <span>
                            Top {index}{" "}
                            {index === 1 ? (
                              <sup style={{ marginLeft: "-0.7vw" }}>st</sup>
                            ) : index === 2 ? (
                              <sup style={{ marginLeft: "-0.7vw" }}>nd</sup>
                            ) : (
                              <sup style={{ marginLeft: "-0.7vw" }}>rd</sup>
                            )}
                          </span>
                          <span>{item.target}</span>
                        </div> */}
                        <div className="rewardImg r">
                          {item?.frame?.map((_items, index) => (
                            <div className="inner-container" key={index}>
                              <div className="img-box">
                                <img src={_items.pic} alt="" />
                              </div>
                              <div className="desc">{_items.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
            </RewardSlider >
          </div>
        </div>
      
    </>
  );
}

export default SliderItems;
