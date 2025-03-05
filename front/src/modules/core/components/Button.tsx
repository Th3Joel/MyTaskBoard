type TypeButton = "primary" | "secondary";

interface IButton {
  icon?: React.ReactNode;
  text: string;
  type: TypeButton;
  classname?: string;
  submit?: boolean;
}

const TypeButtonColors: Record<
  string,
  { color: string; shadow: string; shadowHover: string }
> = {
  primary: {
    color: "bg-[#3662E3]",
    shadow: "drop-shadow-[0px_0px_15px_rgba(54,98,227,1)]",
    shadowHover: "hover:shadow-[0px_0px_10px_rgba(54,98,227,1)]",
  },
  secondary: {
    color: "bg-[#97A3B6]",
    shadow: "drop-shadow-[0px_0px_10px_rgba(151,163,182,1)]",
    shadowHover: "hover:shadow-[0px_0px_10px_rgba(151,163,182,1)]",
  },
};

export const Button = ({ text, type, icon, classname, submit }: IButton) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`duration-300 hover:scale-105 ${TypeButtonColors[type].shadow} ${TypeButtonColors[type].shadowHover} cursor-pointer flex justify-center rounded-full py-[6px] px-2 text-white ${TypeButtonColors[type].color} ${classname ? classname : ""}`}
    >
      <div className="flex gap-2">
        <p>{text}</p>
        {icon && icon}
      </div>
    </button>
  );
};
