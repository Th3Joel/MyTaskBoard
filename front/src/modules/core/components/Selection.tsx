import { useEffect, useState } from "react";

type THandleSelect = (key: string) => void;
type TIsSel = (key: string) => boolean;

interface ISelection {
  selections: (data: string[]) => void;
  multiselect?: boolean;
  render: (handleSelect: THandleSelect, isSel: TIsSel) => React.ReactNode;
}

export const Selection = ({ multiselect, selections, render }: ISelection) => {
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

  useEffect(() => {
    selections(selected);
  }, [selected, selections]);

  return (
    <div className="flex gap-3 mt-1 flex-wrap">
      {render(handleSelect, isSel)}
    </div>
  );
};
