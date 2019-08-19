import React from 'react';
import './core.css';
import Aatrox from '../img/item/core/Aatrox.png';
import Assassin from '../img/item/core/Assassin.png';
import BloodThirster from '../img/item/core/BloodThirster.png';
import CursedBlade from '../img/item/core/CursedBlade.png';
import DragonsClaw from '../img/item/core/DragonsClaw.png';
import FantomDancer from '../img/item/core/FantomDancer.png';
import ForceOfNature from '../img/item/core/ForceOfNature.png';
import FrozenHeart from '../img/item/core/FrozenHeart.png';
import GuardianAngel from '../img/item/core/GuardianAngel.png';
import GuinsooRageblade from '../img/item/core/GuinsooRageblade.png';
import HammerOfIce from '../img/item/core/HammerOfIce.png';
import HextechGunblade from '../img/item/core/HextechGunblade.png';
import Hush from '../img/item/core/Hush.png';
import InfinityEdge from '../img/item/core/InfinityEdge.png';
import IonicSpark from '../img/item/core/IonicSpark.png';
import KnightVow from '../img/item/core/KnightVow.png';
import LocketOfTheIronSolari from '../img/item/core/LocketOfTheIronSolari.png';
import LudenEcho from '../img/item/core/LudenEcho.png';
import Morellonomicon from '../img/item/core/Morellonomicon.png';
import RabadonDeathcap from '../img/item/core/RabadonDeathcap.png';
import RapidFirecannon from '../img/item/core/RapidFirecannon.png';
import RedBuff from '../img/item/core/RedBuff.png';
import Redemption from '../img/item/core/Redemption.png';
import RunaanHurricane from '../img/item/core/RunaanHurricane.png';
import SeraphEmbrace from '../img/item/core/SeraphEmbrace.png';
import SpearOfShojin from '../img/item/core/SpearOfShojin.png';
import StatikkShiv from '../img/item/core/StatikkShiv.png';
import SwordBreaker from '../img/item/core/SwordBreaker.png';
import SwordMan from '../img/item/core/SwordMan.png';
import SwordOfTheDivine from '../img/item/core/SwordOfTheDivine.png';
import Thornmail from '../img/item/core/Thornmail.png';
import TitanicHydra from '../img/item/core/TitanicHydra.png';
import WarmogArmor from '../img/item/core/WarmogArmor.png';
import WestWind from '../img/item/core/WestWind.png';
import Yuumi from '../img/item/core/Yuumi.png';
import ZekesHerald from '../img/item/core/ZekesHerald.png';
import BFSword from '../img/item/material/BFSword.png';
import ChainVest from '../img/item/material/ChainVest.png';
import GiantBelt from '../img/item/material/GiantBelt.png';
import LargeRod from '../img/item/material/LargeRod.png';
import NegatronCloak from '../img/item/material/NegatronCloak.png';
import RecurveBow from '../img/item/material/RecurveBow.png';
import Spatula from '../img/item/material/Spatula.png';
import TearGoddes from '../img/item/material/TearGoddes.png';



function Core() {
  return (
    <div className="coreMain">
      <div className="coreRow">
        <div className="coreImg">
          <img src={Aatrox} alt="Aatrox" className="itemImg"/>
          <span>
            악마
            <div>
              <img src={Spatula} alt="Spatula"/><img src={TearGoddes} alt="TearOfGoddes"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={Assassin} alt="Assassin" className="itemImg"/>
          <span>
            암살자
            <div>
              <img src={Spatula} alt="Spatula"/><img src={BFSword} alt="BFSword"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={BloodThirster} alt="BloodThirster" className="itemImg"/>
          <span>
            피바라기
            <div>
              <img src={BFSword} alt="BFSword"/><img src={NegatronCloak} alt="NegatronCloak"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={CursedBlade} alt="CursedBlade" className="itemImg"/>
          <span>
            저주받은 칼날
            <div>
              <img src={RecurveBow} alt="RecurveBow"/><img src={NegatronCloak} alt="NegatronCloak"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={DragonsClaw} alt="DragonsClaw" className="itemImg"/>
          <span>
            용의 발톱
            <div>
              <img src={NegatronCloak} alt="NegatronCloak"/><img src={NegatronCloak} alt="NegatronCloak"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={FantomDancer} alt="FantomDancer" className="itemImg"/>
          <span>
            유령무희
            <div>
              <img src={RecurveBow} alt="RecurveBow"/><img src={ChainVest} alt="chainvest"/>
            </div>
          </span>
        </div>
      </div>
      <div className="coreRow">
        <div className="coreImg">
          <img src={ForceOfNature} alt="ForceOfNature" className="itemImg"/>
          <span>
            대자연의 힘
            <div>
              <img src={Spatula} alt="spatula"/><img src={Spatula} alt="spatula"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={FrozenHeart} alt="FrozenHeart" className="itemImg"/>
          <span>
            얼어붙은 심장
            <div>
              <img src={ChainVest} alt="chainvest"/><img src={TearGoddes} alt="chainvest"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={GuardianAngel} alt="GuardianAngel" className="itemImg"/>
          <span>
            수호천사
            <div>
              <img src={BFSword} alt="bfSword"/><img src={ChainVest} alt="chainVest"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={GuinsooRageblade} alt="GuinsooRageblade" className="itemImg"/>
          <span>
            구인수의 격노검
            <div>
              <img src={RecurveBow} alt="RecurveBow"/><img src={LargeRod} alt="LargeRod"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={HammerOfIce} alt="HammerOfIce" className="itemImg"/>
          <span>
            빙하
            <div>
              <img src={Spatula} alt="spatula"/><img src={GiantBelt} alt="giantbelt"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={HextechGunblade} alt="HextechGunblade" className="itemImg"/>
          <span>
            마법공학 총검
            <div>
              <img src={BFSword} alt="bfSword"/><img src={LargeRod} alt="largeRod"/>
            </div>
          </span>
        </div>
      </div>
      <div className="coreRow">
        <div className="coreImg">
          <img src={Hush} alt="Hush" className="itemImg"/>
          <span>
            침묵
            <div>
              <img src={TearGoddes} alt="tearOfGoddes"/><img src={NegatronCloak} alt="negatronCloak"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={InfinityEdge} alt="InfinityEdge" className="itemImg"/>
          <span>
            무한의 대검
            <div>
              <img src={BFSword} alt="bfSword"/><img src={BFSword} alt="bfSword"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={IonicSpark} alt="IonicSpark" className="itemImg"/>
          <span>
            이온 충격기
            <div>
              <img src={NegatronCloak} alt="negatronCloak"/><img src={LargeRod} alt="largeRod"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={KnightVow} alt="KnightVow" className="itemImg"/>
          <span>
            기사
            <div>
              <img src={Spatula} alt="spatula"/><img src={ChainVest} alt="chainVest"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={LocketOfTheIronSolari} alt="LocketOfTheIronSolari" className="itemImg"/>
          <span>
            강철의 솔라리 펜던트
            <div>
              <img src={ChainVest} alt="chainVest"/><img src={LargeRod} alt="largeRod"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={LudenEcho} alt="LudenEcho" className="itemImg"/>
          <span>
            루덴의 메아리
            <div>
              <img src={LargeRod} alt="largeRod"/><img src={TearGoddes} alt="tearOfGoddes"/>
            </div>
          </span>
        </div>
      </div>
      <div className="coreRow">
        <div className="coreImg">
          <img src={Morellonomicon} alt="Morellonomicon" className="itemImg"/>
          <span>
            모렐로노미콘
            <div>
              <img src={LargeRod} alt="largeRod"/><img src={GiantBelt} alt="giantBelt"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={RabadonDeathcap} alt="RabadonDeathcap" className="itemImg"/>
          <span>
            라바돈의 죽음모자
            <div>
              <img src={LargeRod} alt="largeRod"/><img src={LargeRod} alt="largeRod"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={RapidFirecannon} alt="RapidFirecannon" className="itemImg"/>
          <span>
            고속 연사포
            <div>
              <img src={RecurveBow} alt="recurveBow"/><img src={RecurveBow} alt="recurveBow"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={RedBuff} alt="RedBuff" className="itemImg"/>
          <span>
            붉은 덩굴정령
            <div>
              <img src={GiantBelt} alt="giantBelt"/><img src={ChainVest} alt="chainVest"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={Redemption} alt="Redemption" className="itemImg"/>
          <span>
            구원
            <div>
              <img src={GiantBelt} alt="giantBelt"/><img src={TearGoddes} alt="tearOfGoddes"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={RunaanHurricane} alt="RunaanHurricane" className="itemImg"/>
          <span>
            루난의 허리케인
            <div>
              <img src={Spatula} alt="spatula"/><img src={NegatronCloak} alt="negatronCloak"/>
            </div>
          </span>
        </div>
      </div>
      <div className="coreRow">
        <div className="coreImg">
          <img src={SeraphEmbrace} alt="SeraphEmbrace" className="itemImg"/>
          <span>
            대천사의 포옹
            <div>
              <img src={TearGoddes} alt="tearOfGoddes"/><img src={TearGoddes} alt="tearOfGoddes"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={SpearOfShojin} alt="SpearOfShojin" className="itemImg"/>
          <span>
            쇼진의 창
            <div>
              <img src={BFSword} alt="bfSword"/><img src={TearGoddes} alt="tearOfGoddes"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={StatikkShiv} alt="StatikkShiv" className="itemImg"/>
          <span>
            스태틱의 단검
            <div>
              <img src={RecurveBow} alt="recurveBow"/><img src={TearGoddes} alt="tearOfGoddes"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={SwordBreaker} alt="SwordBreaker" className="itemImg"/>
          <span>
            파쇄검
            <div>
              <img src={ChainVest} alt="chainVest"/><img src={NegatronCloak} alt="negatronCloak"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={SwordMan} alt="SwordMan" className="itemImg"/>
          <span>
            검사
            <div>
              <img src={Spatula} alt="spatula"/><img src={RecurveBow} alt="recurveBow"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={SwordOfTheDivine} alt="SwordOfTheDivine" className="itemImg"/>
          <span>
            신성의 검
            <div>
              <img src={BFSword} alt="bfSword"/><img src={RecurveBow} alt="recurveBow"/>
            </div>
          </span>
        </div>
      </div>
      <div className="coreRow">
        <div className="coreImg">
          <img src={Thornmail} alt="Thornmail" className="itemImg"/>
          <span>
            가시 갑옷
            <div>
              <img src={ChainVest} alt="chainVest"/><img src={ChainVest} alt="chainVest"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={TitanicHydra} alt="TitanicHydra" className="itemImg"/>
          <span>
            거대한 히드라
            <div>
              <img src={GiantBelt} alt="giantBelt"/><img src={RecurveBow} alt="recurveBow"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={WarmogArmor} alt="WarmogArmor" className="itemImg"/>
          <span>
            워모그의 갑옷
            <div>
              <img src={GiantBelt} alt="giantBelt"/><img src={GiantBelt} alt="giantBelt"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={WestWind} alt="WestWind" className="itemImg"/>
          <span>
            서풍
            <div>
              <img src={GiantBelt} alt="giantBelt"/><img src={NegatronCloak} alt="giantBelt"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={Yuumi} alt="Yuumi" className="itemImg"/>
          <span>
            마법사
            <div>
              <img src={Spatula} alt="spatula"/><img src={LargeRod} alt="largeRod"/>
            </div>
          </span>
        </div>
        <div className="coreImg">
          <img src={ZekesHerald} alt="ZekesHerald" className="itemImg"/>
          <span>
            지크의 전령
            <div>
              <img src={BFSword} alt="bfSword"/><img src={GiantBelt} alt="giantBelt"/>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Core;
