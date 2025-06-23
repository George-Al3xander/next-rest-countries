import { act, renderHook } from "@testing-library/react";
import { ChangeEvent } from "react";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { useSearch } from "../use-search";

const setSearchParamMock = vi.fn();

vi.mock("@/hooks/use-modify-search-params", () => {
    const searchParams = new URLSearchParams();

    return {
        useModifySearchParams: () => ({
            searchParams,
            setSearchParam: setSearchParamMock,
        }),
    };
});

describe("useSearch", () => {
    beforeAll(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.clearAllTimers();
        vi.clearAllMocks();
    });

    it("should initialize with value from searchParams", () => {
        const { result } = renderHook(() => useSearch());
        expect(result.current.value).toBe("");
    });

    it("should update inputValue on onChange", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            result.current.onChange({
                target: { value: "hello" },
            } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.value).toBe("hello");
    });

    it("should reset debounce timer on rapid input", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            result.current.onChange({
                target: { value: "a" },
            } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.value).toBe("a");
        act(() => {
            result.current.onChange({
                target: { value: "ab" },
            } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.value).toBe("ab");
    });
});
