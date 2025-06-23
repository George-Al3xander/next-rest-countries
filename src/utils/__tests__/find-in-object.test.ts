import { describe, expect, it } from "vitest";
import { findInObject } from "../find-in-object";

describe("findInObject", () => {
    const source = {
        name: "Alice Johnson",
        email: "alice@example.com",
        age: 30,
        notes: null,
        active: true,
    };

    it("should return false for an empty query string", () => {
        expect(
            findInObject({
                source,
                keysToSearch: "name",
                query: "",
            }),
        ).toBe(false);

        expect(
            findInObject({
                source,
                keysToSearch: "email",
                query: "   ",
            }),
        ).toBe(false);
    });

    it("should return true when query matches a string value (single key)", () => {
        expect(
            findInObject({
                source,
                keysToSearch: "name",
                query: "alice",
            }),
        ).toBe(true);

        expect(
            findInObject({
                source,
                keysToSearch: "email",
                query: "EXAMPLE",
            }),
        ).toBe(true);
    });

    it("should return false when query does not match any string values (single key)", () => {
        expect(
            findInObject({
                source,
                keysToSearch: "name",
                query: "bob",
            }),
        ).toBe(false);
    });

    it("should return true when query matches any of the specified keys (array of keys)", () => {
        expect(
            findInObject({
                source,
                keysToSearch: ["name", "email"],
                query: "johnson",
            }),
        ).toBe(true);

        expect(
            findInObject({
                source,
                keysToSearch: ["age", "email"],
                query: "alice",
            }),
        ).toBe(true);
    });

    it("should return false when none of the specified keys contain a matching string", () => {
        expect(
            findInObject({
                source,
                keysToSearch: ["age", "active"],
                query: "true",
            }),
        ).toBe(false);
    });

    it("should handle null and non-string values gracefully", () => {
        expect(
            findInObject({
                source,
                keysToSearch: ["notes", "age", "active"],
                query: "anything",
            }),
        ).toBe(false);
    });

    it("should work with a source object with only one key", () => {
        expect(
            findInObject({
                source: { description: "This is a test" },
                keysToSearch: "description",
                query: "test",
            }),
        ).toBe(true);
    });
});
