import React from "react";
import img from "../assets/img/About.png";

const About = () => {
  return (
    <div className=" min-h-screen bg-[#e9e0db] flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          At SmartPharm, we are dedicated to providing exceptional pharmaceutical care with a personal 
          touch. Established with the vision of promoting health and wellness in our community, we combine expert
          knowledge, compassionate service, and trusted products to support your health journey.
        </p>
        <p className="text-justify lg:text-start">
          Our pharmacy offers a wide range of services, including prescription medications, over-the-counter health 
          products, and personalized wellness support. One of our standout services is our Monthly Medicine Supply 
          Program, designed for customers who require regular medications. With this program, we prepare and 
          package a month’s supply of your essential prescriptions—making it easier to stay consistent with your 
          treatment and giving you peace of mind.
        </p>
        <p className="text-justify lg:text-start">
          Whether you're managing a chronic condition or simply picking up daily essentials, we’re here to help—
          because your health is our priority. Visit us today and experience the difference of a pharmacy that truly 
          cares.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
