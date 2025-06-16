import { PageProps } from "@/types/app";
import { CountryGrid } from "./_components/CountryGrid";

export default async function Home({}: PageProps) {
    return (
        <section aria-label="Countries List">
            <CountryGrid />
        </section>
    );
}
