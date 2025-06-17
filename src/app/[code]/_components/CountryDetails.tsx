import { CountryExtended } from "@/types/models/country";
import { DataList } from "@/ui/components/molecules/DataList";
import { ComponentProps, FC } from "react";

type DetailKey = keyof NonNullable<CountryExtended>;

const DETAIL_KEYS_GROUPS: { keys: { key: DetailKey; title: string }[] }[] = [
    {
        keys: [
            { key: "nativeName", title: "Native Name" },
            { key: "population", title: "Population" },
            { key: "region", title: "Region" },
            { key: "subregion", title: "Subregion" },
        ],
    },
    {
        keys: [
            { key: "capital", title: "Capital" },
            { key: "topLevelDomain", title: "Top Level Domain" },
        ],
    },
];

type CountryDetailsProps = {
    country: CountryExtended;
};

const convertToDataList = (
    source: CountryExtended,
    keys: { key: DetailKey; title: string }[],
): ComponentProps<typeof DataList>["data"] =>
    keys.map(({ key, title }) => ({
        title,
        value: source?.[key] as unknown as string,
    }));

export const CountryDetails: FC<CountryDetailsProps> = ({ country }) => {
    const lists = DETAIL_KEYS_GROUPS.map(({ keys }) =>
        convertToDataList(country, keys),
    );

    const extendedList = [
        ...lists.pop()!,
        {
            title: "Currencies",
            value: country?.currencies?.map((c) => c.name).join(", "),
        },
        {
            title: "Languages",
            value: country?.languages?.map((l) => l.name).join(", "),
        },
    ];
    lists.push(extendedList);

    return (
        <div className="flex flex-col gap-16 sm:flex-row">
            {lists.map((data, index) => (
                <DataList key={`data-list-${index}`} data={data} />
            ))}
        </div>
    );
};
