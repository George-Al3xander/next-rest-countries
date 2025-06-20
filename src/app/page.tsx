import { PageProps } from "@/types/app";
import { normalizeSearchParams } from "@/utils/normalize-search-params";
import { CountryGrid } from "./_components/CountryGrid";

export default async function Home({ searchParams }: PageProps) {
    const { q, region } = await normalizeSearchParams<"q" | "region">(
        searchParams,
    );

    return (
        <section aria-label="Countries List">
            <CountryGrid query={q} region={region} />
        </section>
    );
}
