import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import './banner.css'


const banner = () =>{
  const content = [
    {
      title: "Professional camera preserve the moments",
      description:
        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.",
      image: "https://images.pexels.com/photos/1205022/pexels-photo-1205022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Emergency Need of tools for Household works....!",
      description:
        "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
      image: "https://c4.wallpaperflare.com/wallpaper/580/687/703/wooden-floor-hand-tools-safety-glasses-wallpaper-preview.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "We'll take care of our Heavy loaded work for you!",
      description:
        "The typical nature photograph shows a butterfly on a pretty flower. The conservation photograph shows the same thing, but with a bulldozer coming at it in the background",
      image: "https://c1.wallpaperflare.com/preview/894/814/486/compressor-loader-drive-cat.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];
  
  return (
    <div className="banner_top">
      <Slider className="slider-wrapper" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p className="font_Size">{item.description}</p>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );

};

export default banner;