import apiClient from "@/utils/api-client";

export const apiLogin = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

export const apiSignup = async (name: string, email: string, password: string) => {
  const response = await apiClient.post('/auth/signup', { name, email, password });
  return response.data;
};

export const apiRefreshToken = async (refreshToken: string) => {
  const response = await apiClient.post('/auth/refresh', { refreshToken } );
  return response.data;
};