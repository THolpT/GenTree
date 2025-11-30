import type { User } from "../types";
import { api } from "./apiInstance";

export const userApi = {
  getAll: () => api.get<User[]>("/users"),
  getById: (id: string) => api.get<User>(`/users/${id}`),
  create: (data: Omit<User, "id" | "trees">) => api.post<User>("/users", data),
  update: (id: string, data: Partial<User>) => api.put<User>(`/users/${id}`, data),
  delete: (id: string) => api.delete(`/users/${id}`),
};
