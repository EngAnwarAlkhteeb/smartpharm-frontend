import React from "react";

const ServicesCard = ({ icon, title, description, onClick }) => {
  return (
    <div 
      className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="bg-[#E0F2FE] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#87CEEB]">
        {icon}
      </div>
      <h1 className="font-semibold text-lg">{title}</h1>
      
      <p>
        {description}
      </p>

      <h3 className="text-blue-500 cursor-pointer hover:text-[#87CEEB] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;

