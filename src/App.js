import React from 'react';
import './App.css';
//import bench pics
import c1_1_bench from './Images/Champion_benchart/1_costs/Brand.png';
import c1_2_bench from './Images/Champion_benchart/1_costs/Diana.png';
import c1_3_bench from './Images/Champion_benchart/1_costs/Elise.png';
import c1_4_bench from './Images/Champion_benchart/1_costs/Fiora.png';
import c1_5_bench from './Images/Champion_benchart/1_costs/Garen.png';
import c1_6_bench from './Images/Champion_benchart/1_costs/Maokai.png';
import c1_7_bench from './Images/Champion_benchart/1_costs/Nasus.png';
import c1_8_bench from './Images/Champion_benchart/1_costs/Nidalee.png';
import c1_9_bench from './Images/Champion_benchart/1_costs/Tahm Kench.png';
import c1_10_bench from './Images/Champion_benchart/1_costs/Tristana.png';
import c1_11_bench from './Images/Champion_benchart/1_costs/Twisted Fate.png';
import c1_12_bench from './Images/Champion_benchart/1_costs/Wukong.png';
import c1_13_bench from './Images/Champion_benchart/1_costs/Yasuo.png';

import c2_1_bench from './Images/Champion_benchart/2_costs/Annie.png';
import c2_2_bench from './Images/Champion_benchart/2_costs/Braum.png';
import c2_3_bench from './Images/Champion_benchart/2_costs/Jarvan.png';
import c2_4_bench from './Images/Champion_benchart/2_costs/Jax.png';
import c2_5_bench from './Images/Champion_benchart/2_costs/Lulu.png';
import c2_6_bench from './Images/Champion_benchart/2_costs/Nautilus.png';
import c2_7_bench from './Images/Champion_benchart/2_costs/Pyke.png';
import c2_8_bench from './Images/Champion_benchart/2_costs/Rakan.png';
import c2_9_bench from './Images/Champion_benchart/2_costs/Teemo.png';
import c2_10_bench from './Images/Champion_benchart/2_costs/Vi.png';
import c2_11_bench from './Images/Champion_benchart/2_costs/Vladimir.png';
import c2_12_bench from './Images/Champion_benchart/2_costs/Zed.png';
import c2_13_bench from './Images/Champion_benchart/2_costs/Janna.png';

import c3_1_bench from './Images/Champion_benchart/3_costs/Akali.png';
import c3_2_bench from './Images/Champion_benchart/3_costs/Darius.png';
import c3_3_bench from './Images/Champion_benchart/3_costs/Irelia.png';
import c3_4_bench from './Images/Champion_benchart/3_costs/Kalista.png';
import c3_5_bench from './Images/Champion_benchart/3_costs/Katarina.png';
import c3_6_bench from './Images/Champion_benchart/3_costs/Kennen.png';
import c3_7_bench from './Images/Champion_benchart/3_costs/Kindred.png';
import c3_8_bench from './Images/Champion_benchart/3_costs/Neeko.png';
import c3_9_bench from './Images/Champion_benchart/3_costs/Nunu.png';
import c3_10_bench from './Images/Champion_benchart/3_costs/Shyvana.png';
import c3_11_bench from './Images/Champion_benchart/3_costs/Sivir.png';
import c3_12_bench from './Images/Champion_benchart/3_costs/Veigar.png';
import c3_13_bench from './Images/Champion_benchart/3_costs/Yuumi.png';

import c4_1_bench from './Images/Champion_benchart/4_costs/Aatrox.png';
import c4_2_bench from './Images/Champion_benchart/4_costs/Aurelion Sol.png';
import c4_3_bench from './Images/Champion_benchart/4_costs/Chogath.png';
import c4_4_bench from './Images/Champion_benchart/4_costs/Kayle.png';
import c4_5_bench from './Images/Champion_benchart/4_costs/Morgana.png';
import c4_6_bench from './Images/Champion_benchart/4_costs/Olaf.png';
import c4_7_bench from './Images/Champion_benchart/4_costs/Sejuani.png';
import c4_8_bench from './Images/Champion_benchart/4_costs/Shen.png';
import c4_9_bench from './Images/Champion_benchart/4_costs/Talon.png';
import c4_10_bench from './Images/Champion_benchart/4_costs/Tryndamere.png';
import c4_11_bench from './Images/Champion_benchart/4_costs/Xayah.png';

import c5_1_bench from './Images/Champion_benchart/5_costs/Azir.png';
import c5_2_bench from './Images/Champion_benchart/5_costs/Lee Sin.png';
import c5_3_bench from './Images/Champion_benchart/5_costs/Ornn.png';
import c5_4_bench from './Images/Champion_benchart/5_costs/Samira.png';
import c5_5_bench from './Images/Champion_benchart/5_costs/Sett.png';
import c5_6_bench from './Images/Champion_benchart/5_costs/Swain.png';
import c5_7_bench from './Images/Champion_benchart/5_costs/Yone.png';
import c5_8_bench from './Images/Champion_benchart/5_costs/Zilean.png';

//import shop portraits
import c1_1_shop from './Images/Champion_shopart/1_costs/Brand.png';
import c1_2_shop from './Images/Champion_shopart/1_costs/Diana.png';
import c1_3_shop from './Images/Champion_shopart/1_costs/Elise.png';
import c1_4_shop from './Images/Champion_shopart/1_costs/Fiora.png';
import c1_5_shop from './Images/Champion_shopart/1_costs/Garen.png';
import c1_6_shop from './Images/Champion_shopart/1_costs/Maokai.png';
import c1_7_shop from './Images/Champion_shopart/1_costs/Nasus.png';
import c1_8_shop from './Images/Champion_shopart/1_costs/Nidalee.png';
import c1_9_shop from './Images/Champion_shopart/1_costs/Tahm Kench.png';
import c1_10_shop from './Images/Champion_shopart/1_costs/Tristana.png';
import c1_11_shop from './Images/Champion_shopart/1_costs/Twisted Fate.png';
import c1_12_shop from './Images/Champion_shopart/1_costs/Wukong.png';
import c1_13_shop from './Images/Champion_shopart/1_costs/Yasuo.png';

import c2_1_shop from './Images/Champion_shopart/2_costs/Annie.png';
import c2_2_shop from './Images/Champion_shopart/2_costs/Braum.png';
import c2_3_shop from './Images/Champion_shopart/2_costs/Jarvan.png';
import c2_4_shop from './Images/Champion_shopart/2_costs/Jax.png';
import c2_5_shop from './Images/Champion_shopart/2_costs/Lulu.png';
import c2_6_shop from './Images/Champion_shopart/2_costs/Nautilus.png';
import c2_7_shop from './Images/Champion_shopart/2_costs/Pyke.png';
import c2_8_shop from './Images/Champion_shopart/2_costs/Rakan.png';
import c2_9_shop from './Images/Champion_shopart/2_costs/Teemo.png';
import c2_10_shop from './Images/Champion_shopart/2_costs/Vi.png';
import c2_11_shop from './Images/Champion_shopart/2_costs/Vladimir.png';
import c2_12_shop from './Images/Champion_shopart/2_costs/Zed.png';
import c2_13_shop from './Images/Champion_shopart/2_costs/Janna.png';

import c3_1_shop from './Images/Champion_shopart/3_costs/Akali.png';
import c3_2_shop from './Images/Champion_shopart/3_costs/Darius.png';
import c3_3_shop from './Images/Champion_shopart/3_costs/Irelia.png';
import c3_4_shop from './Images/Champion_shopart/3_costs/Kalista.png';
import c3_5_shop from './Images/Champion_shopart/3_costs/Katarina.png';
import c3_6_shop from './Images/Champion_shopart/3_costs/Kennen.png';
import c3_7_shop from './Images/Champion_shopart/3_costs/Kindred.png';
import c3_8_shop from './Images/Champion_shopart/3_costs/Neeko.png';
import c3_9_shop from './Images/Champion_shopart/3_costs/Nunu.png';
import c3_10_shop from './Images/Champion_shopart/3_costs/Shyvana.png';
import c3_11_shop from './Images/Champion_shopart/3_costs/Sivir.png';
import c3_12_shop from './Images/Champion_shopart/3_costs/Veigar.png';
import c3_13_shop from './Images/Champion_shopart/3_costs/Yuumi.png';

import c4_1_shop from './Images/Champion_shopart/4_costs/Aatrox.png';
import c4_2_shop from './Images/Champion_shopart/4_costs/Aurelion Sol.png';
import c4_3_shop from './Images/Champion_shopart/4_costs/Chogath.png';
import c4_4_shop from './Images/Champion_shopart/4_costs/Kayle.png';
import c4_5_shop from './Images/Champion_shopart/4_costs/Morgana.png';
import c4_6_shop from './Images/Champion_shopart/4_costs/Olaf.png';
import c4_7_shop from './Images/Champion_shopart/4_costs/Sejuani.png';
import c4_8_shop from './Images/Champion_shopart/4_costs/Shen.png';
import c4_9_shop from './Images/Champion_shopart/4_costs/Talon.png';
import c4_10_shop from './Images/Champion_shopart/4_costs/Tryndamere.png';
import c4_11_shop from './Images/Champion_shopart/4_costs/Xayah.png';

import c5_1_shop from './Images/Champion_shopart/5_costs/Azir.png';
import c5_2_shop from './Images/Champion_shopart/5_costs/Lee Sin.png';
import c5_3_shop from './Images/Champion_shopart/5_costs/Ornn.png';
import c5_4_shop from './Images/Champion_shopart/5_costs/Samira.png';
import c5_5_shop from './Images/Champion_shopart/5_costs/Sett.png';
import c5_6_shop from './Images/Champion_shopart/5_costs/Swain.png';
import c5_7_shop from './Images/Champion_shopart/5_costs/Yone.png';
import c5_8_shop from './Images/Champion_shopart/5_costs/Zilean.png';

//import shop levels
import l2 from './Images/Level_Images/level_2.png';
import l3 from './Images/Level_Images/level_3.png';
import l4 from './Images/Level_Images/level_4.png';
import l5 from './Images/Level_Images/level_5.png';
import l6 from './Images/Level_Images/level_6.png';
import l7 from './Images/Level_Images/level_7.png';
import l8 from './Images/Level_Images/level_8.png';
import l9 from './Images/Level_Images/level_9.png';

import blank_shop from './Images/blank_lvl_background.png';
import bench_default from './Images/bench_default.jpg'

//import stars
import oneStar from './Images/Star_Images/1star.png';
import twoStar from './Images/Star_Images/2star.png';
import threeStar from './Images/Star_Images/3star.png';

//import sound effects
import champBuy from './Audio/champBuy.mp3';
import champSell from './Audio/champSell.mp3';
import levelUp from './Audio/levelUp.mp3';
import refresh from './Audio/refreshShop.mp3';
import threeStarUpgrade from './Audio/threeStar.mp3';
import twoStarUpgrade from './Audio/twoStar.mp3';
import changeGold from './Audio/changeGold.mp3';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.lvls = [l2,l3,l4,l5,l6,l7,l8,l9];
    this.probs = [[0,100,100,100,100,100],[0,75,100,100,100,100],[0,55,85,100,100,100],[0,45,78,98,100,100],[0,35,70,95,100,100],[0,22,57,87,99,100,100],[0,15,40,75,95,100],[0,10,25,55,85,100]];
    this.champShopPortraits = [c1_1_shop, c1_2_shop, c1_3_shop, c1_4_shop, c1_5_shop, c1_6_shop, c1_7_shop, c1_8_shop, c1_9_shop, c1_10_shop, c1_11_shop, c1_12_shop, c1_13_shop, c2_1_shop, c2_2_shop, c2_3_shop, c2_4_shop, c2_5_shop, c2_6_shop, c2_7_shop, c2_8_shop, c2_9_shop, c2_10_shop, c2_11_shop, c2_12_shop, c2_13_shop, c3_1_shop, c3_2_shop, c3_3_shop, c3_4_shop, c3_5_shop, c3_6_shop, c3_7_shop, c3_8_shop, c3_9_shop, c3_10_shop, c3_11_shop, c3_12_shop, c3_13_shop, c4_1_shop, c4_2_shop, c4_3_shop, c4_4_shop, c4_5_shop, c4_6_shop, c4_7_shop, c4_8_shop, c4_9_shop, c4_10_shop, c4_11_shop, c5_1_shop, c5_2_shop, c5_3_shop, c5_4_shop, c5_5_shop, c5_6_shop, c5_7_shop, c5_8_shop];
    this.champBenchPortraits = [c1_1_bench, c1_2_bench, c1_3_bench, c1_4_bench, c1_5_bench, c1_6_bench, c1_7_bench, c1_8_bench, c1_9_bench, c1_10_bench, c1_11_bench, c1_12_bench, c1_13_bench, c2_1_bench, c2_2_bench, c2_3_bench, c2_4_bench, c2_5_bench, c2_6_bench, c2_7_bench, c2_8_bench, c2_9_bench, c2_10_bench, c2_11_bench, c2_12_bench, c2_13_bench, c3_1_bench, c3_2_bench, c3_3_bench, c3_4_bench, c3_5_bench, c3_6_bench, c3_7_bench, c3_8_bench, c3_9_bench, c3_10_bench, c3_11_bench, c3_12_bench, c3_13_bench, c4_1_bench, c4_2_bench, c4_3_bench, c4_4_bench, c4_5_bench, c4_6_bench, c4_7_bench, c4_8_bench, c4_9_bench, c4_10_bench, c4_11_bench, c5_1_bench, c5_2_bench, c5_3_bench, c5_4_bench, c5_5_bench, c5_6_bench, c5_7_bench, c5_8_bench];
    //fill champ pools
    var c1Pool = [];
    //1 costs
    for (var i = 0; i < 29; i++)
    {
      c1Pool.push(c1_1_shop);
      c1Pool.push(c1_2_shop);
      c1Pool.push(c1_3_shop);
      c1Pool.push(c1_4_shop);
      c1Pool.push(c1_5_shop);
      c1Pool.push(c1_6_shop);
      c1Pool.push(c1_7_shop);
      c1Pool.push(c1_8_shop);
      c1Pool.push(c1_9_shop);
      c1Pool.push(c1_10_shop);
      c1Pool.push(c1_11_shop);
      c1Pool.push(c1_12_shop);
      c1Pool.push(c1_13_shop);
    }
    var c2Pool = [];
    for (var i = 0; i < 22; i++)
    {
      c2Pool.push(c2_1_shop);
      c2Pool.push(c2_2_shop);
      c2Pool.push(c2_3_shop);
      c2Pool.push(c2_4_shop);
      c2Pool.push(c2_5_shop);
      c2Pool.push(c2_6_shop);
      c2Pool.push(c2_7_shop);
      c2Pool.push(c2_8_shop);
      c2Pool.push(c2_9_shop);
      c2Pool.push(c2_10_shop);
      c2Pool.push(c2_11_shop);
      c2Pool.push(c2_12_shop);
      c2Pool.push(c2_13_shop);
    }
    var c3Pool = [];
    for (var i = 0; i < 18; i++)
    {
      c3Pool.push(c3_1_shop);
      c3Pool.push(c3_2_shop);
      c3Pool.push(c3_3_shop);
      c3Pool.push(c3_4_shop);
      c3Pool.push(c3_5_shop);
      c3Pool.push(c3_6_shop);
      c3Pool.push(c3_7_shop);
      c3Pool.push(c3_8_shop);
      c3Pool.push(c3_9_shop);
      c3Pool.push(c3_10_shop);
      c3Pool.push(c3_11_shop);
      c3Pool.push(c3_12_shop);
      c3Pool.push(c3_13_shop);
    }
    var c4Pool = [];
    for (var i = 0; i < 12; i++)
    {
      c4Pool.push(c4_1_shop);
      c4Pool.push(c4_2_shop);
      c4Pool.push(c4_3_shop);
      c4Pool.push(c4_4_shop);
      c4Pool.push(c4_5_shop);
      c4Pool.push(c4_6_shop);
      c4Pool.push(c4_7_shop);
      c4Pool.push(c4_8_shop);
      c4Pool.push(c4_9_shop);
      c4Pool.push(c4_10_shop);
      c4Pool.push(c4_11_shop);
    }
    var c5Pool = [];
    for (var i = 0; i < 10; i++)
    {
      c5Pool.push(c5_1_shop);
      c5Pool.push(c5_2_shop);
      c5Pool.push(c5_3_shop);
      c5Pool.push(c5_4_shop);
      c5Pool.push(c5_5_shop);
      c5Pool.push(c5_6_shop);
      c5Pool.push(c5_7_shop);
      c5Pool.push(c5_8_shop);
    }

    this.state = {
      gold: 0,
      xp: 0,
      champPools: [c1Pool,c2Pool,c3Pool,c4Pool,c5Pool],
      champOdds: this.probs[0],
      bench: [bench_default, bench_default, bench_default, bench_default, bench_default, bench_default, bench_default, bench_default, bench_default],
      twoStar: [false, false, false, false, false, false, false, false, false],
      threeStar: [false, false, false, false, false, false, false, false, false],
      shop: [c1_1_shop,c1_2_shop,c1_3_shop,c1_4_shop,c1_5_shop],
      hover: -1,
      shopLvl: this.lvls[0],
      stars: [oneStar, oneStar, oneStar, oneStar, oneStar, oneStar, oneStar, oneStar, oneStar]
    };
    this.gAdd = this.gAdd.bind(this);
    this.gReset = this.gReset.bind(this);
    this.refreshShop = this.refreshShop.bind(this);
    this.buyChamp = this.buyChamp.bind(this);
    this.setHover = this.setHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
    this.sellChamp = this.sellChamp.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.canBuy = this.canBuy.bind(this);
    this.setLv = this.setLv.bind(this);
    this.upgradeToTwoStar = this.upgradeToTwoStar.bind(this);
    this.upgradeToThreeStar = this.upgradeToThreeStar.bind(this);
    this.setStar = this.setStar.bind(this);
    this.resetStar = this.resetStar.bind(this);
    this.isValidThreeStar = this.isValidThreeStar.bind(this);
  }

  gAdd(amount) {
    this.setState({
      gold: this.state.gold + amount
    });
    var audio = new Audio(changeGold);
    audio.volume = 0.7;
    audio.play();
  }
  gReset() {
    this.setState({
      gold: 0
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  }

  refreshShop() {
    if (this.state.gold >= 2)
    {
      var randShop = [];
      for (var m = 0; m < 5; m++)
      {
        var i = 0;
        var rand = Math.floor(Math.random() * 101);
        while (i < (this.state.champOdds.length - 1) && (this.state.champOdds[i] > rand || rand > this.state.champOdds[i + 1]))
          i++;
        randShop.push(this.state.champPools[i][Math.floor(Math.random() * this.state.champPools[i].length)]);
      }
      this.setState({
        shop: randShop,
        gold: this.state.gold - 2
      });
      //play audio
      var audio = new Audio(refresh);
      audio.volume = 0.7;
      audio.play();
    }
  }

  keyPress(event)
  {
    if (event.keyCode === 69)
    {
      this.sellChamp();
    }
    else if (event.keyCode === 68)
    {
      this.refreshShop();
    }
  }

  canBuy()
  {
    var i = 0;
    while (i < this.state.bench.length && this.state.bench[i] != bench_default)
      i++;
    if (i < this.state.bench.length)
      return i;
    return -1;
  }


  buyChamp(boughtChamp, shopButtonNumber) {
    if (boughtChamp === blank_shop)
      return;
    //check for two and three star upgrades; if cannot upgrade any units proceed normally
    var loc = this.canBuy();
    if ((!this.upgradeToThreeStar(boughtChamp, shopButtonNumber) && !this.upgradeToTwoStar(boughtChamp, shopButtonNumber)) && loc !== -1)
    {
      for (var i = 0; i < this.state.champPools.length; i++)
      {
        for (var m = 0; m < this.state.champPools[i].length; m++)
        {
          if (this.state.champPools[i][m] == boughtChamp && this.state.gold >= (i + 1))
          {
            //minus gold and update champPools
            var temp2 = this.state.champPools;
            temp2[i].splice(m,1);
            this.setState({
              gold: this.state.gold - (i + 1),
              champPools: temp2
            });
            //find bench portrait corresponding to bought champ, add it in empty bench index
            var temp = this.state.bench;
            var t = 0;
            while (this.champShopPortraits[t] != boughtChamp)
              t++;
            temp[loc] = this.champBenchPortraits[t];
            this.setState({
              bench: temp
            });
            //change shop button to be blank
            var tempShop = this.state.shop;
            tempShop[shopButtonNumber] = blank_shop;
            this.setState({
              shop: tempShop
            });
            //set star image to be solid
            this.setStar(1, loc);
            //play audio
            var audio = new Audio(champBuy);
            audio.volume = 0.7;
            audio.play();
            break;
          }
        }
      }
    }
  }

  setStar(numStars, loc)
  {
    //selects which stars to make visible
    var star;
    if (loc === 0)
      star = document.getElementById("star1");
    else if (loc === 1)
      star = document.getElementById("star2");
    else if (loc === 2)
      star = document.getElementById("star3");
    else if (loc === 3)
      star = document.getElementById("star4");
    else if (loc === 4)
      star = document.getElementById("star5");
    else if (loc === 5)
      star = document.getElementById("star6");
    else if (loc === 6)
      star = document.getElementById("star7");
    else if (loc === 7)
      star = document.getElementById("star8");
    else
      star = document.getElementById("star9");

    
    var starDisplay;
    var tempTwoStar = this.state.twoStar;
    var tempThreeStar = this.state.threeStar;
    if (numStars === 1)
    {
      starDisplay = oneStar;
      tempTwoStar[loc] = false;
      tempThreeStar[loc] = false;
    }
    else if (numStars === 2)
    {
      starDisplay = twoStar;
      tempTwoStar[loc] = true;
      tempThreeStar[loc] = false;
    }
    else
    {
      starDisplay = threeStar;
      tempThreeStar[loc] = true;
      tempTwoStar[loc] = false;
    }
    var temp = this.state.stars;
    temp[loc] = starDisplay;
    this.setState({
      stars: temp,
      twoStar: tempTwoStar,
      threeStar: tempThreeStar
    });

    star.style.opacity = 100;
  }

  resetStar(loc)
  {
    var star;
    if (loc === 0)
      star = document.getElementById("star1");
    else if (loc === 1)
      star = document.getElementById("star2");
    else if (loc === 2)
      star = document.getElementById("star3");
    else if (loc === 3)
      star = document.getElementById("star4");
    else if (loc === 4)
      star = document.getElementById("star5");
    else if (loc === 5)
      star = document.getElementById("star6");
    else if (loc === 6)
      star = document.getElementById("star7");
    else if (loc === 7)
      star = document.getElementById("star8");
    else
      star = document.getElementById("star9");
    var temp = this.state.stars;
    temp[loc] = oneStar;
    var temp2 = this.state.twoStar;
    temp2[loc] = false;
    var temp3 = this.state.threeStar;
    temp3[loc] = false;
    this.setState({
      stars: temp,
      twoStar: temp2,
      threeStar: temp3
    });

    star.style.opacity = 0;
  }

  //checks for two star units
  upgradeToTwoStar(champToUpgrade, shopButtonNumber) {
    //find corresponding bench portrait
    console.log("Checking for two star upgrade");
    var t = 0;
    while (this.champShopPortraits[t] != champToUpgrade)
      t++;
    for (var i1 = 0; i1 < this.state.bench.length - 1; i1++)
    {
      for (var i2 = i1 + 1; i2 < this.state.bench.length; i2++)
      {
        if ((this.state.bench[i1] === this.champBenchPortraits[t] && this.state.bench[i2] === this.champBenchPortraits[t]) && ((!this.state.twoStar[i1] && !this.state.threeStar[i1]) && (!this.state.twoStar[i2] && !this.state.threeStar[i2])))
        {
          var temp = this.state.bench;
          temp[i2] = bench_default;
          this.setState({
            bench: temp
          });
          //update gold, champ pools, shop normally
          for (var i = 0; i < this.state.champPools.length; i++)
          {
            for (var m = 0; m < this.state.champPools[i].length; m++)
            {
              if (this.state.champPools[i][m] == champToUpgrade && this.state.gold >= (i + 1))
              {
                //minus gold and update champPools
                var temp2 = this.state.champPools;
                temp2[i].splice(m,1);
                this.setState({
                  gold: this.state.gold - (i + 1),
                  champPools: temp2
                });
                //change shop button to be blank
                var tempShop = this.state.shop;
                tempShop[shopButtonNumber] = blank_shop;
                this.setState({
                  shop: tempShop
                });
                //set stars
                this.setStar(2, i1);
                this.resetStar(i2);
                break;
              }
            }
          }
          //play audio
          var audio = new Audio(twoStarUpgrade);
          audio.volume = 0.7;
          audio.play();
          return true;
        }
      }
    }
    return false;
  }

  upgradeToThreeStar(champToUpgrade, shopButtonNumber) {
    console.log("Checking for three star");
    var t = 0;
    while (this.champShopPortraits[t] != champToUpgrade)
      t++;
    for (var i1 = 0; i1 < this.state.bench.length - 3; i1++)
    {
      for (var i2 = i1 + 1; i2 < this.state.bench.length - 2; i2++)
      {
        for (var i3 = i2 + 1; i3 < this.state.bench.length - 1; i3++)
        {
          for (var i4 = i3 + 1; i4 < this.state.bench.length; i4++)
          {
            if (this.isValidThreeStar(this.champBenchPortraits[t], i1, i2, i3, i4))
            {
              console.log("Found valid three star");
              //set i2, i3, i4 to default bench
              var tempBench = this.state.bench;
              tempBench[i2] = bench_default;
              tempBench[i3] = bench_default;
              tempBench[i4] = bench_default;
              this.setState({
                bench: tempBench
              });
              //set i1 stars; reset i2, i3, i4 stars
              this.setStar(3, i1);
              this.resetStar(i2);
              this.resetStar(i3);
              this.resetStar(i4);
              //handle buying and champpool update as normal
              for (var i = 0; i < this.state.champPools.length; i++)
              {
                for (var m = 0; m < this.state.champPools[i].length; m++)
                {
                  if (this.state.champPools[i][m] == champToUpgrade && this.state.gold >= (i + 1))
                  {
                    //minus gold and update champPools
                    var temp2 = this.state.champPools;
                    temp2[i].splice(m,1);
                    this.setState({
                      gold: this.state.gold - (i + 1),
                      champPools: temp2
                    });
                    //change shop button to be blank
                    var tempShop = this.state.shop;
                    tempShop[shopButtonNumber] = blank_shop;
                    this.setState({
                      shop: tempShop
                    });
                    break;
                  }
                }
              }
              var audio = new Audio(threeStarUpgrade);
              audio.volume = 0.7;
              audio.play();
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  isValidThreeStar(champToCheck, i1, i2, i3, i4)
  {
    //6 different orderings; to check 1 stars must not be two star and not be three star
    if ((champToCheck == this.state.bench[i1] && champToCheck == this.state.bench[i2]) && (champToCheck == this.state.bench[i3] && champToCheck == this.state.bench[i4]))
    {
      console.log("REACHED HERE");
      if ((this.state.twoStar[i1] && this.state.twoStar[i2]) && ((!this.state.twoStar[i3] && !this.state.threeStar[i3]) && (!this.state.twoStar[i4] && !this.state.threeStar[i4])))
        return true;
      if ((this.state.twoStar[i1] && (!this.state.twoStar[i2] && !this.state.threeStar[i2])) && (this.state.twoStar[i3] && (!this.state.twoStar[i4] && !this.state.threeStar[i4])))
        return true;
      if ((this.state.twoStar[i1] && (!this.state.twoStar[i2] && !this.state.threeStar[i2])) && ((!this.state.twoStar[i3] && !this.state.threeStar[i3]) && this.state.twoStar[i4]))
        return true;
      if (((!this.state.twoStar[i1] && !this.state.threeStar[i1]) && this.state.twoStar[i2]) && (this.state.twoStar[i3] && (!this.state.twoStar[i4] && !this.state.threeStar[i4])))
        return true;
      if (((!this.state.twoStar[i1] && !this.state.threeStar[i1]) && this.state.twoStar[i2]) && ((!this.state.twoStar[i3] && !this.state.threeStar[i3]) && this.state.twoStar[i4]))
        return true;
      if (((!this.state.twoStar[i1] && !this.state.threeStar[i1]) && (!this.state.twoStar[i2] && !this.state.threeStar[i2])) && (this.state.twoStar[i3] && this.state.twoStar[i4]))
        return true;
    }
    return false;
  }

  sellChamp() {
    if (this.state.hover !== -1)
    {
      var temp = this.state.bench;
      var t = 0;
        while (t < this.champBenchPortraits.length && this.champBenchPortraits[t] != temp[this.state.hover])
            t++;
      if (t < this.champBenchPortraits.length)
      {
        for (var i = 0; i < this.state.champPools.length; i++)
        {
          for (var m = 0; m < this.state.champPools[i].length; m++)
          {
            if (this.state.champPools[i][m] == this.champShopPortraits[t])
            {
              //add back gold and update champPools
              var temp2 = this.state.champPools;
              var goldRefund = i + 1;
              if (this.state.twoStar[this.state.hover])
              {
                for (var z = 0; z < 3; z++)
                  temp2[i].push(this.champShopPortraits[t]);
                //if 1 cost get full refund, otherwise get original cost - 1 back
                if (i + 1 == 1)
                  goldRefund = (i + 1) * 3;
                else
                  goldRefund = (i + 1) * 3 - 1;
              }
              else if (this.state.threeStar[this.state.hover])
              {
                for (var y = 0; y < 9; y++)
                  temp2[i].push(this.champShopPortraits[t]);
                if (i + 1 == 1)
                  goldRefund = (i + 1) * 9;
                else
                  goldRefund = (i + 1) * 9 - 1;
              }
              else
                temp2[i].push(this.champShopPortraits[t]);
              this.setState({
                gold: this.state.gold + goldRefund,
                champPools: temp2
              });
              this.resetStar(this.state.hover);
              var audio = new Audio(champSell);
              audio.volume = 0.7;
              audio.play();
              break;
            }
          }
        }
        temp[this.state.hover] = bench_default;
        this.setState({
          bench: temp
        });
      }
    }
  }

  setHover(benchNumber) {
    this.setState({
      hover: benchNumber
    });
  }
  
  resetHover() {
    this.setState({
      hover: -1
    });
  }

  setLv(lv) {
    this.setState({
      champOdds: this.probs[lv - 2],
      shopLvl: this.lvls[lv - 2]
    });
    //play audio
    var audio = new Audio(levelUp);
    audio.volume = 0.7;
    audio.play();
  }

  render() {
    return (
      <div className = 'bkgrnd'>
        <h1 className='title'>TFT Set 4.5 Rolling Simulator</h1>
        <div className='controls'>
          <h1><u>Controls</u></h1>
          <h2>Refresh Shop: D</h2>
          <h2>Sell Champion: E</h2>
        </div>
        <div className='goldButtons'>
          <input type='button' value='+5 Gold' className='gButton' id='+5gButton' onClick={() => {this.gAdd(5)}}/>
          <input type='button' value='+10 Gold' className='gButton' id='+10gButton' onClick={() => {this.gAdd(10)}}/>
          <input type='button' value='+20 Gold' className='gButton' id='+20gButton' onClick={() => {this.gAdd(20)}}/>
          <input type='button' value='+50 Gold' className='gButton' id='+50gButton' onClick={() => {this.gAdd(50)}}/>
          <input type='button' value='+999 Gold' className='gButton' id='+999gButton' onClick={() => {this.gAdd(999)}}/>
          <input type='button' value='Reset Gold' className='gButton' id='+resetgButton' onClick={this.gReset}/>
        </div>
        <div className='lvlButtons'>
          <button className='lButton' id='lv2Button' onClick={() => {this.setLv(2)}}>Level 2</button>
          <button className='lButton' id='lv3Button' onClick={() => {this.setLv(3)}}>Level 3</button>
          <button className='lButton' id='lv4Button' onClick={() => {this.setLv(4)}}>Level 4</button>
          <button className='lButton' id='lv5Button' onClick={() => {this.setLv(5)}}>Level 5</button>
          <button className='lButton' id='lv6Button' onClick={() => {this.setLv(6)}}>Level 6</button>
          <button className='lButton' id='lv7Button' onClick={() => {this.setLv(7)}}>Level 7</button>
          <button className='lButton' id='lv8Button' onClick={() => {this.setLv(8)}}>Level 8</button>
          <button className='lButton' id='lv9Button' onClick={() => {this.setLv(9)}}>Level 9</button>
        </div>
        <div className='benchContainer' name='Bench'>
          <button className='benchButtons' id='bench1'><img className='benchPortraits' src={this.state.bench[0]} alt='My image' onMouseOver={() => {this.setHover(0)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench2'><img className='benchPortraits' src={this.state.bench[1]} alt='My image' onMouseOver={() => {this.setHover(1)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench3'><img className='benchPortraits' src={this.state.bench[2]} alt='My image' onMouseOver={() => {this.setHover(2)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench4'><img className='benchPortraits' src={this.state.bench[3]} alt='My image' onMouseOver={() => {this.setHover(3)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench5'><img className='benchPortraits' src={this.state.bench[4]} alt='My image' onMouseOver={() => {this.setHover(4)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench6'><img className='benchPortraits' src={this.state.bench[5]} alt='My image' onMouseOver={() => {this.setHover(5)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench7'><img className='benchPortraits' src={this.state.bench[6]} alt='My image' onMouseOver={() => {this.setHover(6)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench8'><img className='benchPortraits' src={this.state.bench[7]} alt='My image' onMouseOver={() => {this.setHover(7)}} onMouseOut= {this.resetHover}/></button>
          <button className='benchButtons' id='bench9'><img className='benchPortraits' src={this.state.bench[8]} alt='My image' onMouseOver={() => {this.setHover(8)}} onMouseOut= {this.resetHover}/></button>
        </div>
        <div className='starContainer'>
          <img src = {this.state.stars[0]} className = 'stars' id='star1'/>
          <img src = {this.state.stars[1]} className = 'stars' id='star2'/>
          <img src = {this.state.stars[2]} className = 'stars' id='star3'/>
          <img src = {this.state.stars[3]} className = 'stars'  id='star4'/>
          <img src = {this.state.stars[4]} className = 'stars'  id='star5'/>
          <img src = {this.state.stars[5]} className = 'stars' id='star6'/>
          <img src = {this.state.stars[6]} className = 'stars' id='star7'/>
          <img src = {this.state.stars[7]} className = 'stars' id='star8'/>
          <img src = {this.state.stars[8]} className = 'stars' id='star9'/>
        </div>
        <img className='shopBackground' src={this.state.shopLvl} />
        <h2 className='goldCounter'>{this.state.gold}</h2>
        <div className='shopContainer' name='Shop'>
          <input type='button' className='refreshButton' id='refresh' onClick={this.refreshShop}/>
          <button className='shopButtons' id='shop1' onClick={() => {this.buyChamp(this.state.shop[0], 0)}}><img className='shopPortraits' src={this.state.shop[0]} alt="My image" /></button>
          <button className='shopButtons' id='shop2' onClick={() => {this.buyChamp(this.state.shop[1], 1)}}><img className='shopPortraits' src={this.state.shop[1]} alt="My image" /></button>
          <button className='shopButtons' id='shop3' onClick={() => {this.buyChamp(this.state.shop[2], 2)}}><img className='shopPortraits' src={this.state.shop[2]} alt="My image" /></button>
          <button className='shopButtons' id='shop4' onClick={() => {this.buyChamp(this.state.shop[3], 3)}}><img className='shopPortraits' src={this.state.shop[3]} alt="My image" /></button>
          <button className='shopButtons' id='shop5' onClick={() => {this.buyChamp(this.state.shop[4], 4)}}><img className='shopPortraits' src={this.state.shop[4]} alt="My image" /></button>
        </div>
      </div>
    );
  }
}
