import { FastifyPluginAsync } from "fastify";

const clients: FastifyPluginAsync = async (app, opts): Promise<void> => {
  app.get("/", async () => {
    return {};
  });
};

export default clients;
