import { GetRegionsDocument, GetRegionsQuery } from "@/graphql/generated";
import { internalClient } from "@/services/libs/internalClient";

export const findAll = async (): Promise<string[]> => {
    const { data } = await internalClient.query<GetRegionsQuery>({
        query: GetRegionsDocument,
    });

    return data.regions;
};
