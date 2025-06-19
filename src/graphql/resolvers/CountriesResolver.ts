import { Country } from "@/graphql/schemas";
import { findInObject } from "@/utils/find-in-object";
import { Arg, Query, Resolver } from "type-graphql";
import data from "../../../public/json/data.json";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    countries(
        @Arg("query", () => String, { nullable: true }) query: string | null,
    ): Country[] {
        if (query) {
            return data.filter((country) =>
                findInObject({
                    source: country,
                    query,
                    keysToSearch: [
                        "alpha3Code",
                        "alpha2Code",
                        "capital",
                        "name",
                        "nativeName",
                    ],
                }),
            );
        }
        return data;
    }

    @Query(() => Country, { nullable: true })
    country(@Arg("code", () => String) code: string): Country | null {
        const country = data.find(
            (c) =>
                c.alpha2Code.toLowerCase() === code.toLowerCase() ||
                c.alpha3Code.toLowerCase() === code.toLowerCase(),
        );

        if (!country) throw new Error("Country not found");

        return country;
    }
}
