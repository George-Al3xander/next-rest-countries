"use client";

import { Button } from "@/ui/components/atoms/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/components/organisms/DropdownMenu";
import { useRegions } from "../_hooks/use-regions";

export const RegionsMenu = () => {
    const { currentRegion, setRegion, regions, isUnavailable } = useRegions();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    disabled={isUnavailable}
                    variant="outline"
                    className="capitalize"
                >
                    {currentRegion}
                </Button>
            </DropdownMenuTrigger>
            {!isUnavailable && (
                <DropdownMenuContent>
                    <DropdownMenuLabel>Regions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                        value={currentRegion}
                        onValueChange={setRegion}
                    >
                        {regions.map((r) => (
                            <DropdownMenuRadioItem
                                className="capitalize"
                                key={`${r}-select-item`}
                                value={r}
                                disabled={r === currentRegion}
                            >
                                {r}
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
};
