import ModeMenu from "../side/ModeMenu"





const Header = () => (<header className="bg-primary text-font py-6  border-b-[1px] border-gray-600 shadow-md"> 
        <div className="w-responsive mx-auto flex justify-between items-center">
            <h1 className="font-bold text-lg">Where in the world?</h1>
            <ModeMenu />
        </div>
    </header>)

export default Header