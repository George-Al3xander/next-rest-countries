import CountryDisplayPage from "@/components/countries/CountryDisplayPage"
import { Suspense } from "react"




const CountryPage = async ({params}:{params: { slug: string };}) => {
      
    return(<CountryDisplayPage params={params}/>)
}

export default CountryPage