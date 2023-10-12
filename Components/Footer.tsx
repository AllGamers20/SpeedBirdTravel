import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <Logo/>
                <div className='flex gap-6 pb-5 py-10'>
                <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target='_blank'>
                    <FaFacebook size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-blue-700'/>
                </Link>
                <Link href={'https://wa.me/+96171367510'} target='_blank'>
                    <FaWhatsapp size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-green-500'/>
                </Link>
                <Link href={'https://www.instagram.com/speedbirdtravellb/'} target='_blank'>
                    <FaInstagram size={25} className='text-main hover:translate-y-1.5 duration-300 hover:text-yellow-300'/>
                </Link>
                </div>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p><Link href={'#Packages'} className="hover:text-blue-400 p-5 block font-bold">Packages</Link></p>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p><Link href={'#Services'} className="hover:text-blue-400 p-5 block font-bold">Services</Link> </p>
            </ul>
        </div>
        <div className='p-5'>
            <ul>
                <p><Link href={'#AboutUs'} className="hover:text-blue-400 p-5 block font-bold">About Us</Link></p>
            </ul>
        </div>
    </div>
  )
}

export default Footer