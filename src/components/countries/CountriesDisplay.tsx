import { CountryDetailsType, SearchParams} from "@/types/types"
import CountryPreview from "./CountryPreview"
import { MdMoodBad } from "react-icons/md";




const CountriesDisplay = async ({searchParams}:{searchParams: SearchParams}) => {
    const apiLink = "https://restcountries.com/v3.1/"
    const {region,name} = searchParams
    const res = await fetch(`${apiLink}${region ? "region/"+region : "all"}`)
    const data = (await res.json()).filter((country: CountryDetailsType) => country.cca2 != "RU").filter((country: CountryDetailsType) => {
         if(name) {
            const {common,official} = country.name
            const params = [common,official].map((el) => el?.toLowerCase())
            const valid = new RegExp((name as string).toLowerCase() )
            return params.map((el) => valid.test(el)).includes(true)
        } else {
            return true
        }
    }) as CountryDetailsType[]
    
    if(data.length == 0) {
        return <div className="flex self-end opacity-70 text-center items-center flex-col gap-4 justify-center w-[100%]">
            <MdMoodBad size={60}/>
            <h3 className="text-2xl font-bold">Sorry, we couldn&apos;t find any results</h3>
        </div>
    }

    return(<ul className="py-2 grid md:grid-cols-2 lg:grid-cols-4  grid-row gap-10 md:gap-6">              
        {data.map((country) =>  <CountryPreview key={country.name.official} {...country}/>)}        
    </ul>)
}

export default CountriesDisplay