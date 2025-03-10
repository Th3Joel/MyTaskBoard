import HomeLayout from "@/modules/core/layouts/HomeLayout";
import EditTask from "@/modules/tasks/pages/EditTask";
import Tasks from "@/modules/tasks/pages/Tasks";
import { Route, Routes } from "react-router";

// <Route path="/task/add" element={<AddTask />} />
const Router = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Tasks />}>
          <Route path="/task/:id" element={<EditTask />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
