import React from "react";

const Contact = () => {
  return (
    <div className="section-container">
      <h1>Contact Us</h1>
      <form>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
