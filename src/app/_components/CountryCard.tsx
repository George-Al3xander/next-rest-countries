import { CountryBasic } from "@/types/models/country";
import { Title } from "@/ui/components/atoms/Title";
import { DataList } from "@/ui/components/molecules/DataList";
import Image from "next/image";
import Link from "next/link";

const DISPLAY_FIELDS = ["population", "region", "capital"] as const;

export const CountryCard = ({
    name,
    flag,
    alpha2Code,
    ...props
}: CountryBasic) => {
    const data = DISPLAY_FIELDS.map((k) => ({ title: k, value: props[k] }));
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
                <Title>{name}</Title>
                <DataList data={data} />
            </div>
        </Link>
    );
};
