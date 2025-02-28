import IconProgress from "@/assets/Time_atack_duotone.svg";
import IconCompleted from "@/assets/Done_round_duotone.svg";
import IconWontDo from "@/assets/close_ring_duotone.svg";

const IconsTaks: Record<string, string> = {
  computer: "👨🏻‍💻",
  message: "💬",
  coffe: "☕",
  train: "🏋🏻",
  books: "📚",
  clock: "⏰",
};
type TypeTask = "completed" | "progress" | "wontdo";

const TypeTask = {
  progress: {
    bg: "bg-[#F5D565]",
    buttonColor: "bg-[#E9A23B]",
    iconButton: IconProgress,
  },
  completed: {
    bg: "bg-[#A0ECB1]",
    buttonColor: "bg-[#32D657]",
    iconButton: IconCompleted,
  },
  wontdo: {
    bg: "bg-[#F7D4D3]",
    buttonColor: "bg-[#DD524C]",
    iconButton: IconWontDo,
  },
};

interface IItemList {
  typeTask: TypeTask;
  icon: string;
  title: string;
  click?: () => void;
}

export const ItemList = ({ typeTask, icon, title, click }: IItemList) => {
  return (
    <li
      onClick={click}
      className={`${TypeTask[typeTask].bg} p-4 rounded-2xl flex justify-between hover:scale-105 duration-300 cursor-pointer`}
    >
      <div className="flex items-center gap-5">
        <div className="grid place-items-center bg-white rounded-xl w-[40px] h-[40px] text-center text-[20px]">
          {IconsTaks[icon]}
        </div>
        <div className="text-[20px] font-bold">{title}</div>
      </div>
      <div
        className={`${TypeTask[typeTask].buttonColor} rounded-xl w-[40px] h-[40px] grid place-items-center`}
      >
        <img className="w-6" src={TypeTask[typeTask].iconButton} />
      </div>
    </li>
  );
};
