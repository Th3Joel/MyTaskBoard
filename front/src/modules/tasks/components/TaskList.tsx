import { ItemList } from "./ItemList";
import { Banner } from "./Banner";
import { ButtonAdd } from "./ButtonAdd";
import { NavLink } from "react-router";
import { taskStore } from "../store/taskStore";
import { uuid } from "@/modules/core/helpers/uuid";

export const TaskList = () => {
  const { tasks, add } = taskStore();

  return (
    <li className="mt-10 flex flex-col gap-5">
      {tasks.map((data) => (
        <NavLink to={`/task/${data.id}`} key={data.id}>
          <ItemList
            title={data.title}
            icon={data.icon}
            typeTask={data.status}
          />
        </NavLink>
      ))}

      <Banner />
      <ButtonAdd
        click={() => {
          add({
            id: uuid(),
            title: "New Task",
            description: "",
            icon: "coffe",
            status: "completed",
          });
        }}
      />
    </li>
  );
};
