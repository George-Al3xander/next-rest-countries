import { Country } from "@/graphql/schemas";
import { Query, Resolver } from "type-graphql";
import data from "../../../public/json/data.json";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    countries(): Country[] {
        return data;
    }
}
