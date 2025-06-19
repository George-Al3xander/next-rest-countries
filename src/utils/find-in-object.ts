export const findInObject = <T extends Record<string, unknown>>({
    source,
    keysToSearch,
    query,
}: {
    source: T;
    keysToSearch: keyof T | (keyof T)[];
    query: string;
}): boolean => {
    if (!query.trim()) return false;

    const regex = new RegExp(query, "i");

    const keys = Array.isArray(keysToSearch) ? keysToSearch : [keysToSearch];
    return keys.some((key) => {
        const value = source[key];
        return typeof value === "string" && regex.test(value);
    });
};
