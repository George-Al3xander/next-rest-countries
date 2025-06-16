import * as internalApi from "@/services/api/internal";
import { CountryBasic, CountryExtended } from "@/types/models/country";

export const getCountries = async (): Promise<CountryBasic[]> =>
    await internalApi.countries.findAll();

export const getCountry = async (
    ...args: Parameters<typeof internalApi.countries.getByCode>
): Promise<CountryExtended> => await internalApi.countries.getByCode(...args);
