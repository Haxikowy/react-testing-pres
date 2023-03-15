export type Todos = TodoItem[];

export interface TodoItem {
  id: string;
  title: string;
  createdAt: Date | string;
  completedAt?: Date | string;
}

export interface AddTodoFormValues {
  id: string;
  title: string;
  createdAt: Date;
  completedAt?: Date;
}
