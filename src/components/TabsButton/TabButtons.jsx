import React from 'react'
import UserPage from '../Pages/UserPage';
import TalentPage from '../Pages/TalentPage';
import BlessingPotPage from '../Pages/BlessingPotPage';
import talent from '../../assets/Talent btn.png';
import user from '../../assets/User btn.png';
import blessing from '../../assets/blessing pot btn.png';
import '../../components/TabsButton/tabbuttons.scss';

function TabButtons({mainTabs, setMainTabs}) {
  const tabSwitch = (id) => {
    let newCat = {
      tab1: false,
      tab2: false,
      tab3: false,
    };
    setMainTabs({ ...newCat, [id]: true });
  };

  const renderingTabs = () => {
    switch (true) {
      case mainTabs.tab1:
        return <UserPage tab1={mainTabs.tab1} />;
      case mainTabs.tab2:
        return <TalentPage tab2={mainTabs.tab2} />;
      case mainTabs.tab3:
        return <BlessingPotPage tab3={mainTabs.tab3} />;
    }
  };
  return (
    <>
      <div className="tab-buttons ">
        <button  onClick={() => tabSwitch("tab1")} className={mainTabs.tab1 ? "gray-0" : "gray-1"}>
          <img src={user} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab2")} className={mainTabs.tab2 ? "gray-0" : "gray-1"}>
          <img src={talent} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab3")} className={mainTabs.tab3 ? "gray-0" : "gray-1"}>
          <img src={blessing} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  )
}

export default TabButtons
