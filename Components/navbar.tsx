import Link from "next/link"
import Logo from "./Logo"
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import  React , { useState } from 'react'


const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    const toggleNavbar = () => {
        setNavbar(!navbar);
      };
 return(
    <div className="fixed bg-white top w-[100%] z-20 ">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
            <Link href={'/'} className="flex gap-1 items-center">
                <Logo/>
            </Link>
            <div className=" hidden md:flex gap-10 tracking-wider">
                <Link href={'/'} className="hover:text-blue-400">Services</Link>                
                <Link href={'/'} className="hover:text-blue-400">Packages</Link>                
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
                </div>
            </div>
        )}

    </div>
 )
}

export default Navbar