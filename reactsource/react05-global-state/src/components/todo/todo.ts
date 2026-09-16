export const initialTodos = [
  {
    id: 1,
    title: "react 기초 알아보기",
    completed: true,
    important: true,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
  {
    id: 2,
    title: "컴포넌트 스타일링해 보기",
    completed: true,
    important: false,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
  {
    id: 3,
    title: "일정관리 앱 만들어보기",
    completed: false,
    important: false,
    createDate: new Date(),
    lastModifiedDate: new Date(),
  },
];

// Todo Type
// insert 할 때 id는 입력 안함, 날짜 입력 안함 => 자동 생성

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  createDate: Date;
  lastModifiedDate: Date;
};

export type TodosProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
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
export type TodoUpsert = Omit<
  Todo,
  "id" | "createDate" | "lastModifiedDate"
> & { id?: number };
