// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-100">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-brightColor leading-tight text-center sm:text-left">
          Smartpharm
        </h1>
        <p className="text-white bg-black bg-opacity-50 p-4 sm:p-6 rounded-[30px] w-full max-w-[90%] sm:max-w-[550px] mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl">
          <span className="text-center lg:text-left text-brightColor text-xl sm:text-2xl font-semibold mb-2">
            Available 24/7
          </span> SmartPharm transforms how patients and pharmacists connect.
          From real-time health education to automated medication reminders,
          our AI-driven solutions simplify complex tasks, reduce errors,
          and empower better health outcomes — all with seamless integration.
        </p>
        <div className="text-center sm:text-left">
          <Link to="services">
            <Button title="See Services" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
