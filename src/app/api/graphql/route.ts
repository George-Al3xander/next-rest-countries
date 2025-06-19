import { CountryResolver, RegionsResolver } from "@/graphql/resolvers";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
    resolvers: [CountryResolver, RegionsResolver],
});

const server = new ApolloServer({ schema });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req) => ({ req }),
});

export const GET = async (request: NextRequest) => handler(request);
export const POST = async (request: NextRequest) => handler(request);
