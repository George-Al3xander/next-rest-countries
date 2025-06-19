import { PageProps } from "@/types/app";
import { CountryDisplay } from "./_components/CountryDisplay";

type Props = PageProps<{ code: string }>;

export default async function CountryPage({ params }: Props) {
    const { code } = await params;

    return (
        <section aria-label="Country info">
            <CountryDisplay code={code} />
        </section>
    );
}
