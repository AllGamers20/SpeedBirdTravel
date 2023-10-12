import React from 'react'
import Button from './Button'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-[url("/img/Hero.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
        <div className='absolute inset-0 bg-black/60  '></div>
        <div className='container mx-auto px-4 z-10'>
            <div className='text-start text-white flex flex-col  gap-[20px] md:gap-[40px]'>
                <div>
                    <h1 className=' text-xl text-lime-500 md:text-3xl tracking-wider'>FIND YOUR WANDERLUST</h1>
                </div>
                <div>
                    <h1 className=' text-2xl md:text-5xl text-main font-semibold tracking-wider'>WITH US</h1>
                </div>
                <div className='bg-main h-[2px]  w-[400px]'></div>
                <div>
                    <p className='text-xl text-gray-300 tracking-widest'>best way to fly safetly</p>
                </div>
                <div>
                    <Button text={'Click For Offers'} link={'#Packages'}/>
                </div>
            </div>
        </div>
        <div className='hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center'>
            <div className='bg-main w-[1.5px] h-[250px]'></div>
            <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target='_blank'>
                <FaFacebook size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-blue-700'/>
            </Link>
            <Link href={'https://wa.me/+96171367510'} target='_blank'>
                <FaWhatsapp size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-green-500'/>
            </Link>
            <Link href={'https://www.instagram.com/speedbirdtravellb/'} target='_blank'>
                <FaInstagram size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-yellow-300'/>
            </Link>
        </div>
    </div>
  )
}

export default Hero