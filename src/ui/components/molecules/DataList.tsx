import { FC } from "react";

type TValue = string | number | string[];

type Props = {
    data: { title: string; value?: TValue | null }[];
};

const formatValue = (value: TValue): string => {
    if (typeof value === "number") {
        value = value.toLocaleString();
    }

    if (Array.isArray(value)) {
        value = value.join(", ");
    }

    return value;
};
export const DataList: FC<Props> = ({ data }) => {
    return (
        <ul className="flex flex-col gap-2">
            {data.map(
                ({ title, value }) =>
                    value && (
                        <li key={title}>
                            <span className="font-semibold capitalize">
                                {title}:{" "}
                            </span>
                            {formatValue(value)}
                        </li>
                    ),
            )}
        </ul>
    );
};
