'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { signup } from '../_actions/signup';
import CardWrapper from '../../_components/card-wrapper';

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <CardWrapper
    headerLabel="Bem vindo de volta"
    backButtonLabel="Já tem uma conta?"
    backButtonHref="/login"
  >
    <form action={action}>
      <div className="flex flex-col space-y-4">
        <div className='space-y-2'>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="John Doe" />
        </div>
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
        <div className='space-y-2'>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="john@example.com" />
        </div>
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
        <div className='space-y-2'>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" />
        </div>
        {state?.errors?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <SignupButton />
      </div>
    </form>
    </CardWrapper>
  );
}

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" className="mt-2 w-full">
      {pending ? 'Submitting...' : 'Login'}
    </Button>
  );
}