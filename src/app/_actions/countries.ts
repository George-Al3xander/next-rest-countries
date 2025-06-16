import * as internalApi from "@/services/api/internal";
import { CountryBasic } from "@/types/models/country";

export const getCountries = async (): Promise<CountryBasic[]> =>
    await internalApi.countries.findAll();
