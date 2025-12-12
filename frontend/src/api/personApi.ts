import type { Person } from "../types";
import { api } from "./apiInstance";

export const personApi = {
  getAll: () => api.get<Person[]>("/persons"),
  getById: (id: string) => api.get<Person>(`/persons/${id}`),
  create: (data: Omit<Person, "id">) => api.post<Person>("/persons", data),
  update: (id: string, data: Partial<Person>) => api.put<Person>(`/persons/${id}`, data),
  delete: (id: string) => api.delete(`/persons/${id}`),

  uploadGedcom: (treeId: string, file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return api.post(`/trees/${treeId}/import-gedcom`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
