"use client";

import { RegionsMenu } from "@/app/_components/RegionsMenu";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import { BackButton } from "./BackButton";
import { SearchBar } from "./SearchBar";

export const Subheader = () => {
    const params = useParams();

    if ("code" in params) return <BackButton />;

    return (
        <Suspense>
            <SearchBar />
            <RegionsMenu />
        </Suspense>
    );
};
