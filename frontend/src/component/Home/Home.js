import React, { Fragment } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import Banner from './Banner'
import { Link } from "react-router-dom";

const Home = () => {
  const cat = [
    {
      index: 1,
      cardImg: "https://www.hdnicewallpapers.com/Walls/Big/Games/Assassins_Creed_Valhalla_Game_4K_Wallpaper.jpg",
      link:"/products/game"
    },
    {
      index: 2,
      cardImg: "https://images.unsplash.com/photo-1586162258051-1c33862abf57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBjYW1lcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      link:"/products/camera"
    },
    {
      index: 3,
      cardImg: "https://www.hdcarwallpapers.com/download/2019_ford_mustang_ecoboost_performance_pack_4k-2560x1440.jpg",
      link:"/products/car"
    },
    {
      index: 4,
      cardImg: "https://wallpaperaccess.com/full/333323.jpg",
      link:"/products/bike"
    },
    {
      index: 5,
      cardImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BelAZ-75214_truck_in_Russia.jpg/1200px-BelAZ-75214_truck_in_Russia.jpg",
      link:"/products/bull"
    }
  ]
  // const cat2 = [
  //   {
  //     index: 6,
  //     cardImg: "https://w0.peakpx.com/wallpaper/847/301/HD-wallpaper-sewing-machine-sewing-taylor-machine-work-my.jpg"
  //   },
  //   {
  //     index: 7,
  //     cardImg: "https://c1.wallpaperflare.com/preview/799/627/746/eat-cookware-amp-kitchen-utensils-kitchen-catering.jpg"
  //   },
  //   {
  //     index: 8,
  //     cardImg: "data:image/jpeg;base64,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"
  //   },
  //   {
  //     index: 9,
  //     cardImg: "https://wallpaperaccess.com/full/895067.jpg"
  //   },
  // ]

  return (
    <Fragment>
      <MetaData title="Equrent--Home" />
      <div>
        <Banner />
      </div>

      <h2 className="homeHeading">Explore the world with us....</h2>

      <div className="container" id="container">
        <div className="con">
          {cat.map((cat) => (
            <div className="wrap" key={cat.index}>
              <Link to={cat.link}>
                <img src={cat.cardImg} alt="products_demo" />
              </Link>
            </div>))}
        </div>
        {/* <div className="con2">
          {cat2.map((cat) => (
            <div className="wrap" key={cat.index}>
              <Link to='/products'>
                <img src={cat.cardImg} alt="products_demo" />
              </Link>
            </div>))}
        </div> */}
      </div>
      <section class="gallary container">
        <figure class="gallary-item item-1">
          <img src="https://images.cdn.circlesix.co/image/1/640/0/uploads/posts/2017/11/fffe33a6f137afa45e446a735245a903.jpg" alt="" class="gallary-img" />
          <div class="content">
            <h2>Our Popular Products</h2>
            <Link to="/products">View more</Link>
          </div>
        </figure>

        <figure class="gallary-item item-2">
          <img src="https://wallpaperaccess.com/full/4063070.png" alt="" class="gallary-img" />
          <div class="content">
            <h2>Game Collections</h2>
          </div>
        </figure>

        <figure class="gallary-item item-3">
          <img src="https://c1.wallpaperflare.com/preview/43/130/490/buffet-dining-dinner-lunch.jpg" alt="" class="gallary-img" />
          <div class="content">
            <h2>Catering</h2>
          </div>
        </figure>

        <figure class="gallary-item item-4">
          <img src="https://assets.ajio.com/medias/sys_master/images/images/hc4/h3c/32476992962590/Performax-Home-1440x600px.jpg" alt="" class="gallary-img" />
          <div class="content">
            {/* <h2>Up to 70% OFF Spring Sale!</h2> */}
          </div>
        </figure>
      </section>
      <section class="facility section" id="facility">
        <div class="facility-contianer container">
          <div class="facility-box">
            <div class="facility-icon">
              <i class="fas fa-plane"></i>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div class="facility-box">
            <div class="facility-icon">
              <i class="fas fa-credit-card"></i>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div class="facility-box">
            <div class="facility-icon">
              <i class="far fa-credit-card"></i>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div class="facility-box">
            <div class="facility-icon">
              <i class="fas fa-headset"></i>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
    </section>
    </Fragment>
  );
};

export default Home;
