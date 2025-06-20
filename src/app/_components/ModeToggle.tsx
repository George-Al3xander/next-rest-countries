"use client";

import { Button } from "@/ui/components/atoms/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/ui/components/organisms/DropdownMenu";
import { MoonIcon, SunIcon } from "@/ui/icons";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
    const { setTheme, themes, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="hover:opacity-60"
                    variant="ghost"
                    size="icon"
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themes.map((t) => (
                    <DropdownMenuItem
                        className="capitalize"
                        key={t + "dropdown-item"}
                        disabled={theme === t}
                        onClick={() => setTheme(t)}
                    >
                        {t}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
