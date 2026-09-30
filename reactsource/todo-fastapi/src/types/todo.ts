export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  created_at: Date;
  updated_at: Date;
};

export type TodoPageResponse = {
  items: Todo[];
  total: number;
  total_pages: number;
  page: number;
  size: number;
  completed: boolean | null;
};

export type TodosProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdate: (id: number) => void;
};

export type TodoProps = Omit<TodosProps, "todos"> & {
  todo: Todo;
};

export type TodoCreate = {
  title: string;
  completed: boolean;
  important: boolean;
};

// update + insert 포함해서 사용
export type TodoUpsert = Omit<Todo, "id" | "created_at" | "updated_at"> & {
  id?: number;
};
