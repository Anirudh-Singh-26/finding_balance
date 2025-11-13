import "./hero.css";
import logo from "../assets/buttonLogo.svg"
import topImg from "../assets/women1.png";
import videoImg from "../assets/women2.png";
import thumbLeft from "../assets/women3.png";
import thumbRight from "../assets/women4.png";

import leftPill from "../assets/leftPill.svg";
import rightPill from "../assets/rightPill.svg";
import bell from "../assets/bell.svg";
import star from "../assets/Star.svg";
import star2 from "../assets/Star2.svg";
import circle from "../assets/circle.svg";



export default function Hero() {
  return (
    <section className="hero-root">
      <div className="hero-bg"></div>
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Guiding Connections,
            <br />
            Empowering Growth.
          </h1>

          <p className="hero-sub">
            Finding Balance is a dynamic social platform that bridges the gap
            between users and expert coaches. Whether you’re seeking personal
            growth or professional guidance.
          </p>

          <div className="hero-row">
            <button className="main-btn">
              <img src={logo} alt="logo" />
              <span>Find Coaches.</span>
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="media-stack">
            <img src={topImg} alt="top" className="m-top" />
            <img src={videoImg} alt="video" className="m-video" />
            <img src={thumbLeft} alt="left" className="m-left" />
            <img src={thumbRight} alt="right" className="m-right" />
          </div>
          <div className="notification pill-notification">
            <div className="notif-icon">
              <img src={bell} className="notif-logo" alt="bell" />
            </div>
            <span className="notif-text">New Notification</span>
          </div>
          <div className="pill-right" aria-hidden>
            <img src={rightPill} alt="right badge" />
          </div>
          <div className="pill-left" aria-hidden>
            <img src={leftPill} alt="left badge" />
          </div>
        </div>
      </div>

      <div className="hero-sparkles">
        <img src={star} alt="sparkle star" className="starS1" />
        <img src={star2} alt="sparkle star" className="starS2" />

        <img src={circle} alt="sparkle circle" className="circle1" />
        <img src={circle} alt="sparkle circle" className="circle2" />
        <img src={circle} alt="sparkle circle" className="circle3" />
        <img src={circle} alt="sparkle circle" className="circle4" />
        <img src={circle} alt="sparkle circle" className="circle5" />
        <img src={circle} alt="sparkle circle" className="circle6" />
        <img src={circle} alt="sparkle circle" className="circle7" />
        <img src={circle} alt="sparkle circle" className="circle8" />
        <img src={circle} alt="sparkle circle" className="circle9" />
        <img src={circle} alt="sparkle circle" className="circle10" />
        <img src={circle} alt="sparkle circle" className="circle11" />
        <img src={circle} alt="sparkle circle" className="circle12" />
        <img src={circle} alt="sparkle circle" className="circle13" />
        <img src={circle} alt="sparkle circle" className="circle14" />
      </div>
    </section>
  );
}
