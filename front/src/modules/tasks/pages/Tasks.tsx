import { Header } from "@/modules/tasks/components/Header";
import { TaskList } from "@/modules/tasks/components/TaskList";
import { useEffect } from "react";
import { Outlet } from "react-router";
import type { ITask } from "../types/taskType";
import { taskStore } from "../store/taskStore";
const list: ITask[] = [
  {
    id: "1",
    title: "Task In Progress",
    description: "Cosas que no se ha dado",
    icon: "clock",
    status: "progress",
  },
  {
    id: "2",
    title: "Task Completed",
    description: "Cosas que no se ha dado",
    icon: "train",
    status: "completed",
  },
  {
    id: "3",
    title: "Task Won't Do",
    description: "Cosas que no se ha dado",
    icon: "coffe",
    status: "wontdo",
  },
];
const Tasks = () => {
  const { setTasks } = taskStore();
  useEffect(() => {
    setTasks(list);
  }, []);
  return (
    <div className="max-w-[616px] px-4">
      <Outlet />
      <Header />
      <TaskList />
    </div>
  );
};

export default Tasks;
