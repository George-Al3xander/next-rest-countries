import { getCountry } from "@/app/_actions/countries";
import { Title } from "@/ui/components/atoms/Title";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";
import { CountryBorders } from "./CountryBorders";
import { CountryDetails } from "./CountryDetails";

type Props = {
    code: string;
};

export const CountryDisplay: FC<Props> = async ({ code }) => {
    const data = await getCountry(code.toUpperCase());

    if (!data) notFound();
    const { name, flag, borders } = data;

    return (
        <div className="flex flex-col items-center gap-20 md:flex-row">
            <div className="w-full flex-shrink-0 rounded-xl border-8 border-secondary shadow md:w-[25rem] lg:w-[37.5rem]">
                <Image
                    src={flag}
                    width={600}
                    height={250}
                    className="h-full w-full object-cover"
                    alt={`Flag for ${name}`}
                />
            </div>
            <div className="my-auto flex flex-col gap-10">
                <Title>{name}</Title>
                <CountryDetails country={data} />
                {borders && <CountryBorders borders={borders} />}
            </div>
        </div>
    );
};
