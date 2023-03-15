import clsx from 'clsx';
import { format } from 'date-fns';
import { TodoItem } from '../../../types';
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
      className={clsx(styles.todoItem, { [styles.completed]: !!completedAt })}
    >
      <div className={styles.row}>
        <input
          type="checkbox"
          checked={!!completedAt}
          onChange={() => onTodoStatusChange(id)}
        />
        <div>
          <p>{title}</p>
          <span>{format(new Date(createdAt), 'yyyy-MM-dd HH:mm:ss')}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => onTodoDelete(id)}>
        <TrashIcon />
      </button>
    </li>
  );
}
