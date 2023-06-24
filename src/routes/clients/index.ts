import { FastifyPluginAsync } from "fastify";
import prisma from "../../database/prisma";
import {
  CreateClientValidation,
  ClientIdParams,
  UpdateClientValidation,
} from "../../validation/clients";

const clients: FastifyPluginAsync = async (app, opts): Promise<void> => {
  app.get("/", async function (request, reply) {
    return await prisma.client.findMany({});
  });

  app.get("/:id", async function (request, reply) {
    const { id } = ClientIdParams.parse(request.params);
    return await prisma.client.findFirst({ where: { id } });
  });

  app.post("/", async function (request, reply) {
    const client = CreateClientValidation.safeParse(request.body);
    if (!client.success) return reply.badRequest("Validação falhou");
    return await prisma.client.create({
      data: client.data,
    });
  });

  app.patch("/:id", async function (request, reply) {
    const { id } = ClientIdParams.parse(request.params);
    const client = UpdateClientValidation.safeParse(request.body);
    if (!client.success) return reply.badRequest("Validação falhou");
    return await prisma.client.update({
      data: client.data,
      where: { id: id },
    });
  });

  app.delete("/:id", async function (request, reply) {
    const { id } = ClientIdParams.parse(request.params);
    if (!id) return reply.badRequest("Validação falhou");
    await prisma.client.delete({
      where: { id: id },
    });
    return {
      succes: true,
    };
  });
};

export default clients;
