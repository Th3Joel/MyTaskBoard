import EditButton from "@/assets/Edit_duotone.svg";
import LogoSvg from "@/assets/Logo.svg";
import ConfirmSvg from "@/assets/Done_round_duotoneV2.svg";
import { bannerInfoStore } from "../store/bannerInfoStore";
import { useEffect, useState } from "react";
import { TextField } from "@/modules/core/components/TextField";
import { TextArea } from "@/modules/core/components/TextArea";
import type { IBanner } from "@/modules/core/types/bannerType";

const responseBanner = {
  title: "My Task Board",
  description: "Task to keep organised",
};

export const Header = () => {
  const { bannerInfo, upd, isEdit, toggleMode } = bannerInfoStore();
  const [data, setData] = useState<IBanner>({
    title: "",
    description: "",
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((d) => ({
      ...d,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upd(data);
  };

  useEffect(() => {
    setData({
      title: bannerInfo.title,
      description: bannerInfo.description,
    });
  }, [bannerInfo]);

  useEffect(() => {
    upd(responseBanner);
  }, []);
  return (
    <div className="flex">
      <div className="mt-[9px] min-w-[40px]">
        <img src={LogoSvg} alt="Logo svg" />
      </div>
      <div
        className="ml-2 relative w-full mb-2"
        onMouseLeave={() => {
          isEdit && toggleMode();
        }}
      >
        <div
          className={`duration-500 top-0 cursor-default ${isEdit ? "invisible opacity-0" : "opacity-100 scale-100"}`}
        >
          <div className="flex">
            <h1 className="text-[40px] ml-2">{bannerInfo.title}</h1>

            <div className="flex justify-center items-center w-[35px] ml-2">
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
        <form
          onSubmit={submit}
          className={`absolute top-0 duration-300  ${isEdit ? "opacity-100 scale-100" : "invisible scale-75 opacity-0"}`}
        >
          <div className="flex">
            <TextField
              name="title"
              value={data.title}
              classname="text-[40px] px-1 -my-[2px]"
              change={change}
            />

            <div className="flex justify-center items-center w-[35px] ml-2">
              <button
                onClick={toggleMode}
                type="submit"
                className="hover:scale-120 duration-300 cursor-pointer hover:bg-gray-200 rounded-full"
              >
                <img
                  src={ConfirmSvg}
                  className="scale-110"
                  alt="Edit Icon sng"
                />
              </button>
            </div>
          </div>
          <TextArea
            classname="px-2 mt-1"
            name="description"
            rows={2}
            change={change}
            value={data.description}
          />
        </form>
      </div>
    </div>
  );
};
