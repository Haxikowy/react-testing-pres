import { describe, vitest } from 'vitest';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { Todo } from './index';

describe('Todo', async () => {
  const onTodoStatusChange = vitest.fn();
  const onTodoDelete = vitest.fn();

  beforeEach(() => {
    onTodoStatusChange.mockReset();
    onTodoDelete.mockReset();
  });

  test('should display Todo', async () => {
    // ARRANGE
    const title = 'Test title';
    const id = 'b0b9ef2c-790a-49d4-a2a5-777c61c5c009';

    render(
      <Todo
        onTodoStatusChange={onTodoStatusChange}
        onTodoDelete={onTodoDelete}
        id={id}
        title={title}
        createdAt={new Date()}
      />
    );

    // ACT
    const todoItem = await screen.findByTestId(`todo-item--${id}`);

    // ASSERT
    expect(todoItem).toBeVisible();
  });

  test('should trigger onTodoStatusChange with todo id', async () => {
    // ARRANGE
    const title = 'Test title';
    const id = 'b0b9ef2c-790a-49d4-a2a5-777c61c5c009';

    render(
      <Todo
        onTodoStatusChange={onTodoStatusChange}
        onTodoDelete={onTodoDelete}
        id={id}
        title={title}
        createdAt={new Date()}
      />
    );

    // ACT
    const checkbox = await screen.findByTestId(`todo-item__checkbox--${id}`);

    await act(() => {
      fireEvent.click(checkbox);
    });

    // ASSERT
    expect(onTodoStatusChange).toBeCalledWith(id);
  });

  test('should trigger onTodoDelete with todo id', async () => {
    // ARRANGE
    const title = 'Test title';
    const id = 'b0b9ef2c-790a-49d4-a2a5-777c61c5c009';

    render(
      <Todo
        onTodoStatusChange={onTodoStatusChange}
        onTodoDelete={onTodoDelete}
        id={id}
        title={title}
        createdAt={new Date()}
      />
    );

    // ACT
    const deleteBtn = await screen.findByTestId(`todo-item__delete-btn--${id}`);

    await act(() => {
      fireEvent.click(deleteBtn);
    });

    // ASSERT
    expect(onTodoDelete).toBeCalledWith(id);
  });
});
