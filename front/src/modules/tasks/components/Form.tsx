import { Drawer } from "@/modules/core/components/Drawer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Form = () => {
  const useNav = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, []);
  return (
    <Drawer show={open}>
      <header className="flex justify-between">
        <p>Task Detail</p>
        <p>
          <button onClick={() => useNav("/")}>X</button>
        </p>
      </header>
    </Drawer>
  );
};
