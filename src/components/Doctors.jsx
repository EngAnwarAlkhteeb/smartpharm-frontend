import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaUserMd, FaHospital } from "react-icons/fa";
import doctorsData from "../data/doctors";
import DoctorModal from "./DoctorModal";

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,        
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start flex items-center">
            <FaUserMd className="text-blue-500 mr-3 hidden lg:inline" />
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Get to know the experienced and caring professionals who are here to support your health every step of the way.
          </p>
        </div>
        <div className="flex gap-4 mt-3 lg:mt-0">
          <button
            className="bg-[#dedbda] hover:bg-[#97d4ed] text-blue-500 px-4 py-2 rounded-lg active:bg-[#87CEEB] transition duration-300"
            onClick={() => slider.current.slickPrev()}
            aria-label="Previous slide"
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#dedbda] hover:bg-[#97d4ed] text-blue-500 px-4 py-2 rounded-lg active:bg-[#87CEEB] transition duration-300"
            onClick={() => slider.current.slickNext()}
            aria-label="Next slide"
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {doctorsData.map((doctor) => (
            <div
              className="px-2"
              key={doctor.id}
            >
              <div 
                className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                onClick={() => openModal(doctor)}
              >
                <div className="relative">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="h-56 rounded-t-xl w-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                    {doctor.experience}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-4">
                  <h1 className="font-semibold text-xl">{doctor.name}</h1>
                  <div className="flex items-center mt-1">
                    <FaHospital className="text-blue-500 mr-2" size={14} />
                    <h3 className="text-gray-700">{doctor.specialties}</h3>
                  </div>
                  <button 
                    className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm transition duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(doctor);
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={closeModal} />
      )}
    </div>
  );
};

export default Doctors;

