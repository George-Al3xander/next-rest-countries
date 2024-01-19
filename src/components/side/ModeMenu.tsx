"use client"
import { useModeContext } from "@/hooks/useModeContext"

import { FaSun,FaMoon } from "react-icons/fa";


const ModeMenu = () => {
    const {mode,handleModeChange} = useModeContext()    
    return(<button className="text-[var(--clr-font)] border-[var(--clr-font)] flex items-center gap-2 font-semibold capitalize text-lg"   onClick={() => handleModeChange(mode == "dark" ? "light" : "dark")}>{mode == "dark" ? <FaMoon /> : <FaSun />}{mode} mode</button>)
}

export default ModeMenu