import { FC } from "react";
import { getCountries } from "../_actions/countries";
import { CountryCard } from "./CountryCard";

type Props = { query?: string | string[] };

export const CountryGrid: FC<Props> = async ({ query }) => {
    const countries = await getCountries(
        query ? (Array.isArray(query) ? query[0] : query) : undefined,
    );

    if (countries.length === 0) {
        return (
            <p>
                {query
                    ? `No countries found matching "${query}". Please try a different search term.`
                    : "No countries available."}
            </p>
        );
    }

    return (
        <ul className="grid items-stretch gap-10 md:grid-cols-3 xl:grid-cols-4">
            {countries.map((country) => (
                <li key={country.alpha2Code}>
                    <CountryCard {...country} />
                </li>
            ))}
        </ul>
    );
};
