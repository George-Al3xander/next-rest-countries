import {
    GetCountriesDocument,
    GetCountriesQuery,
    GetCountryDocument,
    GetCountryQuery,
} from "@/graphql/generated";
import { internalClient } from "@/services/libs/internalClient";
import { CountryBasic, CountryExtended } from "@/types/models/country";

export const findAll = async (
    query?: string,
    region?: string,
): Promise<CountryBasic[]> => {
    const { data } = await internalClient.query<GetCountriesQuery>({
        query: GetCountriesDocument,
        variables: { query, region },
    });

    return data.countries;
};

export const getByCode = async (code: string): Promise<CountryExtended> => {
    const { data } = await internalClient.query<GetCountryQuery>({
        query: GetCountryDocument,
        variables: { code },
    });

    return data.country;
};
