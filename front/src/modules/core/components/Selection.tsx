import { useEffect, useRef, useState } from "react";

type THandleSelect = (key: string) => void;
type TIsSel = (key: string) => boolean;

interface ISelection {
  initializeData?: string[];
  selections: (data: string[]) => void;
  multiselect?: boolean;
  render: (handleSelect: THandleSelect, isSel: TIsSel) => React.ReactNode;
}
export const Selection = ({
  multiselect,
  selections,
  render,
  initializeData,
}: ISelection) => {
  const [selected, setSelected] = useState<string[]>([]);
  const isSel = (key: string): boolean => {
    return selected.some((d) => d === key);
  };

  const handleSelect = (key: string) => {
    if (multiselect) {
      setSelected((prev) =>
        isSel(key) ? prev.filter((d) => d !== key) : [...prev, key],
      );
      return;
    }

    setSelected(isSel(key) ? [] : [key]);
  };

  //Prevent an ininite loop from ocurring
  if (initializeData) {
    useEffect(() => {
      if (JSON.stringify(selected) !== JSON.stringify(initializeData)) {
        setSelected(initializeData);
      }
    }, [initializeData]);
  }

  useEffect(() => {
    if (JSON.stringify(selected) !== JSON.stringify(initializeData)) {
      selections(selected);
    }
  }, [selected]);
  return (
    <div className="flex gap-3 mt-1 flex-wrap not-sm:justify-evenly">
      {render(handleSelect, isSel)}
    </div>
  );
};
