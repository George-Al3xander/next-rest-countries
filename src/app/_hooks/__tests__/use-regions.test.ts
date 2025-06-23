import { useModifySearchParams } from "@/hooks/use-modify-search-params";
import { useQuery } from "@apollo/client";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import { useRegions } from "../use-regions";

vi.mock("@/services/libs/internalClient", () => ({
    internalClient: vi.fn(),
}));

vi.mock("@/hooks/use-modify-search-params", () => ({
    useModifySearchParams: vi.fn(),
}));

vi.mock("@apollo/client", () => ({
    useQuery: vi.fn(),
}));

const mockSetSearchParam = vi.fn();

describe("useRegions", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should return loading state when query is in progress", () => {
        (useQuery as Mock).mockReturnValue({
            loading: true,
            data: null,
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        expect(result.current.isUnavailable).toBe(true);
        expect(result.current.regions).toEqual(["all regions"]);
        expect(result.current.currentRegion).toBe("all regions");
    });

    it("should return error state if query encounters an error", () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: null,
            error: new Error("Error"),
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        expect(result.current.isUnavailable).toBe(true);
        expect(result.current.regions).toEqual(["all regions"]);
        expect(result.current.currentRegion).toBe("all regions");
    });

    it("should handle successful query and return regions", () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: { regions: ["Region 1", "Region 2"] },
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        expect(result.current.isUnavailable).toBe(false);
        expect(result.current.regions).toEqual([
            "all regions",
            "region 1",
            "region 2",
        ]);
        expect(result.current.currentRegion).toBe("all regions");
    });

    it('should clear the region when setting the region to "All regions"', () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: { regions: ["Region 1", "Region 2"] },
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        act(() => {
            result.current.setRegion("All regions");
        });

        expect(mockSetSearchParam).toHaveBeenCalledWith("region", "");
    });

    it("should update the region when setting a valid region", () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: { regions: ["Region 1", "Region 2"] },
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        act(() => {
            result.current.setRegion("Region 1");
        });

        expect(mockSetSearchParam).toHaveBeenCalledWith("region", "Region 1");
    });

    it("should clear the region if the current region is invalid and regions are available", () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: { regions: ["Region 0", "Region 1", "Region 2"] },
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams([["region", "Invalid Region"]]),
            setSearchParam: mockSetSearchParam,
        });

        renderHook(() => useRegions());

        expect(mockSetSearchParam).toHaveBeenCalledWith("region", "");
    });

    it("should correctly detect if regions data is unavailable", () => {
        (useQuery as Mock).mockReturnValue({
            loading: false,
            data: null,
            error: null,
        });
        (useModifySearchParams as Mock).mockReturnValue({
            searchParams: new URLSearchParams(),
            setSearchParam: mockSetSearchParam,
        });

        const { result } = renderHook(() => useRegions());

        expect(result.current.isUnavailable).toBe(true);
    });
});
