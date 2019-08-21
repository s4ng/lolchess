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
import tftLogo2 from '../img/tftLogo2.png';

function Tier() {
  const[user, setUser] = useState({
    name:'아이템 조합표',
    tier:'롤토체스 소환사 검색',
    rank:'',
    point:0
  });
  const[img, setImg] = useState({img:tftLogo2});
  const[lp, setLp] = useState('');
  const[input, setInput] = useState('');
  let userTier, userRank, userPoint, tmp='';
  //테스트용 코드
  userTier='Platinum';
  userRank='III';
  userPoint=0;
  //테스트용 코드
  function fnSearch(){
    setUser({
      name:input,
      tier:userTier,
      rank:userRank,
      point:userPoint
    });
    switch(userTier){
      case 'Iron' : setImg({img:Iron}); break;
      case 'Bronze' : setImg({img:Bronze}); break;
      case 'Silver' : setImg({img:Silver}); break;
      case 'Gold' : setImg({img:Gold}); break;
      case 'Platinum' : setImg({img:Platinum}); break;
      case 'Diamond' : setImg({img:Diamond}); break;
      case 'Master' : setImg({img:Master}); break;
      case 'Grandmaster' : setImg({img:Grandmaster}); break;
      case 'Challenger' : setImg({img:Challenger}); break;
      default : setImg({img:tftLogo2}); break;
    };
    tmp = tmp +'/ ' +user.point + 'LP';
    setLp(tmp);
  }
  function handleChange(e){
    setInput(e.target.value);
  }
  function handleKeyPress(e){
    if(e.key === 'Enter'){
      fnSearch();
    }
  }
  return (
    <div className="tierMain">
      <div className="searchContainer">
        <div className="searchBar">
          <input value={input} type="text" placeholder="테스트 중입니다..." 
          onKeyPress={handleKeyPress} onChange={handleChange}/>
          <button className="searchButton" onClick={fnSearch}><b>검색</b></button>
        </div>
      </div>
      <div className="emblem">
        <img src={img.img} alt="tierEmblem" className="tierEmblem" id="tierImg"/>
      </div>
      <div className="tierRank">
        <p className="rankText">{user.tier} {user.rank} <span className="lpArea">{lp}</span></p>
      </div>
      <div>
        <p className="rankText">{user.name}</p>
      </div>
    </div>
  );
}

export default Tier;
