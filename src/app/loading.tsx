import { LoaderIcon } from "@/ui/icons";

const Loading = () => (
    <section className="flex h-[50vh] items-center justify-center">
        <div>
            <LoaderIcon className="size-10 animate-spin" />
            <span className="sr-only">Loading data</span>
        </div>
    </section>
);

export default Loading;
