type LocalStorageKey = 'token';

class LocalStorageManager {
  static setItem = (filedName: LocalStorageKey, value: string) => {
    localStorage.setItem(filedName, value);
  };

  static getItem = (filedName: LocalStorageKey) => {
    localStorage.getItem(filedName);
  };
}

export default LocalStorageManager;
