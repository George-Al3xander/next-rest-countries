import { GetCountriesDocument, GetCountriesQuery } from "@/graphql/generated";
import { internalClient } from "@/services/libs/internalClient";
import { CountryBasic } from "@/types/models/country";

export const findAll = async (): Promise<CountryBasic[]> => {
    const { data } = await internalClient.query<GetCountriesQuery>({
        query: GetCountriesDocument,
    });

    return data.countries;
};
