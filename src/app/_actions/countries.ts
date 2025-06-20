import * as internalApi from "@/services/api/internal";
import { CountryBasic, CountryExtended } from "@/types/models/country";

export const getCountries = async (
    ...args: Parameters<typeof internalApi.countries.findAll>
): Promise<CountryBasic[]> => await internalApi.countries.findAll(...args);

export const getCountry = async (
    ...args: Parameters<typeof internalApi.countries.getByCode>
): Promise<CountryExtended> => {
    try {
        return await internalApi.countries.getByCode(...args);
    } catch (e) {
        console.error(e);
        return null;
    }
};
