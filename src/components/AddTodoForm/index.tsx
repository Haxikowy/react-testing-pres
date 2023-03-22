import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AddTodoFormValues } from '../../types';
import styles from './AddTodoForm.module.scss';

interface Props {
  onSubmit: (formValues: AddTodoFormValues) => void;
  initialValues?: { title: string; isCompleted: boolean };
}

export function AddTodoForm({
  onSubmit,
  initialValues = { title: '', isCompleted: false },
}: Props) {
  const [formValues, setFormValues] = useState(initialValues);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values: AddTodoFormValues = {
      id: uuid(),
      title: formValues.title,
      completedAt: formValues.isCompleted ? new Date() : undefined,
      createdAt: new Date(),
    };

    onSubmit(values);
    setFormValues(initialValues);
  }

  const handleChangeFactory =
    (key: keyof typeof formValues) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      }));
    };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="checkbox"
        checked={formValues.isCompleted}
        onChange={handleChangeFactory('isCompleted')}
      />
      <input
        className={styles.textInput}
        type="text"
        value={formValues.title}
        onChange={handleChangeFactory('title')}
        placeholder="Create todo..."
      />
    </form>
  );
}
