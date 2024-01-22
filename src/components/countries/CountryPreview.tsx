import { CountryDetailsType } from "@/types/types"
import Image from "next/image"
import Link from "next/link"




const CountryPreview = ({name,cca2,flags, population,capital, region}: CountryDetailsType) => (<Link  href={`/${cca2}`}>
        <li className="bg-primary h-[100%] hover:opacity-70 transition-all duration-150">
            <Image width={500} height={250} src={flags.svg} alt={flags.alt}  />
            <div className="p-4">
                <h2 className="font-bold mb-4 text-xl">{name.common}</h2>
                <ul className="flex flex-col gap-1">
                    <li className="text-sm capitalize flex gap-1">
                        <h3 className="font-bold ">population:</h3> 
                        <h4>{population.toLocaleString()}</h4>
                    </li>
                    <li className="text-sm capitalize flex gap-1">
                        <h3 className="font-bold ">region:</h3> 
                        <h4>{region}</h4>
                    </li>
                    <li className="text-sm capitalize flex gap-1">
                        <h3 className="font-bold ">capital:</h3> 
                        <h4>{capital ?? "unknown"}</h4>
                    </li>                    
                </ul>
            </div>
        </li>
</Link>)



export default CountryPreview