import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section-container">
      <h2>About</h2>
      <Link to="/">
        <button className="back_main">Back to Main Page</button>
      </Link>
    </div>
  );
};

export default About;
