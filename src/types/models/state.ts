import { Country } from "./country";

export type State = {
    name: string;
    code: string | null;
    country: Country;
};
