import React from "react";
import iPhone14 from "../assets/images/iphone-14.jpg";
import IphoneHold from "../assets/images/iphone-hand.png";

const Jumbotoron = () => {

  const scrollToTop = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior : "smooth",
    })
  }

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={iPhone14} alt="iphone14"></img>
      <p className="text">Big & Bigger.</p>
      <p className="description">
        From $41.62 for 24mo. or $999 before trade-in
      </p>
          <a className="link" onClick={scrollToTop}>Learn More</a>
      <img className="iphone-img" src={IphoneHold} alt="yooo" />
    </div>
  );
};

export default Jumbotoron;
