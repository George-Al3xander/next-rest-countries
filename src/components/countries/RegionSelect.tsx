"use client"
//import { useQueryContext } from "@/hooks/useQueryContext"
import Link from "next/link"
//import { useRouter } from "next/navigation"
import { ChangeEvent,  Fragment, useState } from "react"
import useCountryQuery from "@/hooks/useCountryQuery"
import "../../styles/input.css"
import { useSearhContext } from "@/hooks/useSearchContext"
import { SearchParams } from "@/types/types"
import AllRegionsBtn from "./AllRegionsBtn"
import { FaAngleDown } from "react-icons/fa";


const globalInputStyles = "shadow-md bg-primary py-3 px-4  rounded-md overflow-hidden flex items-center gap-8"

const RegionSelect = ({searchParams}:{searchParams: SearchParams}) => {
    const regions = ["africa","america","asia","europe","oceania"]
    //const router = useRouter();
    const {region, name} = searchParams
    const removeRegion = () =>{
        //router.replace('/', undefined);
        if(name) {
            //router.push("?name="+name)
        }
    }
    const [status, setStatus] = useState(false)
    const handleRegionChange = (e:  ChangeEvent<HTMLSelectElement | HTMLInputElement> /*| SelectChangeEvent<string | null>*/ ) => {
        const {value} = e.target
       // const value = e
        if(value == "") {
            removeRegion()  
        } else {
           // router.push(`?region=${value}${name ? "&name="+name : ""}`)            
        }    
    }
    const liStyles = "block px-4 py-3 hover:bg-secondary rounded"
    // return(<select  onChange={handleRegionChange} className="bg-primary capitalize region-select text-sm" key={"country-select"}>
    //         <option className="py-2" selected={region == undefined} onClick={() => removeRegion()} value="">All regions</option>
    //         {regions.map((reg) => {
    //             return <option className="py-2" selected={reg === region}  value={reg} key={reg + "-option"}>{reg}</option>                
    //         })}                    
    //     </select>)

    // return(<div className="region-select relative min-w-[12ch]">        
    //     <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="capitalize text-font bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    //         {region ?? "Select Region"} 
    //         <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    //         </svg>
    //     </button>
    //     <ul className="region-select-list text-font absolute bg-primary overflow-hidden capitalize  divide-y divide-gray-100 rounded-lg shadow w-44">
    //         <AllRegionsBtn styles={liStyles}/>
    //         {/* <Link  className={`${liStyles}`} key={"all-link-select"} href={name ? `?name=${name}` : ""} passHref>All regions</Link> */}
    //         {regions.map((reg) => {
    //             const hrefToReg = `?region=${reg}${name ? "&name="+name : ""}`
    //             return <Link  className={`${region && reg == region ? "text-green-600" : ""} ${liStyles}`} key={reg+"link-select"} href={hrefToReg} >
    //                 {reg}
    //                 </Link>
    //         })}
    //     </ul>    
    // </div>)

    return(<div className="region-select relative">
              <button onBlur={() => setStatus(false)} onClick={() => setStatus((prev) => !prev)} className={globalInputStyles + " capitalize w-[100%] justify-between"}>
                <h3>Filter By Region</h3>
                <FaAngleDown className="fill-[var(--clr-font)] opacity-70 mx-2"/>
              </button>
      <ul className={"region-select-list p-2 shadow-xl text-font absolute bg-primary overflow-hidden capitalize  divide-y divide-gray-100 transition-all duration-100 rounded-lg  w-[100%] mt-1 " + `${status ? "visible opacity-100" : "invisible opacity-0"}`}>
      <AllRegionsBtn styles={liStyles}/>
           
       {regions.map((reg) => {
            const hrefToReg = `?region=${reg}${name ? "&name="+name : ""}`
            return <Link  className={`${region && reg == region ? "text-green-600" : ""} ${liStyles}`} key={reg+"link-select"} href={hrefToReg} >{reg}</Link>
        })}
      </ul>
    </div>)

    // return(
    //   <ThemeProvider>
        
    // <FormControl sx={{ m: 1, minWidth: 180 ,textTransform: "capitalize"}}>
    //     <InputLabel sx={{color: "var(--clr-text)"}} id="region-select-label">Filter By Region</InputLabel>
    //     <Select
    //       labelId="region-select-label"
    //       id="region-select"
    //       className="shadow-md"
    //       value={region}          
    //       label="Filter By Region"         
    //       onChange={handleRegionChange}          
    //       sx={{
    //         color: "var(--clr-font)",
    //         '.MuiOutlinedInput-notchedOutline': {
    //           borderColor: 'var(--clr-elements)',
    //         },
    //         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //           borderColor: 'var(--clr-text)',
    //         },
    //         '&:hover .MuiOutlinedInput-notchedOutline': {
    //           borderColor: 'var(--clr-text)',
    //         },
    //         '.MuiSvgIcon-root ': {
    //           fill: "var(--clr-text)",
    //         },            
    //       }}
    //     >
    //       <MenuItem value="">All</MenuItem>
    //       {regions.map((reg) => {
    //          return <MenuItem sx={{textTransform: "capitalize"}}  key={reg} value={reg}>{reg}</MenuItem>
    //        })} 
    //     </Select>
    // </FormControl>
    // </ThemeProvider>
    // )

    // return(<div>
    //   <ThemeProvider>
    //   <div className="w-72">
    //   <Select onChange={handleRegionChange} className="text-font  bg-primary selection:border-red-500" label="Select Version" placeholder={"Select something"}>
    //     <Option className="bg-primary font-text">All</Option>
    //     {regions.map((reg) => {
    //       return <Option value={reg} className="bg-primary font-text capitalize">{reg}</Option>
    //     })}
        
    //   </Select>
    // </div>

    //   </ThemeProvider>

    // </div>)

     
}

export default RegionSelect