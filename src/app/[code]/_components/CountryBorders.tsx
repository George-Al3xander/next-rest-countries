import { getCountry } from "@/app/_actions/countries";
import Link from "next/link";
import { FC } from "react";

type CountryBordersProps = {
    borders: string[];
};

export const CountryBorders: FC<CountryBordersProps> = async ({ borders }) => {
    const countries = await Promise.all(
        borders.map(async (code) => await getCountry(code)),
    );

    const validCountries = countries.filter(Boolean);

    if (validCountries.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold">Border countries:</h3>
            <ul className="flex flex-wrap gap-4">
                {validCountries.map(({ name, alpha2Code }) => (
                    <li key={alpha2Code}>
                        <Link
                            className="rounded border bg-card p-2 shadow transition-all hover:opacity-60"
                            href={`/${alpha2Code.toLowerCase()}`}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
