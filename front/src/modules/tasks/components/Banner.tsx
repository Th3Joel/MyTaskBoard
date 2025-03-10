export const Banner = () => {
  return (
    <div className="bg-[#E3E8EF] p-4 rounded-2xl flex cursor-help">
      <div className="flex gap-5">
        <div className="grid place-items-center bg-white rounded-xl w-[45px] h-[40px] text-center text-[20px]">
          📚
        </div>
        <div>
          <div className="text-[20px] font-bold">Task To Do</div>
          <p className="text-[16px] font-[300]">
            Create your tasks favorites with personalized colors and icons with
            your state
          </p>
        </div>
      </div>
    </div>
  );
};
