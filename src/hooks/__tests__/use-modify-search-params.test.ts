import { useModifySearchParams } from "@/hooks/use-modify-search-params";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockPush = vi.fn();

vi.mock("next/navigation", () => {
    const currentParams = new URLSearchParams({ foo: "bar", page: "1" });

    return {
        useRouter: vi.fn(() => ({
            push: mockPush,
        })),
        useSearchParams: vi.fn(() => currentParams),
        __esModule: true,
    };
});

describe("useModifySearchParams", () => {
    beforeEach(() => {
        mockPush.mockClear();
    });

    it("should return searchParams and setSearchParam function", () => {
        const { result } = renderHook(() => useModifySearchParams());

        expect(result.current.searchParams).toBeInstanceOf(URLSearchParams);
        expect(typeof result.current.setSearchParam).toBe("function");
    });

    it("should update the URL when setting a new search param", () => {
        const { result } = renderHook(() => useModifySearchParams());

        act(() => {
            result.current.setSearchParam("sort", "asc");
        });

        expect(mockPush).toHaveBeenCalledWith("?foo=bar&page=1&sort=asc");
    });

    it("should replace an existing param if the key already exists", () => {
        const { result } = renderHook(() => useModifySearchParams());

        act(() => {
            result.current.setSearchParam("foo", "baz");
        });

        expect(mockPush).toHaveBeenCalledWith("?foo=baz&page=1");
    });

    it("should delete the param if the value is falsy", () => {
        const { result } = renderHook(() => useModifySearchParams());

        act(() => {
            result.current.setSearchParam("foo", "");
        });

        expect(mockPush).toHaveBeenCalledWith("?page=1");
    });

    it("should handle deletion when the key is not in the params", () => {
        const { result } = renderHook(() => useModifySearchParams());

        act(() => {
            result.current.setSearchParam("nonexistent", "");
        });

        expect(mockPush).toHaveBeenCalledWith("?foo=bar&page=1");
    });
});
