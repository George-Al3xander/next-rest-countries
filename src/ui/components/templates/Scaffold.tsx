"use client";

import { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    header: ReactNode;
}>;

export const TemplateScaffold: FC<Props> = ({ header, children }) => {
    return (
        <div className="relative flex min-h-screen flex-col justify-between">
            <header className="bg-secondary shadow-xl" role="banner">
                <div className="custom-container">{header}</div>
            </header>
            <main className="custom-container flex-1">{children}</main>
        </div>
    );
};
