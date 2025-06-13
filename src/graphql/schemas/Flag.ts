import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Flag {
    @Field()
    svg: string;

    @Field()
    png: string;
}
