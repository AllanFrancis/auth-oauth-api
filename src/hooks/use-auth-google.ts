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
    const token = urlParams.get('token');
    const refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = "http://localhost:3000/app";
    }
  }, []);

  return { isLoading, loginWithGoogle };
};