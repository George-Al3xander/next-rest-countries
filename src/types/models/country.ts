import { GetCountriesQuery, GetCountryQuery } from "@/graphql/generated";

export type CountryBasic = GetCountriesQuery["countries"][number];
export type CountryExtended = GetCountryQuery["country"];
