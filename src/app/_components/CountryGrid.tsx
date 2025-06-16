import { getCountries } from "../_actions/countries";
import { CountryCard } from "./CountryCard";

export const CountryGrid = async () => {
    const countries = await getCountries();

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
