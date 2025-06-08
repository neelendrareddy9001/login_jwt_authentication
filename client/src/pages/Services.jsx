import React from "react";
import Navbar from "../Components/Navbar";
import ServiceCard from "../utils/ServiceCard";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="my-6 px-4 smm:px-6 mdd:px-9 lgg:px-12">
        <h1 className="text-center font-semibold mb-4 text-xl">Our Services</h1>
        <p className="text-center text-sm text-gray-600">
          We provide uniqu type of services to satisfy the customers
        </p>
        <ServiceCard />
      </section>
    </>
  );
};

export default Services;
