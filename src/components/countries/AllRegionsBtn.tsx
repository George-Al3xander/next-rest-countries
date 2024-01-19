"use client"
import useCountryQuery from "@/hooks/useCountryQuery";
import { useRouter } from "next/navigation"




const AllRegionsBtn = ({styles}:{styles: string}) =>{
    const router =  useRouter();
    const {name} = useCountryQuery()    
    return(<li onClick={() => router.push(name ? `?name=${name}` : "/")} className={`${styles} hover:cursor-pointer`}>All regions</li>)
}

export default AllRegionsBtn