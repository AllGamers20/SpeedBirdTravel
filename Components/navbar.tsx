import Link from "next/link"
import Logo from "./Logo"
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import  React , { useState } from 'react'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'


const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    const toggleNavbar = () => {
        setNavbar(!navbar);
      };
 return(
    <div className="fixed bg-white top w-[100%] z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
            <Link href={'/'} className="flex gap-1 items-center">
                <Logo/>
            </Link>
            <div className=" hidden md:flex gap-10 tracking-wider">
                <Link href={'#Services'} className="hover:text-blue-400">Services</Link>                
                <Link href={'Packages'} className="hover:text-blue-400">Packages</Link>                
                <Link href={'/'} className="hover:text-blue-400">About Us</Link>                
                <Link href={'/'} className="hover:text-blue-400">Contact Us</Link>                
            </div>
            <div>
                <button className=" hidden md:block border border-main py-2 px-4 rounded-2xl text-main hover:bg-main hover:text-white"> Get Started</button>
            </div>
            {navbar ? (
                <AiOutlineClose onClick={()=>toggleNavbar()} size={30} className="md:hidden block"/>
            ):(
                
                <FiMenu onClick={()=>{
                    console.log("Menu icon clicked");
                    toggleNavbar();
                    console.log("New navbar state:", navbar);
                }} size={30} className="md:hidden block"/>

            )}
        </div>
        {navbar && (
            <div className="md:hidden">
                <div className="px-2 pt-2 space-y-1 sm:px-3 ">
                    <Link href={'/'} className="hover:text-blue-400 p-5 block">Services</Link>      
                    <Link href={'/'} className="hover:text-blue-400 p-5 block">Packages</Link>                
                    <Link href={'/'} className="hover:text-blue-400 p-5 block">About Us</Link>                
                    <Link href={'/'} className="hover:text-blue-400 p-5 block">Contact Us</Link>
                    <div className='flex gap-5 items-center'>
            <div></div>
                <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target='_blank'>
                    <FaFacebook size={25} className='text-main hover:translate-y-1.5 duration-300'/>
                </Link>
                <Link href={'https://wa.me/+961 71 367 510'} target='_blank'>
                    <FaWhatsapp size={25} className='text-main hover:translate-y-1.5 duration-300'/>
                </Link>
                <Link href={'https://www.instagram.com/speedbirdtravellb/'} target='_blank'>
                    <FaInstagram size={25} className='text-main hover:translate-y-1.5 duration-300'/>
                </Link>
            </div>
                </div>
                <div className="py-3 px-3"></div>

            </div>
        )}

    </div>
 )
}

export default Navbar