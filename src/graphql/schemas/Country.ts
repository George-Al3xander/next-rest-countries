import { Field, Float, ObjectType } from "type-graphql";
import { Currency } from "./Currency";
import { Flag } from "./Flag";
import { Language } from "./Language";
import { RegionalBloc } from "./RegionalBloc";
import { Translations } from "./Translations";

@ObjectType()
export class Country {
    @Field()
    name: string;

    @Field(() => [String])
    topLevelDomain: string[];

    @Field()
    alpha2Code: string;

    @Field()
    alpha3Code: string;

    @Field(() => [String])
    callingCodes: string[];

    @Field({ nullable: true })
    capital?: string;

    @Field(() => [String], { nullable: true })
    altSpellings?: string[];

    @Field()
    subregion: string;

    @Field()
    region: string;

    @Field()
    population: number;

    @Field(() => [Float], { nullable: true })
    latlng?: number[];

    @Field()
    demonym: string;

    @Field(() => Float, { nullable: true })
    area?: number;

    @Field(() => Float, { nullable: true })
    gini?: number;

    @Field(() => [String])
    timezones: string[];

    @Field(() => [String], { nullable: true })
    borders?: string[];

    @Field()
    nativeName: string;

    @Field()
    numericCode: string;

    @Field(() => Flag)
    flags: Flag;

    @Field(() => [Currency], { nullable: true })
    currencies?: Currency[];

    @Field(() => [Language])
    languages: Language[];

    @Field(() => Translations)
    translations: Translations;

    @Field()
    flag: string;

    @Field(() => [RegionalBloc], { nullable: true })
    regionalBlocs?: RegionalBloc[];

    @Field({ nullable: true })
    cioc?: string;

    @Field()
    independent: boolean;
}
