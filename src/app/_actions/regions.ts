import * as internalApi from "@/services/api/internal";

export const getRegions = async (
    ...args: Parameters<typeof internalApi.regions.findAll>
) => await internalApi.regions.findAll(...args);
