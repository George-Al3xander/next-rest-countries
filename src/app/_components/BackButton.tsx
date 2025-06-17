"use client";

import { Button } from "@/ui/components/atoms/Button";
import { ArrowLeftIcon } from "@/ui/icons";
import { useRouter } from "next/navigation";

export const BackButton = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            variant="secondary"
            size="lg"
            className="text-lg"
        >
            <ArrowLeftIcon />
            Back
        </Button>
    );
};
