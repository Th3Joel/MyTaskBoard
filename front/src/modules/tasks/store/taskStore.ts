import { create } from "zustand";
import type { ITask } from "../types/taskType";

type TaskState = {
  tasks: ITask[];
};

type TaskAction = {
  setTasks: (tasks: ITask[]) => void;
  add: (task: ITask) => void;
  del: (id: string) => void;
  upd: (id: string, task: ITask) => void;
  find: (id: string) => ITask | undefined;
};

export const taskStore = create<TaskState & TaskAction>((set, get) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  add: (task) =>
    set((prev) => ({
      tasks: [...prev.tasks, task],
    })),
  del: (id) =>
    set((prev) => ({ tasks: prev.tasks.filter((f) => f.id !== id) })),
  upd: (id, task) =>
    set((prev) => {
      const index = prev.tasks.findIndex((f) => f.id === id);
      if (index !== -1) {
        const updatedTasks = [
          ...prev.tasks.slice(0, index), // Elementos antes del índice
          { ...prev.tasks[index], ...task }, // Actualización del elemento
          ...prev.tasks.slice(index + 1), // Elementos después del índice
        ];

        return {
          tasks: updatedTasks,
        };
      }
      return {
        tasks: prev.tasks,
      };
    }),
  find: (id) => {
    return get().tasks.find((f) => f.id === id);
  },
}));
