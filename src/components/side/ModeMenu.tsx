"use client"
import { useModeContext } from "@/hooks/useModeContext"

import { FaSun,FaMoon } from "react-icons/fa";


const ModeMenu = () => {
    const {mode,handleModeChange} = useModeContext()    
    return(<button className="text-[var(--clr-font)] border-[var(--clr-font)] flex items-center gap-2 font-semibold capitalize text-lg hover:opacity-70 transition-all duration-150"   onClick={() => handleModeChange(mode == "dark" ? "light" : "dark")}>{mode == "dark" ? <FaMoon /> : <FaSun />}{mode} <span className="hidden md:inline">mode</span></button>)
}

export default ModeMenu