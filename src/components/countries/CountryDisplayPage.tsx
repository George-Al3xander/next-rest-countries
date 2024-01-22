import { CountryDetailsType, CurrenciesType, LanguagesType, NativeNameType} from "@/types/types"
import Link from "next/link";
import BackBtn from "../side/BackBtn";
import Image from "next/image";


interface MappingData {
    label: string,
    data: string | string[] | CurrenciesType | NativeNameType | LanguagesType | undefined
}



const CountryDisplayPage = async ({params}: {params: { slug: string };}) => {
    const code = params.slug
    const apiLink = "https://restcountries.com/v3.1/alpha/"+code   
    const res = await fetch(apiLink);
        
    const data = (await res.json())[0] as CountryDetailsType
    data.name.nativeName
    const array : MappingData[] = [
        {
            label: "Native Name",
            data: data.name.nativeName 
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
            data: data.subregion 
        },
        {
            label: "Capital",
            data: data.capital?.toLocaleString() 
        },
        {
            label: "Currencies",
            data: data.currencies 
        },
        {
            label: "Languages",
            data: data.languages 
        },
    ]
    if(data.cca2 == "RU") throw new Error("Something went wrong")
    return (<div>
        <BackBtn />

        <div className="flex md:gap-10 flex-col md:flex-row">
            <div className="md:max-w-[50%] ">
                <Image width={1000} height={500} className="object-cover" src={data.flags.svg} alt={data.flags.alt}/>
            </div>
            <div className="py-10 text-font">
                <h2 className="font-bold text-3xl mb-10">{data.name.official}</h2>
                <ul className="grid md:grid-cols-2 gap-3">
                    {array.map((res) => {
                        if(res.data == undefined) return

                        let finalRes: any;
        
                        if(typeof res.data !== "string") {
                            //@ts-ignore
                            const firstDeep = Object.keys(res.data).map((key) => res.data[key])[0];
                            if (typeof firstDeep == "object") {
                                finalRes = Object.keys(firstDeep).map((key) => firstDeep[key])[0]
                            } else {
                                finalRes = firstDeep
                            }
                        }

                        return <li key={res.label + "-li"} className="text-sm capitalize flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-xl">{res.label}:</h3>
                            <h4 className="text-lg">{typeof res.data == "string" ? res.data : finalRes}</h4>
                        </li>
                    })}
                </ul>
                {data.borders && 
                    <ul className="flex gap-4 mt-3 flex-wrap">
                    <h3 className="font-bold text-xl">Borders:</h3>
                        {data.borders.map((border) => {
                            return <Link className="bg-primary shadow border-font border-[1.5px] rounded py-1 px-3 font-semibold hover:opacity-70 transition-all duration-150" key={"border-li-"+border} href={"/"+border}>{border}</Link>
                        })}
                    </ul>
                }
                
            </div>
        </div>
    </div>)
}


export default CountryDisplayPage