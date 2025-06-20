import { Button } from "@/ui/components/atoms/Button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="flex min-h-[50vh] flex-col items-center justify-center gap-10 px-4 text-center">
            <h2 className="mb-4 text-5xl font-extrabold">
                404 - Page Not Found
            </h2>
            <p className="mb-6 max-w-md text-gray-700 dark:text-gray-300">
                Sorry, we couldn’t find the page you were looking for.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" aria-label="Go to home page">
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        </section>
    );
};

export default NotFoundPage;
