/* window and localStorage global object for frontend usage */

export enum StorageEnum {
  User = 'user',
  Token = 'token',
  Settings = 'settings',
  I18N = 'i18nextLng',
}

export const getStorageItem = <T>(key: StorageEnum): T | null => {
  let value = null;
  try {
    const result = window.localStorage.getItem(key);
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }

  return value;
};

export const getStorageStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};

export const setStorageItem = <T>(key: StorageEnum, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorageItem = (key: StorageEnum): void => {
  localStorage.removeItem(key);
};

export const clearStorageItem = (): void => {
  localStorage.clear();
};
