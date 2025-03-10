import IconDone from "@/assets/Done_round.svg";
import IconTrash from "@/assets/Trash.svg";
import closeSvg from "@/assets/close_ring_duotone-1.svg";
import { Button } from "@/modules/core/components/Button";
import { Drawer } from "@/modules/core/components/Drawer";
import { TextArea } from "@/modules/core/components/TextArea";
import { TextField } from "@/modules/core/components/TextField";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IconSelect } from "./IconSelect";
import { StatusSelect } from "./StatusSelect";
import { taskStore } from "../store/taskStore";
import type { ITask } from "../types/taskType";

export const Form = ({ id }: { id: string }) => {
  const [task, setTask] = useState<ITask | undefined>();
  const useNav = useNavigate();
  const { find, del, upd, tasks } = taskStore();
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => {
      useNav("/");
    }, 300);
  };

  const delTask = (id: string) => {
    del(id);
    closeModal();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upd(id, task as ITask);
    closeModal();
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 50);
  }, []);

  useEffect(() => {
    const tk = find(id);
    setTask(tk);
  }, [tasks]);

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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <TextField
              name="title"
              value={task?.title}
              label="Task name"
              placeholder="Write de name"
              change={(e) => {
                if (task !== undefined) {
                  setTask((prev) => {
                    const d = {
                      ...prev,
                      [e.target.name]: e.target.value,
                    } as ITask | undefined;
                    return d;
                  });
                }
              }}
            />
            <TextArea
              name="description"
              value={task?.description}
              label="Description"
              rows={7}
              placeholder="Write a short description"
              change={(e) => {
                if (task !== undefined) {
                  setTask((prev) => {
                    const d = {
                      ...prev,
                      [e.target.name]: e.target.value,
                    } as ITask | undefined;
                    return d;
                  });
                }
              }}
            />
            <IconSelect
              value={task?.icon}
              change={(data) => {
                if (task !== undefined) {
                  setTask((prev) => {
                    const d = {
                      ...prev,
                      icon: data[0],
                    } as ITask | undefined;
                    return d;
                  });
                }
              }}
            />
            <StatusSelect
              value={task?.status}
              change={(data) => {
                if (task !== undefined) {
                  setTask((prev) => {
                    const d = {
                      ...prev,
                      status: data[0],
                    } as ITask | undefined;
                    return d;
                  });
                }
              }}
            />
            <div className="flex gap-4 ml-auto">
              <Button
                click={() => {
                  delTask(task?.id ?? "");
                }}
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
                submit
              />
            </div>
          </form>
        </div>
      </div>
    </Drawer>
  );
};
