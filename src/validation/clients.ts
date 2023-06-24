import { z } from "zod";

export const ClientIdParams = z.object({
  id: z.preprocess((e) => Number(e), z.number()),
});

export const CreateClientValidation = z.object({
  name: z.string().min(2).trim(),
  email: z.string().trim(),
  phone: z.string().length(9).trim(),
  cpf: z.string().length(11),
  sex: z.enum(["MALE", "FEMALE"]),
});

export const UpdateClientValidation = z.object({
  name: z.string().min(2).trim().optional(),
  email: z.string().trim().optional(),
  phone: z.string().length(9).trim().optional(),
  cpf: z.string().length(11).optional(),
  sex: z.enum(["MALE", "FEMALE"]).optional(),
});
