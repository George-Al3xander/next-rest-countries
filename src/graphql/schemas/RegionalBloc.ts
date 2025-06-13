import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RegionalBloc {
    @Field()
    acronym: string;

    @Field()
    name: string;

    @Field(() => [String], { nullable: true })
    otherNames?: string[];
}
