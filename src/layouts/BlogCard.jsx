import React from "react";

const BlogCard = ({ img, title, description, onClick }) => {
  return (
    <div 
      className="w-full md:w-1/3 bg-white p-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer hover:-translate-y-4 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-t-lg h-48">
        <img
          src={img}
          alt="blog"
          className="w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-3">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-3">{description}</p>
        <p className="text-blue-500 cursor-pointer hover:text-[#87CEEB] transition duration-300 ease-in-out mt-auto">
          Read More
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

