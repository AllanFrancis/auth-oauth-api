import { createSession } from '@/actions/auth/session';
import { useEffect, useState } from 'react';

export const useAuthGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.href = `http://localhost:3333/auth/google/login`;
    setIsLoading(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refreshToken = urlParams.get('ref');
    createSession(refreshToken || '');

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = "http://localhost:3000/dashboard";
    }
  }, []);

  return { isLoading, loginWithGoogle };
};