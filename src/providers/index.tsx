"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }

    return <ThemeProvider>{children}</ThemeProvider>;
};
