"use client";

import { Input } from "@/ui/components/atoms/Input";
import { Label } from "@/ui/components/atoms/Label";
import { SearchIcon } from "@/ui/icons";
import { useSearch } from "../_hooks/use-search";

const HTML_ID = "search-bar";

export const SearchBar = () => (
    <Label
        htmlFor={HTML_ID}
        className="flex h-9 items-center gap-4 rounded-md bg-card px-5 py-2 text-base shadow-xl ring-offset-background transition-colors focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 md:text-sm"
    >
        <SearchIcon className="min-h-4 min-w-4" />
        <Input
            id={HTML_ID}
            placeholder="Search for a country..."
            className={
                "mx-auto h-auto w-[90%] flex-none rounded-none border-0 bg-transparent px-0 py-0 text-base shadow-none transition-none file:border-0 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
            }
            {...useSearch()}
        />
    </Label>
);
