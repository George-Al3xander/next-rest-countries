"use client"
import Link from "next/link"
import { useState } from "react"
import "../../styles/input.css"
import { SearchParams } from "@/types/types"
import AllRegionsBtn from "./AllRegionsBtn"
import { FaAngleDown } from "react-icons/fa";


const globalInputStyles = "shadow-md bg-primary py-3 px-4  rounded-md overflow-hidden flex items-center gap-8"

const RegionSelect = ({searchParams}:{searchParams: SearchParams}) => {
    const regions = ["africa","america","asia","europe","oceania"]    
    const {region, name} = searchParams;   
    const [status, setStatus] = useState(false)    
    const liStyles = "block px-4 py-3 hover:bg-secondary rounded"
    

    return(<div className="region-select relative">
              <button onBlur={() => setStatus(false)} onClick={() => setStatus((prev) => !prev)} className={globalInputStyles + " capitalize w-[100%] justify-between"}>
                <h3>Filter By Region</h3>
                <FaAngleDown className="fill-[var(--clr-font)] opacity-70 mx-2"/>
              </button>
      <ul className={"region-select-list p-2 shadow-xl text-font absolute bg-primary overflow-hidden capitalize  divide-y divide-gray-100 transition-all duration-100 rounded-lg  w-[100%] mt-1 " + `${status ? "visible opacity-100" : "invisible opacity-0"}`}>
      <AllRegionsBtn styles={`${liStyles} ${region == undefined ? "bg-secondary" : ""}`}/>
           
       {regions.map((reg) => {
            const hrefToReg = `?region=${reg}${name ? "&name="+name : ""}`
            return <Link  className={`${region && reg == region ? "bg-secondary" : ""} ${liStyles}`} key={reg+"link-select"} href={hrefToReg} >{reg}</Link>
        })}
      </ul>
    </div>)  
}

export default RegionSelect