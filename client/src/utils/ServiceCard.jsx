import React from "react";
import { services } from "./data";

const ServiceCard = () => {
  return (
    <>
      {services.map((index) => {
        <div className="serviceCard" key={index}>
          ServiceCard
        </div>;
      })}
    </>
  );
};

export default ServiceCard;
