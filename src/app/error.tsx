"use client";

import { Button } from "@/ui/components/atoms/Button";
import Link from "next/link";
import { FC } from "react";

type Props = {
    error: Error & { digest?: string };
    reset: () => void;
};

const ErrorPage: FC<Props> = ({ error, reset }) => {
    return (
        <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-destructive">
                Something went wrong
            </h2>
            <p className="mb-6 max-w-md text-gray-700 dark:text-gray-300">
                {error.message || "An unexpected error occurred."}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/">Go Home</Link>
                </Button>
                <Button
                    variant="outline"
                    onClick={() => reset()}
                    className="w-full sm:w-auto"
                >
                    Retry
                </Button>
            </div>
        </section>
    );
};

export default ErrorPage;
