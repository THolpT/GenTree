import { createEffect, createStore } from "effector";
import { treeApi } from "../api/treeApi";
import type { Tree } from "../types";
import { $currentUser } from "./userStore";

export const getTreesFx = createEffect(async () => (await treeApi.getAll()).data);
export const getTreeByIdFx = createEffect(async (id: string) => (await treeApi.getById(id)).data);
export const createTreeFx = createEffect(async (data: { authorId: string }) => (await treeApi.create(data)).data);
export const updateTreeFx = createEffect(async ({ id, data }: { id: string; data: Partial<Tree> }) => (await treeApi.update(id, data)).data);
export const deleteTreeFx = createEffect(async (id: string) => {
  await treeApi.delete(id);
  return id;
});

export const $trees = createStore<Tree[]>([])
  .on(getTreesFx.doneData, (_, data) => data)
  .on(createTreeFx.doneData, (state, t) => [...state, t])
  .on(updateTreeFx.doneData, (state, t) => state.map(tree => tree.id === t.id ? t : tree))
  .on(deleteTreeFx.doneData, (state, id) => state.filter(tree => tree.id !== id));

  $currentUser.on(createTreeFx.doneData, (user, newTree) => {
    if (!user) return user;
    return {
      ...user,
      trees: [...user.trees, newTree],
    };
  });
