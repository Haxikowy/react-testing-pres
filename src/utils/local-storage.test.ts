import { addToLocalStorage } from './local-storage';

describe('addToLocalStorage',  () => {
  const mock = { test: '12345' };

  // happy path
  test('item should be stored in local storage', async () => {
    // ARRANGE
    const key = 'mock';
    addToLocalStorage(key, mock);

    // ACT
    const response = window.localStorage.getItem(key);
    const result = JSON.parse(response!);

    // ASSERT
    expect(result).toStrictEqual(mock);
  });
});
