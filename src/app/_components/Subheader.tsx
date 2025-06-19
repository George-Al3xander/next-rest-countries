"use client";

import { useParams } from "next/navigation";
import { BackButton } from "./BackButton";
import { SearchBar } from "./SearchBar";

export const Subheader = () => {
    const params = useParams();

    if ("code" in params) return <BackButton />;

    return <SearchBar />;
};
