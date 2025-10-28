import { createEffect, createEvent, createStore, sample } from "effector";
import { userApi } from "../api/userApi";
import type { User } from "../types";

// --- Effects
export const getUsersFx = createEffect(async () => {
  const res = await userApi.getAll();
  return res.data;
});

export const getUserByIdFx = createEffect(async (id: string) => {
  const res = await userApi.getById(id);
  return res.data;
});

export const createUserFx = createEffect(async (data: Omit<User, "id" | "trees">) => {
  const res = await userApi.create(data);
  return res.data;
});

export const updateUserFx = createEffect(async ({ id, data }: { id: string; data: Partial<User> }) => {
  const res = await userApi.update(id, data);
  return res.data;
});

export const deleteUserFx = createEffect(async (id: string) => {
  await userApi.delete(id);
  return id;
});

// --- Store
export const $users = createStore<User[]>([])
  .on(getUsersFx.doneData, (_, users) => users)
  .on(createUserFx.doneData, (state, user) => [...state, user])
  .on(updateUserFx.doneData, (state, updated) =>
    state.map(u => (u.id === updated.id ? updated : u))
  )
  .on(deleteUserFx.doneData, (state, id) => state.filter(u => u.id !== id));
