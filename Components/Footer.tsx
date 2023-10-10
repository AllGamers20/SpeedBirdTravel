import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-400 min-h-[450px] md:h-[250px]' id='ContactUs'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-y-5 py-16'>
                <Logo/>
                <div className="flex flex-col  gap-8 tracking-wider text-center">               
                <Link href={'#Packages'} className="hover:text-white">Packages</Link>
                <Link href={'#Services'} className="hover:text-white">Services</Link>                 
                <Link href={'#AboutUs'} className="hover:text-white">About Us</Link>                
                <Link href={'#ContactUs'} className="hover:text-white">Contact Us</Link>                
            </div>
            <div className='flex  gap-x-9 items-center'>
            <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target='_blank'>
                <FaFacebook size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-white'/>
            </Link>
            <Link href={'https://wa.me/+96171367510'} target='_blank'>
                <FaWhatsapp size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-white'/>
            </Link>
            <Link href={'https://www.instagram.com/speedbirdtravellb/'} target='_blank'>
                <FaInstagram size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-white'/>
            </Link>
        </div>
            </div>
            <p>DesignedBy</p>
        </div>
    </footer>
  )
}

export default Footer