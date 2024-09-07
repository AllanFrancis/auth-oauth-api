// src/api/user.ts

import apiClient from "@/utils/api-client";

export const getUserProfile = async () => {
  const response = await apiClient.get('/user/profile');
  return response.data;
};