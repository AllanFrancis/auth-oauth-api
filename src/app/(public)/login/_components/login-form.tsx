'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../_actions/login';
import CardWrapper from '@/components/auth/card-wrapper';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useAuthGoogle } from '@/hooks/use-auth-google';

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  const { isLoading, loginWithGoogle } = useAuthGoogle();

  return (
    <CardWrapper
      headerLabel="Bem vindo de volta"
      backButtonLabel="Não tem uma conta?"
      backButtonHref="/signup"
    >
      <div className='flex flex-col space-y-4'>
      
    <form action={action} className="space-y-4">
        <div className='space-y-2'>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            type="email"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input id="password" type="password" name="password" />
          {state?.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
          <Button
              size="sm"
              asChild
              variant="link"
              className="px-0 font-normal flex justify-end text-muted-foreground hover:text-primary"
            >
              <Link href="/reset">Esqueceu sua senha?</Link>
            </Button>
        </div>
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <LoginButton />
        
    </form>
    <Separator/>
    <Button onClick={loginWithGoogle} disabled={isLoading}>
      {isLoading ? 'Carregando...' : 'Entrar com Google'}
    </Button>
    </div>
    </CardWrapper>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} type="submit" className="mt-4 w-full">
      {pending ? 'Submitting...' : 'Sign up'}
    </Button>
  );
}