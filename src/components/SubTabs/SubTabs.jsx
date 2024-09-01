import React from "react";
import houlry from "../../assets/Hourlybtn.png";
import houlryunselect from "../../assets/Hourlyunselectbtn.png";
import overall from "../../assets/Overallbtn.png";
import overallunselect from "../../assets/overallunselectbtn.png";
import "../../components/SubTabs/subtabs.scss";

function SubTabs({ subtabs, setsubtabs }) {
  const tabSwitch = (id) => {
    let newCat = {
      hourly: false,
      overall: false,
    };
    setsubtabs({ ...newCat, [id]: true });
  };
  return (
    <div className="sub-buttons ">
      <button onClick={() => tabSwitch("hourly")}>
        <img src={subtabs.hourly ? houlry : houlryunselect} alt="" />
      </button>
      <button onClick={() => tabSwitch("overall")}>
        <img src={subtabs.overall ? overall : overallunselect} alt="" />
      </button>
    </div>
  );
}

export default SubTabs;
