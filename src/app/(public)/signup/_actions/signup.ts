'use server'

import { FormState, SignupFormSchema, LoginFormSchema } from "@/schemas/authSchemas"


export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  //1. Validate fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;


  // Here you would typically send the data to your API
  console.log('Form data:', formData)
  
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    message: 'User created successfully',
  }

}

