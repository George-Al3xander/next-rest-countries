import { GetRegionsDocument, GetRegionsQuery } from "@/graphql/generated";
import { useModifySearchParams } from "@/hooks/use-modify-search-params";
import { internalClient } from "@/services/libs/internalClient";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const SEARCH_QUERY_KEY = "region";
const ALL_REGIONS_VALUE = "All regions";

export const useRegions = () => {
    const { data, loading, error } = useQuery<GetRegionsQuery>(
        GetRegionsDocument,
        {
            client: internalClient,
        },
    );
    const isUnavailable = loading || !!error || !data?.regions;
    const regions = [ALL_REGIONS_VALUE, ...(data?.regions ?? [])].map((s) =>
        s.toLowerCase(),
    );

    const { searchParams, setSearchParam } = useModifySearchParams();
    const currentRegion = (
        searchParams.get(SEARCH_QUERY_KEY) || ALL_REGIONS_VALUE
    ).toLowerCase();
    const clearRegion = () => setSearchParam(SEARCH_QUERY_KEY, "");
    const setRegion = (value: string) => {
        if (value.toLowerCase() === ALL_REGIONS_VALUE.toLowerCase())
            clearRegion();
        else setSearchParam(SEARCH_QUERY_KEY, value);
    };

    useEffect(() => {
        if (
            !loading &&
            regions.length > 0 &&
            !regions.slice(1).includes(currentRegion)
        ) {
            clearRegion();
        }
    }, [currentRegion, regions.length, loading]);

    return {
        currentRegion,
        regions,
        setRegion,
        isUnavailable,
    };
};
