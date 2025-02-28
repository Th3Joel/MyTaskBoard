import LogoSvg from "@/assets/Logo.svg";
import EditButton from "@/assets/Edit_duotone.svg";
export const Header = () => {
  return (
    <div className="flex">
      <div className="mt-[9px]">
        <img src={LogoSvg} />
      </div>
      <div>
        <div className="flex">
          <h1 className="text-[40px] mx-2">My Task Board</h1>
          <div className="flex items-center">
            <button className="hover:scale-120 duration-300 cursor-pointer hover:bg-gray-200 rounded-full">
              <img src={EditButton} />
            </button>
          </div>
        </div>
        <h6 className="ml-2">Task to keep organised</h6>
      </div>
    </div>
  );
};
