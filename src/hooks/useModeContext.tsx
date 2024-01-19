"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"



type useModeManagerResult = {mode: string, handleModeChange: (newValue: string) => void}
const ModeContext = createContext<useModeManagerResult>({mode: "light", handleModeChange: () => {  }})

export const useModeContext = () =>  useContext(ModeContext)

export const ModeContextProvider = ({children}:{children: ReactNode}) => {
    const [mode, setMode] = useState<string>("light")
  

    useEffect(() => {     
        const item = window.localStorage.getItem("color_mode")
        if(item) {
            setMode(item)
        }             
    }, [])

    const handleModeChange = (newMode: string) => {
        setMode(newMode)
        window.localStorage.setItem("color_mode", newMode)
    }
    return(<ModeContext.Provider value={{mode,handleModeChange}}><span className={`theme-${mode}`}>{children}</span></ModeContext.Provider>)
}