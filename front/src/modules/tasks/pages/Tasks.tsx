import { Header } from "@/modules/tasks/components/Header";
import { TaskList } from "@/modules/tasks/components/TaskList";
import { Outlet } from "react-router";

const Tasks = () => {
  return (
    <div className="max-w-[616px] px-4">
      <Outlet />
      <Header />
      <TaskList />
    </div>
  );
};

export default Tasks;
