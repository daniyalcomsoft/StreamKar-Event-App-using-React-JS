import React, { useState } from 'react';
import guide from "../../assets/Guide btn.png";
import '../../components/popupbuttons/guide.scss'; // Import your SCSS file
import guidetag from '../../assets/popupandrest/Guide-tag.png'
import close from '../../assets/popupandrest/Close-btn.png'


function Guide() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <div className='guide-btn' onClick={togglePopup}>
        <img src={guide} alt="Guide Button" className='guide' />
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img src={guidetag} alt="" className='guide' />
            <h2>Guide Title</h2>
            <div className="scrollable-content">
              <h4>MODAK GIFT RULES</h4>
            <p>This will be a LEADERBOARD POINT GIFT which will add points to the leaderbpard. To receive this gift in the backpack, a user must spend on the event gift unlock the fragment on the webpage daily of redeem</p>
            </div>

            <img src={close} className="close-btn" onClick={togglePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Guide;
