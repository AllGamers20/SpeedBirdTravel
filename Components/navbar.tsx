import Link from "next/link";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // Function to toggle the Navbar
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };



  // Function to handle scroll and change background color
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top w-[100%] z-20 ${
        navbar ? "bg-white text-black shadow-md" : "text-white"
      }`}
      style={{ backgroundColor: navbar ? '#ffffff' : 'transparent'}}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href={"/"} className="flex gap-1 items-center">
          <Logo />
        </Link>
        <div className="hidden md:flex gap-10 tracking-wider font-nunito">
          <Link href={"#Packages"} className="hover:text-blue-400" >
            Packages
          </Link>
          <Link href={"#Services"} className="hover:text-blue-400" >
            Services
          </Link>
          <Link href={"#AboutUs"} className="hover:text-blue-400" >
            About Us
          </Link>
          <Link href={"#ContactUs"} className="hover:text-blue-400" >
            Contact Us
          </Link>
        </div>
        <div>
          <button className="hidden md:block border border-main py-2 px-4 rounded-2xl text-main hover:bg-main hover:text-white">
            Get Started
          </button>
        </div>
        {navbar ? (
          <AiOutlineClose onClick={() => toggleNavbar()} size={30} className="md:hidden block" />
        ) : (
          <FiMenu
            onClick={() => {
              toggleNavbar();
            }}
            size={30}
            className= {`md:hidden block ${
              navbar ? "bg-white text-black shadow-md" : "text-white"
            }`}
          />
        )}
      </div>
      {navbar && (
        <div className="md:hidden">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <Link href={"#Packages"} className="hover:text-blue-400 p-5 block">
              Packages
            </Link>
            <Link href={"#Services"} className="hover:text-blue-400 p-5 block">
              Services
            </Link>
            <Link href={"#AboutUs"} className="hover:text-blue-400 p-5 block">
              About Us
            </Link>
            <Link href={"#ContactUs"} className="hover:text-blue-400 p-5 block">
              Contact Us
            </Link>
            <div className="flex gap-5 items-center">
              <div></div>
              <Link href={"https://www.facebook.com/SpeedbirdLebanon"} target="_blank">
                <FaFacebook size={25} className="text-main hover:translate-y-1.5 duration-300 hover:text-blue-700" />
              </Link>
              <Link href={"https://wa.me/+96171367510"} target="_blank">
                <FaWhatsapp size={25} className="text-main hover:translate-y-1.5 duration-300 hover:text-green-500" />
              </Link>
              <Link href={"https://www.instagram.com/speedbirdtravellb/"} target="_blank">
                <FaInstagram size={25} className="text-main hover:translate-y-1.5 duration-300 hover:text-yellow-300" />
              </Link>
            </div>
          </div>
          <div className={`py-3 px-3 ${navbar ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
