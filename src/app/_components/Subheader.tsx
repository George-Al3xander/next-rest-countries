"use client";

import { useParams } from "next/navigation";
import { BackButton } from "./BackButton";

export const Subheader = () => {
    const params = useParams();

    if ("code" in params) return <BackButton />;
};
