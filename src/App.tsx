import { useEffect, useState } from 'react';
import { AddTodoFormValues, Todos } from '../types';
import { addToLocalStorage, getFromLocalStorage } from '../utils';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

import styles from './App.module.scss';

export function App() {
  const [todos, setTodos] = useState<Todos>(getFromLocalStorage('todos') ?? []);

  useEffect(() => {
    addToLocalStorage('todos', todos);
  }, [todos]);

  function onAddTodo(formValues: AddTodoFormValues) {
    setTodos((prev) => [...prev, formValues]);
  }

  function onTodoStatusChange(id: string) {
    setTodos((prev) =>
      prev.reduce<Todos>((acc, curr) => {
        if (curr.id !== id) return [...acc, curr];

        return [
          ...acc,
          { ...curr, completedAt: curr.completedAt ? undefined : new Date() },
        ];
      }, [])
    );
  }

  function onTodoDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <main className={styles.main}>
      <AddTodoForm onSubmit={onAddTodo} />
      <TodoList
        todos={todos}
        onTodoStatusChange={onTodoStatusChange}
        onTodoDelete={onTodoDelete}
      />
    </main>
  );
}
