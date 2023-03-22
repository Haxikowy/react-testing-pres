import clsx from 'clsx';
import { format } from 'date-fns';
import { TodoItem } from '../../types';
import { ReactComponent as TrashIcon } from './trash.svg';

import styles from './Todo.module.scss';

interface Props extends TodoItem {
  onTodoStatusChange: (id: string) => void;
  onTodoDelete: (id: string) => void;
}

export function Todo({
  id,
  createdAt,
  title,
  completedAt,
  onTodoStatusChange,
  onTodoDelete,
}: Props) {
  return (
    <li
      data-testid={`todo-item--${id}`}
      className={clsx(styles.todoItem, { [styles.completed]: !!completedAt })}
    >
      <div className={styles.row}>
        <input
          type="checkbox"
          data-testid={`todo-item__checkbox--${id}`}
          checked={!!completedAt}
          onChange={() => onTodoStatusChange(id)}
        />
        <div className={styles.details}>
          <p>{title}</p>
          <span>{format(new Date(createdAt), 'yyyy-MM-dd, HH:mm:ss')}</span>
        </div>
      </div>
      <button
        data-testid={`todo-item__delete-btn--${id}`}
        className={styles.deleteButton}
        onClick={() => onTodoDelete(id)}
      >
        <TrashIcon />
      </button>
    </li>
  );
}
