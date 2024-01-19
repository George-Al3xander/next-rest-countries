import { CountryDetailsType, CurrenciesType, LanguagesType, NativeNameType} from "@/types/types"
import Link from "next/link";


interface MappingData {
    label: string,
    data: string | string[] | CurrenciesType | NativeNameType | LanguagesType
}



const CountryDisplayPage = async ({params}: {params: { slug: string };}) => {
    const code = params.slug
    const apiLink = "https://restcountries.com/v3.1/alpha/"+code   
    const res = await fetch(apiLink)    
    const data = (await res.json())[0] as CountryDetailsType
    data.name.nativeName
    const keys = ["native_name", "population","region","sub_region", "capital","top_level_domain", "currencies", "languages"]
    const array : MappingData[] = [
        {
            label: "Native Name",
            data: data.name.nativeName || "Unknown"
        },
        {
            label: "Population",
            data: data.population.toLocaleString()
        },
        {
            label: "Region",
            data: data.region
        },
        {
            label: "Sub Region",
            data: data.subregion || "Unknown"
        },
        {
            label: "Capital",
            data: data.capital?.toLocaleString() || "Unknown"
        },
        {
            label: "Currencies",
            data: data.currencies || "Unknown"
        },
        {
            label: "Languages",
            data: data.languages || "Unknown"
        },
    ]
    return (<div className="flex gap-10">
        <img className="md:max-w-[50%]" src={data.flags.svg} alt={data.flags.alt} />
        <div className="py-10 text-font">
            <h2 className="font-bold text-3xl mb-10">{data.name.official}</h2>
            <ul className="grid grid-cols-2 gap-3">
                {array.map((res) => {
                    let finalRes: any;
                    
                    if(typeof res.data !== "string") {
                        const firstDeep = Object.keys(res.data).map((key) => res.data[key] as string)[0];
                        if (typeof firstDeep == "object") {
                            finalRes = Object.keys(firstDeep).map((key) => firstDeep[key])[0]
                        } else {
                            finalRes = firstDeep
                        }                        
                    }
                    return <li key={res.label + "-li"} className="text-sm capitalize flex gap-1">
                        <h3 className="font-bold ">{res.label}:</h3> 
                        <h4>{typeof res.data == "string" ? res.data : finalRes}</h4>
                    </li>
                })}
            </ul>
            <ul className="flex gap-4">
            {data.borders && data.borders.map((border) => {
                return <Link href={"/"+border}>{border}</Link>
            })}
            </ul>
        </div>
    </div>)
}


export default CountryDisplayPage