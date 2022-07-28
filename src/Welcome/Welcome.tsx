import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome to<br></br><span className="zen-in-ten">Zen in Ten</span></h1>
      <p className="welcome-message">Our goal at Zen in Ten is for you to find inspiration among our quote collection.<br></br>
				After you get started, simply select a mood to find famous quotes to help ground you.<br></br>
				YOU'RE ABOUT TO BE ZEN IN TEN.</p>
      <Link to="/home">
        <button className="get-started-button">Get Started!</button>
      </Link>
    </div>
  )
};

export default Welcome;