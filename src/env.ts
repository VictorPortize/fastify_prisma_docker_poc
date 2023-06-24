import { z } from "zod";

const env = z.object({
  DATABASE_URL: z.string(),
});

const variables = env.parse(process.env);

process.env = variables;

export default variables;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
