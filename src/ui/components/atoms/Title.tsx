import { FC, JSX, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    as?: keyof JSX.IntrinsicElements;
}>;

export const Title: FC<Props> = ({ children, as: Tag = "h2" }) => (
    <Tag className="text-2xl font-bold">{children}</Tag>
);
