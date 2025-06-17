import { Country } from "@/graphql/schemas";
import { Arg, Query, Resolver } from "type-graphql";
import data from "../../../public/json/data.json";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    countries(): Country[] {
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
