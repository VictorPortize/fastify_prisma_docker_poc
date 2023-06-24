import { PrismaClient } from "@prisma/client";

import env from "../env";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
  log: ["error", "info", "query", "warn"],
});

export default prisma;
