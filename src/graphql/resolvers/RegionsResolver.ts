import { Query, Resolver } from "type-graphql";

@Resolver(String)
export class RegionsResolver {
    @Query(() => [String])
    regions(): string[] {
        return ["Asia", "Oceania", "Europe", "Americas", "Antarctic", "Africa"];
    }
}
