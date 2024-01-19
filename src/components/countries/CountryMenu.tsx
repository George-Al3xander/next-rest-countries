import CountrySearch from "./CountrySearch"
import RegionSelect from "./RegionSelect"
import { SearchParams } from "@/types/types"




const CountryMenu = ({searchParams}:{searchParams: SearchParams}) => {
    return(<div className="py-10  flex justify-between md:items-center flex-col md:flex-row gap-4" >
        <CountrySearch searchParams={searchParams}/>
        <RegionSelect searchParams={searchParams}/>
    </div>)
}

export default CountryMenu