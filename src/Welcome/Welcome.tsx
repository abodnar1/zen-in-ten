import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome!</h1>
      <p className="welcome-message">blurb about site</p>
      <button className="get-started-button">Get Started!</button>
    </div>
  )
};

export default Welcome;