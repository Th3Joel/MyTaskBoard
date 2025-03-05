import IconAdd from "@/assets/Add_round_duotone.svg";
import { useNavigate } from "react-router";
import { ItemList } from "./ItemList";
export const TaskList = () => {
  const useNav = useNavigate();
  return (
    <ul className="mt-10 flex flex-col gap-5">
      <ItemList
        title="Task in progress"
        icon="clock"
        typeTask="progress"
        click={() => {
          useNav("/task/add");
        }}
      />
      <ItemList title="Task Completed" icon="train" typeTask="completed" />
      <ItemList title="Task Won't Do" icon="coffe" typeTask="wontdo" />

      <div className="bg-[#E3E8EF] p-4 rounded-2xl flex">
        <div className="flex gap-5">
          <div className="grid place-items-center bg-white rounded-xl w-[45px] h-[40px] text-center text-[20px]">
            📚
          </div>
          <div>
            <div className="text-[20px] font-bold">Task To Do</div>
            <p className="text-[16px] font-[300]">
              Create your tasks favorites with personalized colors and icons
              about you task
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5E8D5] p-4 rounded-2xl flex justify-between">
        <div className="flex items-center gap-5">
          <div className="bg-[#E9A23B] rounded-xl w-[40px] h-[40px] grid place-items-center">
            <img className="w-6" src={IconAdd} alt="Icon add svg" />
          </div>
          <div className="text-[14px] font-bold">Add new task</div>
        </div>
      </div>
    </ul>
  );
};
