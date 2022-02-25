import { STORAGE_KEY } from "@/constants";
import type { DayInfo } from "@/types";

export const getStore: () => DayInfo[] = () => {
  const store = localStorage.getItem(STORAGE_KEY);
  return store ? JSON.parse(store) : undefined;
};

export const updateStore = (content: DayInfo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
};

export const deleteStore = () => {
  localStorage.removeItem(STORAGE_KEY);
};
