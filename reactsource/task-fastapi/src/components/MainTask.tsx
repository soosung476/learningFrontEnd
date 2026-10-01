import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import type { TaskPageResponse, TaskProps } from "../types/type";
import { deleteTask, getTasks, postTask, putTask } from "../apis/taskApi";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
const initData = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  total_pages: 0,
};

const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskPageResponse>(initData);
  const { total_pages } = tasks;
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  // 여행계획 추가하는 함수
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  const handleAddTask = async (text: string) => {
    if (!text.trim()) return;
    try {
      await postTask(text);
      if (page == 1) {
        const tasks = await getTasks(1, size);
        setTasks(() => tasks);
      } else {
        setSearchParams({
          page: String(1),
          size: String(size),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTask = async (task: TaskProps) => {
    try {
      await putTask(task);

      const tasks = await getTasks(page, size);
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveTask = async (taskID: number) => {
    try {
      await deleteTask(taskID);
      const tasks = await getTasks(page, size);
      setTasks(() => tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (newPage: number) => {
    // 사용자가 누르는 페이지 가져오기
    setSearchParams({
      page: String(newPage),
      size: String(size),
    });
  };

  useEffect(() => {
    const fetchData = async (page: number, size: number) => {
      try {
        const serverData = await getTasks(page, size);
        setTasks(serverData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(page, size);
  }, [page, size]);

  if (loading) return <p>불러오는 중...</p>;
  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask
          tasks={tasks.items}
          handleUpdateTask={handleUpdateTask}
          onRemoveTask={handleRemoveTask}
        />
        <Pagination
          page={page}
          totalPages={total_pages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default MainTask;
