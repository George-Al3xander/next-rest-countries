import { env } from "@/configs/env";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const internalClient = new ApolloClient({
    uri: env.NEXT_PUBLIC_GRAPHQL_API_URL,
    cache: new InMemoryCache(),
});
