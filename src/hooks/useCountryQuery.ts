import { useSearchParams } from "next/navigation"




const useCountryQuery = () => {
    const searchParams = useSearchParams()
    const region = searchParams.get("region")
    const name = searchParams.get("name")

    return {region,name}
}

export default useCountryQuery