import { useCallback } from "react";
import {
  createPersonFx,
  updatePersonFx,
  deletePersonFx,
} from "../stores/personStore";
import { Gender } from "../types";

/**
 * Хук для управления действиями над узлами (персонами в древе).
 * Можно будет адаптировать и под другие типы (Tree, User) при необходимости.
 */
export const useNodeActions = () => {
  /** Добавить нового человека в дерево */
  const handleAdd = useCallback(async (parentId: string, data: any) => {
    try {
      await createPersonFx({
        name: `${data.firstName} ${data.lastName}`.trim(),
        givenName: data.firstName || null,
        surname: data.lastName || null,
        gender: data.gender === "male" ? Gender.MALE : data.gender === "female" ? Gender.FEMALE : Gender.UNKNOWN,
        treeId: "TODO_TREE_ID", // сюда передай ID активного дерева
        birthDate: null,
        birthPlace: null,
        deathDate: null,
        deathPlace: null,
        img: null,
        spouseId: null,
        childId: null,
      });
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  }, []);

  /** Редактировать данные человека */
  const handleEdit = useCallback(async (nodeId: string, data: any) => {
    try {
      await updatePersonFx({
        id: nodeId,
        data: {
          givenName: data.firstName || null,
          surname: data.lastName || null,
          gender: data.gender === "male" ? Gender.MALE : data.gender === "female" ? Gender.FEMALE : Gender.UNKNOWN,
        },
      });
    } catch (error) {
      console.error("Ошибка при редактировании:", error);
    }
  }, []);

  /** Удалить человека */
  const handleDelete = useCallback(async (nodeId: string) => {
    try {
      await deletePersonFx(nodeId);
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  }, []);

  return { handleAdd, handleEdit, handleDelete };
};
