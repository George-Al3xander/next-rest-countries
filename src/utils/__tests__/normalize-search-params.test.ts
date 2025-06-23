import { describe, expect, it } from "vitest";
import { normalizeSearchParams } from "../normalize-search-params";

const toPromise = <T extends object>(obj: T): Promise<T> =>
    Promise.resolve(obj);

describe("normalizeSearchParams", () => {
    it("should return an empty object when given an empty object", async () => {
        const result = await normalizeSearchParams<"q">(toPromise({}));
        expect(result).toEqual({});
    });

    it("should normalize single string values", async () => {
        const result = await normalizeSearchParams<"q" | "sort">(
            toPromise({
                q: "test",
                sort: "asc",
            }),
        );
        expect(result).toEqual({ q: "test", sort: "asc" });
    });

    it("should normalize array values by taking the first element", async () => {
        const result = await normalizeSearchParams<"q" | "tags">(
            toPromise({
                q: ["test", "other"],
                tags: ["js", "ts"],
            }),
        );
        expect(result).toEqual({ q: "test", tags: "js" });
    });

    it("should ignore keys with falsy values", async () => {
        const result = await normalizeSearchParams<"q" | "sort" | "empty">(
            toPromise({
                q: "search",
                sort: "",
                empty: undefined,
            }),
        );
        expect(result).toEqual({ q: "search" });
    });

    it("should handle mixed value types correctly", async () => {
        const result = await normalizeSearchParams<"q" | "page" | "filter">(
            toPromise({
                q: "term",
                page: ["2"],
                filter: undefined,
            }),
        );
        expect(result).toEqual({ q: "term", page: "2" });
    });

    it("should work with awaited promises of searchParams", async () => {
        const asyncParams = toPromise({
            category: ["books", "movies"],
            available: "yes",
        });

        const result = await normalizeSearchParams<"category" | "available">(
            asyncParams,
        );
        expect(result).toEqual({ category: "books", available: "yes" });
    });
});
