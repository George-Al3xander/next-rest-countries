import { PageProps } from "@/types/app";
import { CountryGrid } from "./_components/CountryGrid";

export default async function Home({ searchParams }: PageProps) {
    const query = (await searchParams).q;

    return (
        <section aria-label="Countries List">
            <CountryGrid query={query} />
        </section>
    );
}
