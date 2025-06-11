import { env } from "@/configs/env";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const internalClient = new ApolloClient({
    uri: env.GRAPHQL_API_URL,
    cache: new InMemoryCache(),
});
