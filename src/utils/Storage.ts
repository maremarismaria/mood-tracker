import { STORAGE_KEY } from "@/constants";
import type { DayInfo } from "@/types";

export const getStore: () => DayInfo[] = () => {
  const store = localStorage.getItem(STORAGE_KEY);
  return store ? JSON.parse(store) : undefined;
};

export const updateStore = (content: DayInfo) => {
  const store = getStore();
  let _content: DayInfo[] = [content];

  if (store) {
    const alreadyStored = store.some(
      ({ day, month }) => day === content.day && month === content.month
    );
    _content = alreadyStored ? [...store] : [...store, ..._content];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(_content));
};

export const deleteStore = () => {
  localStorage.removeItem(STORAGE_KEY);
};
