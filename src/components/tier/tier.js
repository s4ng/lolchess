import React from 'react';
import './tier.css';
import Iron from '../img/tier/Iron.png';
import Bronze from '../img/tier/Bronze.png';
import Silver from '../img/tier/Silver.png';
import Gold from '../img/tier/Gold.png';
import Platinum from '../img/tier/Platinum.png';
import Diamond from '../img/tier/Diamond.png';
import Master from '../img/tier/Master.png';
import Grandmaster from '../img/tier/Grandmaster.png';
import Challenger from '../img/tier/Challenger.png';

function Tier() {
  let userName="상근띠";
  return (
    <div className="tierMain">
      <div className="searchContainer">
        <div className="searchBar">
          <input type="text" placeholder="테스트 중입니다..."/>
          <button className="searchButton"><b>검색</b></button>
        </div>
      </div>
      <div className="emblem">
        <img src={Challenger} alt="challenger" className="tierEmblem"/>
      </div>
      <div className="tierRank">
        <h1 className="rankText">Challenger I</h1>
      </div>
      <div>
        <h1 className="rankText">{userName}</h1>
      </div>
    </div>
  );
}

export default Tier;
