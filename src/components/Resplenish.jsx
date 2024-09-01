import React from 'react';
import '../components/replenish.scss';
import bean from '../assets/beansicon.png';

const Resplenish = () => {
    const data = [
        { daysMissed: "1<sup>st</sup> Time", beans: "5000", total: "5000" },
        { daysMissed: "2<sup>nd</sup> Time", beans: "10,000", total: "15,000" },
        { daysMissed: "3<sup>rd</sup> Time", beans: "15,000", total: "30,000" },
        { daysMissed: "4<sup>th</sup> Time", beans: "20,000", total: "50,000" },
        { daysMissed: "5<sup>th</sup> Time", beans: "25,000", total: "75,000" },
        { daysMissed: "6<sup>th</sup> Time", beans: "30,000", total: "150,000" },
        { daysMissed: "7<sup>th</sup> Time", beans: "35,000", total: "140,000" },
        { daysMissed: "8<sup>th</sup> Time", beans: "40,000", total: "180,000" },
        { daysMissed: "9<sup>th</sup> Time", beans: "45,000", total: "225,000" },
        { daysMissed: "10<sup>th</sup> Time", beans: "50,000", total: "275,000" },
        { daysMissed: "11<sup>th</sup> Time", beans: "55,000", total: "330,000" },
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>No. of Days Missed</th>
                        <th>Beans to be Paid to Replenish</th>
                        <th>Total will be Deducted if you want to Replenish “Missed” Fragments</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td dangerouslySetInnerHTML={{ __html: row.daysMissed }} />
                            <td>{row.beans} <img src={bean} alt="bean" className="bean-icon" /></td>
                            <td>{row.total} <img src={bean} alt="bean" className="bean-icon" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Resplenish;
