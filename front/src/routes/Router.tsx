import { Route, Routes } from "react-router";
import Tasks from "@/modules/tasks/pages/Tasks";
import HomeLayout from "@/modules/core/layouts/HomeLayout";
import AddTask from "@/modules/tasks/pages/AddTask";
import EditTask from "@/modules/tasks/pages/EditTask";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Tasks />}>
          <Route path="/task" element={<AddTask />} />
          <Route path="/task/:id" element={<EditTask />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
