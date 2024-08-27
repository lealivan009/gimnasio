export enum LocalStorageKeys {
  REFRESH_TOKEN = "refreshToken",
  TOKEN = "token",
}

//Metodo para guardar en localstorage
export const saveInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

//Metodo para obtener valor del localstorage
export const getInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  if (!result) {
    return null;
  }
  try {
    return JSON.parse(result);
  } catch (e) {
    return result;
  }
};

//Metodo para remover un valor del localstorage
export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
}

//Metodo para limpiar el localstorage
export const clearLocalStorage = () => {
  localStorage.clear();
};
