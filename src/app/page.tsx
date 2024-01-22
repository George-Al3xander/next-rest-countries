import CountriesDisplay from "@/components/countries/CountriesDisplay";
import CountryMenu from "@/components/countries/CountryMenu";
import { SearchParams } from "@/types/types"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export default function Home({searchParams}: {searchParams: SearchParams}) {  
  
  return(<main className="h-[100%]">
      <CountryMenu searchParams={searchParams}/>  
      <CountriesDisplay searchParams={searchParams}/>       
</main>)
}
