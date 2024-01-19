import { CountryDetailsType, SearchParams} from "@/types/types"
import CountryPreview from "./CountryPreview"






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
    
    return(<ul className="py-2 grid md:grid-cols-2 lg:grid-cols-4  grid-row gap-10 md:gap-6">
        
        {data.length > 0 ?
        data.map((country) =>  <CountryPreview key={country.name.official} {...country}/>)
        :
        "No results"
        }
    </ul>)
}

export default CountriesDisplay