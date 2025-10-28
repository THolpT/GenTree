import type { Tree } from "../types";
import { api } from "./apiInstance";

export const treeApi = {
  getAll: () => api.get<Tree[]>("/trees"),
  getById: (id: string) => api.get<Tree>(`/trees/${id}`),
  create: (data: Omit<Tree, "id" | "persons">) => api.post<Tree>("/trees", data),
  update: (id: string, data: Partial<Tree>) => api.put<Tree>(`/trees/${id}`, data),
  delete: (id: string) => api.delete(`/trees/${id}`),
};
