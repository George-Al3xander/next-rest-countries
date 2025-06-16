import { CountryBasic } from "@/types/models/country";
import Image from "next/image";
import Link from "next/link";

const DISPLAY_FIELDS = ["population", "region", "capital"] as const;

export const CountryCard = ({
    name,
    flag,
    alpha2Code,
    ...props
}: CountryBasic) => {
    return (
        <Link
            className="flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-xl"
            href={`/${alpha2Code.toLowerCase()}`}
            aria-label={`View details for ${name}`}
        >
            <div className="aspect-[4/3] w-full">
                <Image
                    src={flag}
                    width={400}
                    height={150}
                    className="h-full w-full object-cover"
                    alt={`Flag for ${name}`}
                />
            </div>
            <div className="my-auto flex flex-col gap-4 p-6">
                <h2 className="text-2xl font-bold">{name}</h2>
                <ul className="flex flex-col gap-2">
                    {DISPLAY_FIELDS.map((k) => {
                        const value = props[k];
                        if (!value) return null;

                        const text =
                            typeof value === "number"
                                ? value.toLocaleString()
                                : value;

                        return (
                            <li key={k}>
                                <span className="font-semibold capitalize">
                                    {k}:{" "}
                                </span>
                                {text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Link>
    );
};
