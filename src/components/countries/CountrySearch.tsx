"use client"
import { SearchParams } from "@/types/types";
import { useRouter} from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";


export const globalInputStyles = "shadow-md bg-primary py-3 pl-4 rounded-md overflow-hidden "


const CountrySearch = ({searchParams}:{searchParams: SearchParams}) => {
    const {region,name} = searchParams
    const [searchTerm, setSearchTerm] = useState(name as string ?? "")
    const router = useRouter()
    const removeName = () =>{
        router.replace('/', undefined);
        if(region) {
            router.push("?region="+region)
        }
    }

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {        
        // Send Axios request here
        if(new RegExp(/\S/).test(searchTerm)) {
            router.push(`?${region ? "region="+region+"&" : ""}name=${searchTerm}`)
        } else {
            removeName()
        }
        //--
      }, 2000)
  
      return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


    const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setSearchTerm(value)
    }

    
   
return(<label htmlFor="country-search" className={`flex items-center hover:cursor-text  gap-[.5rem] ${globalInputStyles}`}>
  <FaSearch className="fill-[var(--clr-font)] opacity-70 mx-2" /*style={{fill: "var(--clr-font)"}}*//>
  <input defaultValue={name ?? ""} onChange={handleChange} placeholder="Search for a country..." className="outline-none bg-primary" type="text" name="" id="country-search" />
</label>)
}


export default CountrySearch