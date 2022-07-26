import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome</h1>
      <p className="welcome-message">blurb about site</p>
      <Link to="/home">
        <button className="get-started-button">Get Started!</button>
      </Link>
    </div>
  )
};

export default Welcome;