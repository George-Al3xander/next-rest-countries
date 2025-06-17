"use client";

import { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    header: ReactNode;
    subheader: ReactNode;
}>;

export const TemplateScaffold: FC<Props> = ({
    header,
    subheader,
    children,
}) => {
    return (
        <div className="relative flex min-h-screen flex-col justify-between">
            <header className="bg-secondary shadow-xl" role="banner">
                <div className="custom-container flex items-center justify-between gap-1">
                    {header}
                </div>
            </header>

            <main className="custom-container flex-1">
                <aside className="mb-14 mt-4 flex flex-col justify-between gap-4 md:flex-row">
                    {subheader}
                </aside>
                {children}
            </main>
        </div>
    );
};
