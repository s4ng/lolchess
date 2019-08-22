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
import ApiDefault from '../apiDefault';
import axios from 'axios';

function Tier() {
  const[name, setName] = useState('아이템 조합표');
  const[user, setUser] = useState({
    tier:'롤토체스 소환사 검색',
    rank:'',
    point:'',
    img:tftLogo2
  });
  const[img, setImg] = useState({img:tftLogo2});
  const[input, setInput] = useState('');

  
  function getLolData(){
    let summonerUrl, leagueUrl, index;

    summonerUrl = `${ApiDefault}/lol/summoner/v4/summoners/by-name/${input}?api_key=${ApiDefault.key}`;
    axios.get(summonerUrl)
    .then (summonerData => {
      leagueUrl = `${ApiDefault}/lol/league/v4/entries/by-summoner/${summonerData.data.id}?api_key=${ApiDefault.key}`;
      axios.get(leagueUrl)
      .then (leagueData => {
        for(let i = 0; i < leagueData.data.length; i++){
          if(leagueData.data[i].queueType === 'RANKED_TFT'){
            index = i;
            break;
          }
        }
        setName(input);
        setUser({
          tier:leagueData.data[index].tier ,
          rank:leagueData.data[index].rank + ' -' ,
          point:'- ' + leagueData.data[index].leaguePoints + 'LP'
        })
        switch(leagueData.data[index].tier){
          case 'IRON' : setImg({img:Iron}); break;
          case 'BRONZE' : setImg({img:Bronze}); break;
          case 'SILVER' : setImg({img:Silver}); break;
          case 'GOLD' : setImg({img:Gold}); break;
          case 'PLATINUM' : setImg({img:Platinum}); break;
          case 'DIAMOND' : setImg({img:Diamond}); break;
          case 'MASTER' : setImg({img:Master}); break;
          case 'GRANDMASTER' : setImg({img:Grandmaster}); break;
          case 'CHALLENGER' : setImg({img:Challenger}); break;
          default : setImg({img:tftLogo2}); break;
        };
      }).catch( error => alert('전략적 팀 전투 데이터가 없습니다!'));
    }).catch( error => alert('소환사 데이터가 없습니다!'));
  }

  function handleChange(e){
    setInput(e.target.value);
  }
  function handleKeyPress(e){
    if(e.key === 'Enter'){
      getLolData();
    }
  }
  return (
    <div className="tierMain">
      <div className="searchContainer">
        <div className="searchBar">
          <input value={input} type="text" placeholder="소환사 이름..." 
          onKeyPress={handleKeyPress} onChange={handleChange}/>
          <button className="searchButton" onClick={getLolData}><b>검색</b></button>
        </div>
      </div>
      <div className="emblem">
        <img src={img.img} alt="tierEmblem" className="tierEmblem" id="tierImg"/>
      </div>
      <div className="tierRank">
        <p className="rankText">{user.tier} {user.rank}{user.point}</p>
      </div>
      <div>
        <p className="rankText">{name}</p>
      </div>
    </div>
  );
}

export default Tier;
