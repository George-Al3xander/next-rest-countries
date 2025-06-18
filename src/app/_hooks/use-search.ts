import { useModifySearchParams } from "@/hooks/use-modify-search-params";
import { ChangeEvent, useEffect, useState } from "react";

const searchQueryKey = "q";
const DEBOUNCE_DELAY = 500;

export const useSearch = () => {
    const { searchParams, setSearchParam } = useModifySearchParams();
    const initialQuery = searchParams.get(searchQueryKey) || "";
    const [inputValue, setInputValue] = useState(initialQuery);
    const [debouncedValue, setDebouncedValue] = useState(initialQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, DEBOUNCE_DELAY);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        setSearchParam(searchQueryKey, debouncedValue);
    }, [debouncedValue, setSearchParam]);

    return {
        value: inputValue,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value),
    };
};
