import Link from "next/link"
import Logo from "./Logo"

function Navbar(){
 return(
    <div>
        <nav className="w-full fixed   top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href={'/'}>
                            <Logo/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
 )
}
export default Navbar