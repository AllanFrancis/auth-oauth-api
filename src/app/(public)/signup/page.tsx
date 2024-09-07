import Link from 'next/link';
import { SignupForm } from './_components/signup-form';
export default function Page() {
  return (
      <div className='flex min-h-svh items-center justify-center '>
        <SignupForm />
      </div>
  );
}