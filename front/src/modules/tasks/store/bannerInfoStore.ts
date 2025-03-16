import type { IBanner } from "@/modules/core/types/bannerType";
import { create } from "zustand";

interface States {
  bannerInfo: IBanner;
  isEdit: boolean;
}

interface Actions {
  upd: (banner: IBanner) => void;
  toggleMode: () => void;
}

export const bannerInfoStore = create<States & Actions>((set) => ({
  bannerInfo: {
    title: "",
    description: "",
  },
  isEdit: false,
  upd: (bannerInfo) => set({ bannerInfo }),
  toggleMode: () => set((prev) => ({ isEdit: !prev.isEdit })),
}));
