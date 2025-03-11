import EditButton from "@/assets/Edit_duotone.svg";
import LogoSvg from "@/assets/Logo.svg";
import { bannerInfoStore } from "../store/bannerInfoStore";
import { useEffect } from "react";

const responseBanner = {
  title: "My Task Board",
  description: "Task to keep organised",
};

export const Header = () => {
  const { bannerInfo, upd, isEdit, toggleMode } = bannerInfoStore();

  useEffect(() => {
    upd(responseBanner);
  }, []);
  return (
    <div className="flex">
      <div className="mt-[9px]">
        <img src={LogoSvg} alt="Logo svg" />
      </div>
      <div>
        <div className="flex">
          <h1 className="text-[40px] mx-2">{bannerInfo.title}</h1>
          {isEdit ? "Editar" : "View"}
          <div className="flex items-center">
            <button
              onClick={toggleMode}
              type="button"
              className="hover:scale-120 duration-300 cursor-pointer hover:bg-gray-200 rounded-full"
            >
              <img src={EditButton} alt="Edit Icon sng" />
            </button>
          </div>
        </div>
        <h6 className="ml-2">{bannerInfo.description}</h6>
      </div>
    </div>
  );
};
