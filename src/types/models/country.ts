import { GetCountriesQuery } from "@/graphql/generated";

export type CountryBasic = GetCountriesQuery["countries"][number];
export type CountryExtended = unknown;
