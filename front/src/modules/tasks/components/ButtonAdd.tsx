import IconAdd from "@/assets/Add_round_duotone.svg";

export const ButtonAdd = ({ click }: { click: () => void }) => {
  return (
    <button
      onClick={click}
      type="button"
      className="bg-[#F5E8D5] mb-3 p-4 rounded-2xl flex justify-between hover:scale-105 duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-5">
        <div className="bg-[#E9A23B] rounded-xl w-[40px] h-[40px] grid place-items-center">
          <img className="w-6" src={IconAdd} alt="Icon add svg" />
        </div>
        <div className="text-[14px] font-bold">Add new task</div>
      </div>
    </button>
  );
};
