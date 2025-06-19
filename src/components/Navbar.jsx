import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaPills, FaSearch, FaPhoneAlt } from "react-icons/fa";
import Button from "../layouts/Button";
import SearchBar from "./SearchBar";
import logo from "../assets/img/logo.png";
import "../styles/Navbar.css";

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [menu, setMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleMedicinesClick = () => {
    setCurrentPage("medicines");
    closeMenu();
  };

  const handleHomeClick = () => {
    setCurrentPage("home");
    closeMenu();
  };

  const handleContactClick = () => {
    setCurrentPage("contact");
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div>
        <div className=" flex flex-row justify-between text-white p-5 md:px-32 px-5 bg-[#0a1a25]/50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-xl font-semibold text-[#dd8036] ml-2" onClick={handleHomeClick}>
              SmartPharm
            </h1>
          </div>

          <nav className="hidden lg:flex flex-row items-center gap-8 font-medium">
            <div className={`hover:text-[#dd8036] transition-all cursor-pointer ${currentPage === "home" ? "text-[#dd8036]" : ""}`} onClick={handleHomeClick}>
              Home
            </div>

            {currentPage === "home" ? (
              <>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#dd8036] transition-all cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#dd8036] transition-all cursor-pointer"
                >
                  Services
                </Link>
                <Link
                  to="doctors"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#dd8036] transition-all cursor-pointer"
                >
                  Doctors
                </Link>
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#dd8036] transition-all cursor-pointer"
                >
                  Blog
                </Link>
              </>
            ) : null}

            <div
              className={`flex items-center hover:text-[#dd8036] transition-all cursor-pointer ${currentPage === "medicines" ? "text-[#dd8036]" : ""}`}
              onClick={handleMedicinesClick}
            >
              <FaPills className="mr-1" />
              Medicines
            </div>

            <SearchBar />
            <div onClick={handleContactClick}>
              <Button title="Contact" />
            </div>
          </nav>

          <div className="lg:hidden flex items-center">
            {menu ? (
              <FaTimes size={25} onClick={handleChange} />
            ) : (
              <FaBars size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-medium text-base sm:text-xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <div className="hover:text-[#dd8036] transition-all cursor-pointer" onClick={handleHomeClick}>
            Home
          </div>

          {currentPage === "home" ? (
            <>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#dd8036] transition-all cursor-pointer"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#dd8036] transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="doctors"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#dd8036] transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Doctors
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#dd8036] transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </>
          ) : null}

          <div
            className="flex items-center justify-center hover:text-[#dd8036] transition-all cursor-pointer"
            onClick={handleMedicinesClick}
          >
            <FaPills className="mr-2" />
            Medicines
          </div>

          <div className="mx-auto">
            <SearchBar />
          </div>
          <div onClick={handleContactClick} className="mx-auto">
            <Button title="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

