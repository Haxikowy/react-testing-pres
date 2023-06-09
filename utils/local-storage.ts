export function addToLocalStorage<Payload>(
  key: string,
  payload: Payload
): void {
  window.localStorage.setItem(key, JSON.stringify(payload));
}

export function deleteFromLocalStorage(key: string): void {
  window.localStorage.removeItem(key);
}

export function getFromLocalStorage<Payload>(key: string): Payload | void {
  const res = window.localStorage.getItem(key);
  if (!res) {
    return console.warn(
      `There is no item with given key (${key}) in local storage!`
    );
  }

  return JSON.parse(res);
}
