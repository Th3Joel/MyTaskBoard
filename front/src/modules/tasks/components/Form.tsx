import IconDone from "@/assets/Done_round.svg";
import IconTrash from "@/assets/Trash.svg";
import closeSvg from "@/assets/close_ring_duotone-1.svg";
import { Button } from "@/modules/core/components/Button";
import { Drawer } from "@/modules/core/components/Drawer";
import { TextArea } from "@/modules/core/components/TextArea";
import { TextField } from "@/modules/core/components/TextField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IconSelect } from "./IconSelect";
import { StatusSelect } from "./StatusSelect";

export const Form = () => {
  const useNav = useNavigate();
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => {
      useNav("/");
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 50);
  }, []);
  return (
    <Drawer show={open}>
      <div className="p-4">
        <header className="flex justify-between items-center">
          <p className="text-[20px] font-semibold">Task details</p>
          <button
            type="button"
            onClick={closeModal}
            className="p-1 border rounded-lg border-[#F7D4D3] group cursor-pointer"
          >
            <img
              alt="Close icon svg"
              src={closeSvg}
              className="group-hover:scale-130 group-hover:rotate-90 duration-300"
            />
          </button>
        </header>
        <div className="mt-5">
          <form className="flex flex-col gap-5">
            <TextField label="Task name" placeholder="Write de name" />
            <TextArea
              label="Description"
              rows={7}
              placeholder="Write a short description"
            />
            <IconSelect />
            <StatusSelect />
            <div className="flex gap-4 ml-auto">
              <Button
                text="Delete"
                type="secondary"
                classname="w-[120px]"
                icon={<img src={IconTrash} alt="Icon trash svg" />}
              />

              <Button
                text="Save"
                type="primary"
                classname="w-[120px]"
                icon={<img src={IconDone} alt="Icon Done svg" />}
              />
            </div>
          </form>
        </div>
      </div>
    </Drawer>
  );
};
