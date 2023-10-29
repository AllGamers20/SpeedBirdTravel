import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-lime-500'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px4 bg-[#ffffff19] py-7 '>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-main'>FIND YOUR WANDERLUST</span>WITH US</h1>
            <Logo/>
        </div>
    </footer>
  )
}

export default Footer