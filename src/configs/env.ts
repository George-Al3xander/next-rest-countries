import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        GRAPHQL_API_URL: z.string().url(),
    },
    runtimeEnv: {
        GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    },
});
