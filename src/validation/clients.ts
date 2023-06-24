import { z } from "zod";

export const ClientValidation = z.object({
  name: z.string().min(2).trim(),
  phone: z.string().length(9).trim(),
  cpf: z.string().length(11),
  sex: z.enum(["MALE", "FEMALE"]),
});
