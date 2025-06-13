import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
    schema: process.env.GRAPHQL_API_URL!,
};

export default config;
