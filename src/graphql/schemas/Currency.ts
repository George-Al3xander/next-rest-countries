import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Currency {
    @Field()
    code: string;

    @Field()
    name: string;

    @Field()
    symbol: string;
}
