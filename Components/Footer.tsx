import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-parallex md:bg-fixed bg-no-repeat bg-cover bg-center bg-black/60' id='ContactUs'>
      <div className='container mx-auto p-[7rem] '>
        <div className='flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left'>
          <div className='flex flex-col w-1/2 md:p-0 py-4 gap-8'>
            <Logo/>
            <p className='text-[15px] font-medium text-main'>Find Your WanderRust <br /><p className='text-lime-300'>WITH US</p></p>
            <div className='flex gap-7 text-[18px] text-main justify-center md:justify-start'>
            <Link
                href={"https://www.facebook.com/SpeedbirdLebanon"}
                target="_blank"
              >
                <FaFacebook
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-blue-700"
                />
              </Link>
              <Link
                href={"https://wa.me/+96171367510"}
                target="_blank"
              >
                <FaWhatsapp
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-green-500"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/speedbirdtravellb/"}
                target="_blank"
              >
                <FaInstagram
                  size={25}
                  className="text-main hover:translate-y-1.5 duration-300 hover:text-yellow-300"
                />
              </Link>
            </div>
          <p className='text-[16px] font-medium text-white'>Privacy Policy | @{new Date().getFullYear()} Speed Bird International<br/>Travel And Tourisim <br/>{" "}
          <Link href={'mailto:Info@travelspeedbird.com'} target='_blank' className='hover:text-main'>
            Info@travelspeedbird.com
          </Link></p>
          </div>
          <div className='flex flex-col gap-8 relative '>
            <p className='text-[22px] text-lime-500 font-bold footer-main'>Services</p>
            <span className='top-[33px] absolute w-[10rem] h-[4px] bg-main'></span>
            <p className="text-[16px]  cursor-pointer text-white font-medium">
                Visa for All Countries
              </p>
              <p className="text-[16px]  text-white font-medium ">
                ReadyMatePackages
              </p>
              <p className="text-[16px]  text-white font-medium ">
                HotelsWithBestRates
              </p>
              <p className="text-[16px]  text-white font-medium ">
                PriceForAllTypesOfPeople
              </p>
              <p className="text-[16px]  text-white font-medium ">
                24/7 Contact
              </p>
          </div>
          <div className='flex flex-col gap-8 relative'>
            <p className="text-[22px] font-bold footer-main text-lime-500">Working Hours</p>
            <span className="top-[33px] absolute w-[10rem] h-[4px] bg-main"></span>
            <p className="text-[16px] text-white font-bold">Monday - Friday:</p>
            <p className="text-[16px] text-white font-medium">9:00am - 5:00pm</p>
            <p className="text-[16px] text-white font-bold">Saturday:</p>
            <p className="text-[16px] text-white font-medium">9:00am - 2:00pm</p>
            <p className="text-[16px] text-white font-bold ">Sunday - <span className='text-red-500'>Closed</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer