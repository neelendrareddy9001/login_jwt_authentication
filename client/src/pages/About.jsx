import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <h2>About</h2>
        <Link to="/">
          <button className="back_main">Back to Main Page</button>
        </Link>
      </div>
    </>
  );
};

export default About;
