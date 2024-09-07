import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
    .trim(),
  email: z.string().email({ message: 'Insira um e-mail válido.' }).trim(),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Insira um e-mail válido.' }),
  password: z.string().min(1, { message: 'O campo de senha não deve estar vazio.' }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};