import { Todos } from '../../../types';
import { Todo } from '../Todo';
import styles from './TodoList.module.scss';

interface Props {
  todos: Todos;
  onTodoStatusChange: (id: string) => void;
  onTodoDelete: (id: string) => void;
}

export function TodoList({ todos, onTodoStatusChange, onTodoDelete }: Props) {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          onTodoStatusChange={onTodoStatusChange}
          onTodoDelete={onTodoDelete}
        />
      ))}
    </ul>
  );
}
