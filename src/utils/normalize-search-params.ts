import { PageProps } from "@/types/app";

export const normalizeSearchParams = async <T extends string>(
    params: PageProps["searchParams"],
): Promise<{ [k in T]?: string }> => {
    const data = await params;

    const result: { [k in T]?: string } = {};

    for (const [k, v] of Object.entries(data)) {
        if (v) {
            result[k as T] = Array.isArray(v) ? v[0] : v;
        }
    }

    return result;
};
