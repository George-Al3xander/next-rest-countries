import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never;
      };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type Country = {
    __typename?: "Country";
    alpha2Code: Scalars["String"]["output"];
    alpha3Code: Scalars["String"]["output"];
    altSpellings?: Maybe<Array<Scalars["String"]["output"]>>;
    area?: Maybe<Scalars["Float"]["output"]>;
    borders?: Maybe<Array<Scalars["String"]["output"]>>;
    callingCodes: Array<Scalars["String"]["output"]>;
    capital?: Maybe<Scalars["String"]["output"]>;
    cioc?: Maybe<Scalars["String"]["output"]>;
    currencies?: Maybe<Array<Currency>>;
    demonym: Scalars["String"]["output"];
    flag: Scalars["String"]["output"];
    flags: Flag;
    gini?: Maybe<Scalars["Float"]["output"]>;
    independent: Scalars["Boolean"]["output"];
    languages: Array<Language>;
    latlng?: Maybe<Array<Scalars["Float"]["output"]>>;
    name: Scalars["String"]["output"];
    nativeName: Scalars["String"]["output"];
    numericCode: Scalars["String"]["output"];
    population: Scalars["Float"]["output"];
    region: Scalars["String"]["output"];
    regionalBlocs?: Maybe<Array<RegionalBloc>>;
    subregion: Scalars["String"]["output"];
    timezones: Array<Scalars["String"]["output"]>;
    topLevelDomain: Array<Scalars["String"]["output"]>;
    translations: Translations;
};

export type Currency = {
    __typename?: "Currency";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    symbol: Scalars["String"]["output"];
};

export type Flag = {
    __typename?: "Flag";
    png: Scalars["String"]["output"];
    svg: Scalars["String"]["output"];
};

export type Language = {
    __typename?: "Language";
    iso639_1?: Maybe<Scalars["String"]["output"]>;
    iso639_2?: Maybe<Scalars["String"]["output"]>;
    name: Scalars["String"]["output"];
    nativeName?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
    __typename?: "Query";
    countries: Array<Country>;
    country?: Maybe<Country>;
};

export type QueryCountryArgs = {
    code: Scalars["String"]["input"];
};

export type RegionalBloc = {
    __typename?: "RegionalBloc";
    acronym: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    otherNames?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type Translations = {
    __typename?: "Translations";
    br: Scalars["String"]["output"];
    de: Scalars["String"]["output"];
    es: Scalars["String"]["output"];
    fa?: Maybe<Scalars["String"]["output"]>;
    fr: Scalars["String"]["output"];
    hr: Scalars["String"]["output"];
    hu: Scalars["String"]["output"];
    it: Scalars["String"]["output"];
    ja: Scalars["String"]["output"];
    nl: Scalars["String"]["output"];
    pt: Scalars["String"]["output"];
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
    __typename?: "Query";
    countries: Array<{
        __typename?: "Country";
        name: string;
        flag: string;
        population: number;
        region: string;
        capital?: string | null;
        alpha2Code: string;
    }>;
};

export type GetCountryQueryVariables = Exact<{
    code: Scalars["String"]["input"];
}>;

export type GetCountryQuery = {
    __typename?: "Query";
    country?: {
        __typename?: "Country";
        name: string;
        flag: string;
        population: number;
        region: string;
        capital?: string | null;
        alpha2Code: string;
        subregion: string;
        topLevelDomain: Array<string>;
        borders?: Array<string> | null;
        currencies?: Array<{ __typename?: "Currency"; name: string }> | null;
        languages: Array<{ __typename?: "Language"; name: string }>;
    } | null;
};

export const GetCountriesDocument = gql`
    query getCountries {
        countries {
            name
            flag
            population
            region
            capital
            alpha2Code
        }
    }
`;
export const GetCountryDocument = gql`
    query getCountry($code: String!) {
        country(code: $code) {
            name
            flag
            population
            region
            capital
            alpha2Code
            subregion
            topLevelDomain
            currencies {
                name
            }
            languages {
                name
            }
            borders
        }
    }
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
    variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
    action,
    _operationName,
    _operationType,
    _variables,
) => action();

export function getSdk(
    client: GraphQLClient,
    withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
    return {
        getCountries(
            variables?: GetCountriesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
            signal?: RequestInit["signal"],
        ): Promise<GetCountriesQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetCountriesQuery>({
                        document: GetCountriesDocument,
                        variables,
                        requestHeaders: {
                            ...requestHeaders,
                            ...wrappedRequestHeaders,
                        },
                        signal,
                    }),
                "getCountries",
                "query",
                variables,
            );
        },
        getCountry(
            variables: GetCountryQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
            signal?: RequestInit["signal"],
        ): Promise<GetCountryQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<GetCountryQuery>({
                        document: GetCountryDocument,
                        variables,
                        requestHeaders: {
                            ...requestHeaders,
                            ...wrappedRequestHeaders,
                        },
                        signal,
                    }),
                "getCountry",
                "query",
                variables,
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
