import React, { useState } from 'react';
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
  const[user, setUser] = useState({
    name:'아이템 조합표',
    tier:'롤토체스 소환사 검색,',
    rank:''
  });
  return (
    <div className="tierMain">
      <div className="searchContainer">
        <div className="searchBar">
          <input type="text" placeholder="테스트 중입니다..."/>
          <button className="searchButton" onClick={() => {setUser({name:'상근띠', tier:'Challenger', rank:'I' })}}><b>검색</b></button>
        </div>
      </div>
      <div className="emblem">
        <img src={Challenger} alt="challenger" className="tierEmblem" id="tierImg"/>
      </div>
      <div className="tierRank">
        <h1 className="rankText">{user.tier} {user.rank}</h1>
      </div>
      <div>
        <h1 className="rankText">{user.name}</h1>
      </div>
    </div>
  );
}

export default Tier;
