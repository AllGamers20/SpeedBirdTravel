import Link from "next/link"
import Logo from "./Logo"

function Navbar(){
 return(
    <div className="fixed bg-white top w-[100%] z-20 ">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
            <Link href={'/'} className="flex gap-1 items-center">
                <Logo/>
            </Link>
            <div className="flex gap-10 ">
                <Link href={'/'} className="hover:text-blue-400">
                    Services
                </Link>                
                <Link href={'/'} className="hover:text-blue-400">
                    Packages
                </Link>                
                <Link href={'/'} className="hover:text-blue-400">
                    About Us
                </Link>                
                <Link href={'/'} className="hover:text-blue-400">
                    Contact Us
                </Link>                
            </div>
            <div>
                <button className="border border-main py-2 px-4 rounded-2xl text-main hover:bg-main hover:text-white"> Get Started</button>
            </div>
        </div>
    </div>
 )
}
export default Navbar