import { createEffect, createStore } from "effector";
import { personApi } from "../api/personApi";
import type { Person } from "../types";

export const getPersonsFx = createEffect(async () => (await personApi.getAll()).data);
export const getPersonByIdFx = createEffect(async (id: string) => (await personApi.getById(id)).data);
export const createPersonFx = createEffect(async (data: Omit<Person, "id">) => (await personApi.create(data)).data);
export const updatePersonFx = createEffect(async ({ id, data }: { id: string; data: Partial<Person> }) => (await personApi.update(id, data)).data);
export const deletePersonFx = createEffect(async (id: string) => {
  await personApi.delete(id);
  return id;
});

export const $persons = createStore<Person[]>([])
  .on(getPersonsFx.doneData, (_, data) => data)
  .on(createPersonFx.doneData, (state, p) => [...state, p])
  .on(updatePersonFx.doneData, (state, p) => state.map(person => person.id === p.id ? p : person))
  .on(deletePersonFx.doneData, (state, id) => state.filter(p => p.id !== id));
