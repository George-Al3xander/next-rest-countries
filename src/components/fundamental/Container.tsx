import { FC, ReactNode } from "react"



const Container : FC<{children: ReactNode}>  = ({children}) => (<div className="bg-secondary text-font py-2 min-h-screen"><div className="w-responsive mx-auto">{children}</div></div>)
export default Container