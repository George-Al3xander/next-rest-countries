import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Language {
    @Field({ nullable: true })
    iso639_1?: string;

    @Field({ nullable: true })
    iso639_2?: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    nativeName?: string;
}
