// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-100">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-9xl font-bold text-brightColor leading-tight">Smartpharm</h1>
        <p className="text-white bg-black bg-opacity-50 p-4 rounded-[30px] w-[600px]">
          <span className="text-brightColor text-2xl">Available 24/7 </span>
          SmartPharm transforms how patients and pharmacists connect.
          From real-time health education to automated medication reminders,
          our AI-driven solutions simplify complex tasks, reduce errors, and empower better health outcomes — all with seamless integration.

        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
