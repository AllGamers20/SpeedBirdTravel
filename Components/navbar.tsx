import Link from "next/link";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the Navbar
  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to handle scroll and change background color
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
      className={`fixed top w-full z-20 ${
        navbar || mobileMenuOpen
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href={"/"} className="flex gap-1 items-center" onClick={closeMobileMenu}>
          <Logo />
        </Link>
        <div className="hidden md:flex gap-10 tracking-wider font-nunito">
          <Link
            href={"#Packages"}
            className="hover:text-blue-400"
            onClick={closeMobileMenu}
          >
            Packages
          </Link>
          <Link
            href={"#Services"}
            className="hover:text-blue-400"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href={"#AboutUs"}
            className="hover:text-blue-400"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href={"#ContactUs"}
            className="hover:text-blue-400"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
        <div>
          <button className="hidden md:block border border-main py-2 px-4 rounded-2xl text-main hover:bg-main hover:text-white">
            Get Started
          </button>
        </div>
        {mobileMenuOpen ? (
          <AiOutlineClose
            onClick={() => setMobileMenuOpen(false)}
            size={30}
            className="md:hidden block text-black"
          />
        ) : (
          <FiMenu
            onClick={() => {
              setMobileMenuOpen(true);
            }}
            size={30}
            className={`md:hidden block ${
              navbar ? "bg-white text-black shadow-md" : "text-white"
            }`}
          />
        )}
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <Link
              href={"#Packages"}
              className="hover:text-blue-400 p-5 block"
              onClick={closeMobileMenu}
            >
              Packages
            </Link>
            <Link
              href={"#Services"}
              className="hover:text-blue-400 p-5 block"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href={"#AboutUs"}
              className="hover:text-blue-400 p-5 block"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href={"#ContactUs"}
              className="hover:text-blue-400 p-5 block"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <div className="flex gap-5 items-center">
              <div></div>
              <Link
                href={"https://www.facebook.com/SpeedbirdLebanon"}
                target="_blank"
                onClick={closeMobileMenu}
              >
                <FaFacebook
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-blue-700"
                />
              </Link>
              <Link
                href={"https://wa.me/+96171367510"}
                target="_blank"
                onClick={closeMobileMenu}
              >
                <FaWhatsapp
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-green-500"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/speedbirdtravellb/"}
                target="_blank"
                onClick={closeMobileMenu}
              >
                <FaInstagram
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-yellow-300"
                />
              </Link>
            </div>
          </div>
          <div
            className={`py-3 px-3 ${
              navbar || mobileMenuOpen
                ? "bg-white text-black shadow-md"
                : "bg-transparent text-white"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
