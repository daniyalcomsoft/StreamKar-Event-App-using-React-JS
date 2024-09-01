import React, { useEffect, useState } from 'react';
import '../Leaderboard/leaderboard.scss'
import lboardtag from '../../assets/Leaderboardtag.png'
import SubTabs from '../SubTabs/SubTabs';
import currentbtn from '../../assets/current-btn.png'
import prevbtn from '../../assets/Previous-btn.png'
import goldframe from '../../assets/Gold-frame.png'
import bronzeframe from '../../assets/Bronze-frame.png'
import star from '../../assets/Staricon.png'
import lboardframe from '../../assets/leaderboard-frame.png'
import seemore from '../../assets/seemore.png'
import seeless from '../../assets/seeless.png'

const Leaderboard = () => {
    const [subtabs, setSubtabs] = useState({
        hourly: true,
        overall: false,
    });

    const [lbSubBtns, setLbSubBtns] = useState({
        current: true,
        previous: false,
    });

    const [showMore, setShowMore] = useState(false); // State for showing more/less

    const leaderboardData = {
        hourly: {
            current: [
                { name: 'Player 1', estRewards: 90000 },
                { name: 'Player 2', estRewards: 80000 },
                { name: 'Player 3', estRewards: 70000 },
                { name: 'Player 4', estRewards: 60000 },
                { name: 'Player 5', estRewards: 50000 },
                { name: 'Player 6', estRewards: 40000 },
                { name: 'Player 7', estRewards: 30000 },
                { name: 'Player 8', estRewards: 20000 },
                { name: 'Player 9', estRewards: 10000 },
                { name: 'Player 10', estRewards: 11000 }, // Added extra for demonstration
                // ... other players
            ],
            previous: [
                { name: 'Player 1', estRewards: 10000 },
                { name: 'Player 2', estRewards: 20000 },
                { name: 'Player 3', estRewards: 30000 },
                { name: 'Player 4', estRewards: 40000 },
                { name: 'Player 5', estRewards: 50000 },
                { name: 'Player 6', estRewards: 60000 },
                { name: 'Player 7', estRewards: 70000 },
                { name: 'Player 8', estRewards: 80000 },
                { name: 'Player 9', estRewards: 90000 },
                { name: 'Player 10', estRewards: 10000 }, // Added extra for demonstration
                // ... other players
            ]
        },
        overall: {
            current: [
                { name: 'Player A', estRewards: 60000 },
                { name: 'Player A', estRewards: 50000 },
                { name: 'Player A', estRewards: 40000 },
                { name: 'Player A', estRewards: 30000 },
                { name: 'Player A', estRewards: 20000 },
                // ... other players
            ],
            previous: [
                { name: 'Player B', estRewards: 60000 },
                { name: 'Player B', estRewards: 50000 },
                { name: 'Player B', estRewards: 40000 },
                { name: 'Player B', estRewards: 30000 },
                { name: 'Player B', estRewards: 20000 },
                // ... other players
            ]
        }
    };

    const activeTab = subtabs.hourly ? 'hourly' : 'overall';
    const activeData = lbSubBtns.current ? 'current' : 'previous';

    const lbSubBtnsSwitch = (id) => {
        setLbSubBtns({
            current: id === 'current',
            previous: id === 'previous',
        });
    };

    const handleToggle = () => {
        setShowMore(!showMore); // Toggle between showing more and less
    };

    // Ensure at least 9 players are always displayed
    const displayedData = showMore
        ? leaderboardData[activeTab][activeData]
        : leaderboardData[activeTab][activeData].slice(0, 9);

    return (
        <div className="leaderboard">
            <img src={lboardtag} className='lboardtag' alt="" />
            <div className="tabs">
                <SubTabs subtabs={subtabs} setsubtabs={setSubtabs} />
                <div className="bc-cp">
                    <div className="two-btn">
                        <button onClick={() => lbSubBtnsSwitch("current")}>
                            {lbSubBtns.current && <img src={currentbtn} alt="Current Button" className="cb_img" />}
                        </button>
                        <button onClick={() => lbSubBtnsSwitch("previous")}>
                            {lbSubBtns.previous && <img src={prevbtn} alt="Previous Button" className="pb_img" />}
                        </button>
                    </div>
                </div>
                <div className="leaderboard-data" style={!showMore?{overflow:"hidden"}:{overflow:"scroll"}}>
                    {/* Display top three */}
                    {displayedData.slice(0, 3).map((item, index) => (
                        <div key={index} className="top-three">
                            <span className='postion'>Top {index + 1}</span>
                            <div className="pos-details">
                                <img src={goldframe} className='gold-frame' alt="" />
                                <div className="name-lev">
                                    <span>{item.name}</span>
                                    <span>Lv 51</span>
                                </div>
                                <span className='rewards'>Est. Rewards</span>
                                <img src={star} alt="" className='star' />
                                <span className='number'>{item.estRewards}</span>
                            </div>
                        </div>
                    ))}

                    {/* Display rest of the leaderboard */}
                    {displayedData.slice(3).map((item, index) => (
                        <div key={index} className="rest-of">
                            <div className="pos-details">
                                <img src={lboardframe} className='lboardframe' alt="" />
                                <div className="name-lev">
                                    <span>{item.name}</span>
                                    <span>Lv 51</span>
                                </div>
                                <span className='rewards'>Est. Rewards</span>
                                <img src={star} alt="" className='star' />
                                <span className='number'>{item.estRewards}</span>
                            </div>
                        </div>
                    ))}

                </div>
                    <button className='see-btn' onClick={handleToggle}>
                        <img src={showMore ? seeless : seemore} alt="Toggle" />
                    </button>
            </div>
        </div>
    );
};

export default Leaderboard;
