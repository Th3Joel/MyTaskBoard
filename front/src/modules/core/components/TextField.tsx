interface ITextField {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextField = ({
  label,
  placeholder,
  value,
  name,
  change,
}: ITextField) => {
  return (
    <span>
      {label && (
        <label htmlFor={name} className="text-[#97A3B6] text-sm ml-1">
          {label}
        </label>
      )}
      <input
        id={name}
        onChange={change}
        name={name}
        value={value ? value : ""}
        type="text"
        placeholder={placeholder}
        className="border-2 mt-1 border-[#E3E8EF] rounded-lg w-full py-2 px-4 focus:border-[#3662E3] focus:outline-none duration-300 placeholder:text-[#97A3B6]"
      />
    </span>
  );
};
