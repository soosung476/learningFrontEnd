export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};
export type TaskListProps = {
  tasks: TaskProps[];
  handleUpdateTask: (task: TaskProps) => void;
  onRemoveTask: (id: number) => void;
};
// Omit <타입명 , "제거할 속성"> & { 추가할 속성 }
export type TaskItemProps = Omit<TaskListProps, "tasks"> & {
  task: TaskProps;
};

export type TaskPageResponse = {
  items: TaskProps[];
  total: number;
  total_pages: number;
  page: number;
  size: number;
};
