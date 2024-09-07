'use server'

import { FormState, LoginFormSchema } from "@/schemas/authSchemas"

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {

  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  const errorMessage = { message: 'Invalid login credentials.' };

  // Se algum campo do formulário for inválido, retorne um erro
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(formData.get('email'), formData.get('password'));

  // 4. If login successful, create a session for the user and redirect
  const userId = '123';
  //await createSession(userId);
}

export async function logout() {
  //deleteSession();
}