import { metadata } from "@/configs/metadata";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link
            href="/"
            className="text-xl font-bold transition-all hover:opacity-60"
        >
            {metadata.title}
        </Link>
    );
};
