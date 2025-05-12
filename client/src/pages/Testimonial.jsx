import React from "react";
import Navbar from "../Components/Navbar";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <section className="my-6 px-4 smm:px-6 mdd:px-9 lgg:px-12">
        <h1 className="text-center font-semibold mb-4 text-xl">Testimonials</h1>
        <p className="text-center text-sm text-gray-600">
          Our client from all over the world
        </p>
      </section>
    </>
  );
};

export default Testimonials;
