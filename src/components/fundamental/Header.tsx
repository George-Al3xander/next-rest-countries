import Link from "next/link"
import ModeMenu from "../side/ModeMenu"




const Header = () => (<header className="bg-primary text-font py-6  border-b-[1px] border-gray-600 shadow-md"> 
        <div className="w-responsive mx-auto flex justify-between items-center">
            <Link className="hover:opacity-70 transition-all duration-150" href={"/"}><h1 className="font-bold text-lg">Where in the world?</h1></Link>
            <ModeMenu />            
        </div>
    </header>)

export default Header