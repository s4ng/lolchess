import React from 'react';
import './material.css';
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

function Material() {
  return (
    <div className="materialMain">
      <div className="mRow">
        <div className="mItem"></div>
        <div className="mItem">
          <img src={BFSword} alt="BFSword" className="mItemImg"/>
          <span>
            <p>BF대검</p>
            <p>공격력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={RecurveBow} alt="recurveBow" className="mItemImg"/>
          <span>
            <p>곡궁</p>
            <p>공격속도 +20%</p>
          </span>
        </div>
        <div className="mItem">
          <img src={ChainVest} alt="chainVest" className="mItemImg"/>
          <span>
            <p>쇠사슬 조끼</p>
            <p>방어력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={NegatronCloak} alt="negatronCloak" className="mItemImg"/>
          <span>
            <p>음전자 망토</p>
            <p>마법저항력 +20</p>  
          </span>
        </div>
        <div className="mItem">
          <img src={LargeRod} alt="largeRod" className="mItemImg"/>
          <span>
            <p>쓸데없이 큰 지팡이</p>
            <p>주문력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={TearGoddes} alt="tearOfGoddes" className="mItemImg"/>
          <span>
            <p>여신의 눈물</p>
            <p>시작 마나 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={GiantBelt} alt="giantBelt" className="mItemImg"/>
          <span>
            <p>거인의 허리띠</p>
            <p>체력 +200</p>
          </span>
        </div>
        <div className="mItem">
          <img src={Spatula} alt="spatula" className="mItemImg"/>
          <span>
            <p>뒤집개</p>
            <p>특별한 능력이 있을지도..</p>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={BFSword} alt="BFSword" className="mItemImg"/>
          <span>
            <p>BF대검</p>
            <p>공격력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={InfinityEdge} alt="infinityEdge" className="mItemImg"/>
          <span>
            <p>무한의 대검</p>
            <img src={BFSword} alt="bf"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SwordOfTheDivine} alt="divineSword" className="mItemImg"/>
          <span>
            <p>신성의 검</p>
            <img src={BFSword} alt=""/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={GuardianAngel} alt="guardianAngel" className="mItemImg"/>
          <span>
            <p>수호천사</p>
            <img src={BFSword} alt="bf"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={BloodThirster} alt="bloodTirster" className="mItemImg"/>
          <span>
            <p>피바라기</p>
            <img src={BFSword} alt="bf"/><img src={NegatronCloak} alt="negatron"/>
          </span>
        </div>
        <div className="mItem">
          <img src={HextechGunblade} alt="textech" className="mItemImg"/>
          <span>
            <p>마법공학 총검</p>
            <img src={BFSword} alt="bf"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SpearOfShojin} alt="spearOfShojin" className="mItemImg"/>
          <span>
            <p>쇼진의 창</p>
            <img src={BFSword} alt="bf"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={ZekesHerald} alt="zekesHerald" className="mItemImg"/>
          <span>
            <p>지크의 전령</p>
            <img src={BFSword} alt="bf"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Assassin} alt="Assassin" className="mItemImg"/>
          <span>
            <p>암살자</p>
            <img src={BFSword} alt="bf"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={RecurveBow} alt="recurveBow" className="mItemImg"/>
          <span>
            <p>곡궁</p>
            <p>공격속도 +20%</p>
          </span>
        </div>
        <div className="mItem">
          <img src={SwordOfTheDivine} alt="divine" className="mItemImg"/>
          <span>
            <p>신성의 검</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={RapidFirecannon} alt="rapidFire" className="mItemImg"/>
          <span>
            <p>고속 연사포</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={FantomDancer} alt="phantomDancer" className="mItemImg"/>
          <span>
            <p>유령무희</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={CursedBlade} alt="cursedBlade" className="mItemImg"/>
          <span>
            <p>저주받은 칼날</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={GuinsooRageblade} alt="guinsoo" className="mItemImg"/>
          <span>
            <p>구인수의 격노검</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={StatikkShiv} alt="statikkShiv" className="mItemImg"/>
          <span>
            <p>스태틱의 단검</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={TitanicHydra} alt="titanicHydra" className="mItemImg"/>
          <span>
            <p>거대한 히드라</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SwordMan} alt="swordMan" className="mItemImg"/>
          <span>
            <p>검사</p>
            <img src={RecurveBow} alt="recurveBow"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={ChainVest} alt="chainVest" className="mItemImg"/>
          <span>
            <p>쇠사슬 조끼</p>
            <p>방어력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={GuardianAngel} alt="guardianAngel" className="mItemImg"/>
          <span>
            <p>수호천사</p>
            <img src={ChainVest} alt="chainVest"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={FantomDancer} alt="phantomDancer" className="mItemImg"/>
          <span>
            <p>유령무희</p>
            <img src={ChainVest} alt="chainVest"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Thornmail} alt="thornMail" className="mItemImg"/>
          <span>
            <p>가시갑옷</p>
            <img src={ChainVest} alt="chainVest"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SwordBreaker} alt="swordBreaker" className="mItemImg"/>
          <span>
            <p>파쇄검</p>
            <img src={ChainVest} alt="chainVest"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={LocketOfTheIronSolari} alt="solari" className="mItemImg"/>
          <span>
            <p>강철의 솔라리 펜던트</p>
            <img src={ChainVest} alt="chainVest"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={FrozenHeart} alt="frozenHeart" className="mItemImg"/>
          <span>
            <p>얼어붙은 심장</p>
            <img src={ChainVest} alt="chainVest"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={RedBuff} alt="redBuff" className="mItemImg"/>
          <span>
            <p>붉은 덩굴정령</p>
            <img src={ChainVest} alt="chainVest"/><img src={GiantBelt} alt="gianrBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={KnightVow} alt="knightVow" className="mItemImg"/>
          <span>
            <p>기사</p>
            <img src={ChainVest} alt="chainVest"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={NegatronCloak} alt="negatronCloak" className="mItemImg"/>
          <span>
            <p>음전자 망토</p>
            <p>마법저항력 +20</p>  
          </span>
        </div>
        <div className="mItem">
          <img src={BloodThirster} alt="bloodTirster" className="mItemImg"/>
          <span>
            <p>피바라기</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={CursedBlade} alt="cursedBlade" className="mItemImg"/>
          <span>
            <p>저주받은 칼날</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SwordBreaker} alt="swordBreaker" className="mItemImg"/>
          <span>
            <p>파쇄검</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={DragonsClaw} alt="dragonsClaw" className="mItemImg"/>
          <span>
            <p>용의 발톱</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={IonicSpark} alt="ionicSpark" className="mItemImg"/>
          <span>
            <p>이온 충격기</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Hush} alt="hush" className="mItemImg"/>
          <span>
            <p>침묵</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={WestWind} alt="westWind" className="mItemImg"/>
          <span>
            <p>서풍</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={RunaanHurricane} alt="runaanHurricane" className="mItemImg"/>
          <span>
            <p>루난의 허리케인</p>
            <img src={NegatronCloak} alt="negatronCloak"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={LargeRod} alt="largeRod" className="mItemImg"/>
          <span>
            <p>쓸데없이 큰 지팡이</p>
            <p>주문력 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={HextechGunblade} alt="hextechGunblade" className="mItemImg"/>
          <span>
            <p>마법공학 총검</p>
            <img src={LargeRod} alt="largeRod"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={GuinsooRageblade} alt="guinsoo" className="mItemImg"/>
          <span>
            <p>구인수의 격노검</p>
            <img src={LargeRod} alt="largeRod"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={LocketOfTheIronSolari} alt="solari" className="mItemImg"/>
          <span>
            <p>강철의 솔라리 펜던트</p>
            <img src={LargeRod} alt="largeRod"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={IonicSpark} alt="ionicSpark" className="mItemImg"/>
          <span>
            <p>이온 충격기</p>
            <img src={LargeRod} alt="largeRod"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={RabadonDeathcap} alt="rabadon" className="mItemImg"/>
          <span>
            <p>라바돈의 죽음모자</p>
            <img src={LargeRod} alt="largeRod"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={LudenEcho} alt="ludenEcho" className="mItemImg"/>
          <span>
            <p>루덴의 메아리</p>
            <img src={LargeRod} alt="largeRod"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Morellonomicon} alt="morellonimicon" className="mItemImg"/>
          <span>
            <p>모렐로노미콘</p>
            <img src={LargeRod} alt="largeRod"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Yuumi} alt="yuumi" className="mItemImg"/>
          <span>
            <p>마법사</p>
            <img src={LargeRod} alt="largeRod"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={TearGoddes} alt="tearOfGoddes" className="mItemImg"/>
          <span>
            <p>여신의 눈물</p>
            <p>시작 마나 +20</p>
          </span>
        </div>
        <div className="mItem">
          <img src={SpearOfShojin} alt="spearOfShojin" className="mItemImg"/>
          <span>
            <p>쇼진의 창</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={StatikkShiv} alt="statikkShiv" className="mItemImg"/>
          <span>
            <p>스태틱의 단검</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={FrozenHeart} alt="frozenHeart" className="mItemImg"/>
          <span>
            <p>얼어붙은 심장</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Hush} alt="hush" className="mItemImg"/>
          <span>
            <p>침묵</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={LudenEcho} alt="ludenEcho" className="mItemImg"/>
          <span>
            <p>루덴의 메아리</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={SeraphEmbrace} alt="seraphEmbrace" className="mItemImg"/>
          <span>
            <p>대천사의 포옹</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Redemption} alt="redemption" className="mItemImg"/>
          <span>
            <p>구원</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Aatrox} alt="Aatrox" className="mItemImg"/>
          <span>
            <p>악마</p>
            <img src={TearGoddes} alt="tearOfGoddes"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem">
          <img src={GiantBelt} alt="giantBelt" className="mItemImg"/>
          <span>
            <p>거인의 허리띠</p>
            <p>체력 +200</p>
          </span>
        </div>
        <div className="mItem">
          <img src={ZekesHerald} alt="zekesHerald" className="mItemImg"/>
          <span>
            <p>지크의 전령</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem">
          <img src={TitanicHydra} alt="titanicHydra" className="mItemImg"/>
          <span>
            <p>거대한 히드라</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem">
          <img src={RedBuff} alt="redBuff" className="mItemImg"/>
          <span>
            <p>붉은 덩굴정령</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem">
          <img src={WestWind} alt="westWind" className="mItemImg"/>
          <span>
            <p>서풍</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Morellonomicon} alt="morellonomicon" className="mItemImg"/>
          <span>
            <p>모렐로노미콘</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem">
          <img src={Redemption} alt="redemption" className="mItemImg"/>
          <span>
            <p>구원</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem">
          <img src={WarmogArmor} alt="warmogArmor" className="mItemImg"/>
          <span>
            <p>워모그의 갑옷</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem">
          <img src={HammerOfIce} alt="hammerOfIce" className="mItemImg"/>
          <span>
            <p>빙하</p>
            <img src={GiantBelt} alt="giantBelt"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
      <div className="mRow">
        <div className="mItem-bot">
          <img src={Spatula} alt="spatula" className="mItemImg"/>
          <span>
            <p>뒤집개</p>
            <p>특별한 능력이 있을지도..</p>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={Assassin} alt="assassin" className="mItemImg"/>
          <span>
            <p>암살자</p>
            <img src={Spatula} alt="spatula"/><img src={BFSword} alt="bf"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={SwordMan} alt="swordMan" className="mItemImg"/>
          <span>
            <p>검사</p>
            <img src={Spatula} alt="spatula"/><img src={RecurveBow} alt="recurveBow"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={KnightVow} alt="knightVow" className="mItemImg"/>
          <span>
            <p>기사</p>
            <img src={Spatula} alt="spatula"/><img src={ChainVest} alt="chainVest"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={RunaanHurricane} alt="runaanHurricane" className="mItemImg"/>
          <span>
            <p>루난의 허리케인</p>
            <img src={Spatula} alt="spatula"/><img src={NegatronCloak} alt="negatronCloak"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={Yuumi} alt="yuumi" className="mItemImg"/>
          <span>
            <p>마법사</p>
            <img src={Spatula} alt="spatula"/><img src={LargeRod} alt="largeRod"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={Aatrox} alt="Aatrox" className="mItemImg"/>
          <span>
            <p>악마</p>
            <img src={Spatula} alt="spatula"/><img src={TearGoddes} alt="tearOfGoddes"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={HammerOfIce} alt="hammerOfIce" className="mItemImg"/>
          <span>
            <p>빙하</p>
            <img src={Spatula} alt="spatula"/><img src={GiantBelt} alt="giantBelt"/>
          </span>
        </div>
        <div className="mItem-bot">
          <img src={ForceOfNature} alt="forceOfNature" className="mItemImg"/>
          <span>
            <p>대자연의 힘</p>
            <img src={Spatula} alt="spatula"/><img src={Spatula} alt="spatula"/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Material;
