import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  children: ReactNode;
  show: boolean;
}

export const Drawer = ({ children, show }: DrawerProps) => {
  return createPortal(
    <>
      <div
        className={`fixed bg-gray-400/40 w-full top-0 h-[100vh] backdrop-blur-sm p-3 duration-300 ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {" "}
      </div>
      <div className="p-4 fixed top-0 w-full flex justify-end">
        <div
          className={` bg-white w-[650px] rounded-md h-auto duration-300  ${show ? "translate-x-0" : "translate-x-[105%]"}`}
        >
          {children}
        </div>
      </div>
    </>,
    document.body,
  );
};
