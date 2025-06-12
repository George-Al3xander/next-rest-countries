import { Language } from "./language";
import { State } from "./state";

export type Country = {
    name: string;
    code: string;
    capital: string | null;
    continent: {
        name: string;
        code: string;
    };
    languages: Language[];
    emoji: string;
    currency: string | null;
    states: State[];
};
