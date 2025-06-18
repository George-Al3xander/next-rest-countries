import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useModifySearchParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const setSearchParam = useCallback(
        (key: string, value: string) => {
            const newParams = new URLSearchParams(searchParams.toString());

            if (Boolean(value)) newParams.set(key, value);
            else newParams.delete(key);

            router.push(`?${newParams.toString()}`);
        },
        [router, searchParams],
    );

    return { searchParams, setSearchParam };
};
