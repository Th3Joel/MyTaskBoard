interface ITextArea {
  label?: string;
  rows?: number;
  placeholder?: string;
  value?: string;
  name: string;
  change?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  classname?: string;
}
export const TextArea = ({
  label,
  rows,
  placeholder,
  value,
  name,
  change,
  classname,
}: ITextArea) => {
  return (
    <span>
      {label && (
        <label htmlFor={name} className="text-[#97A3B6] text-sm ml-1">
          {label}
        </label>
      )}
      <textarea
        id={name}
        onChange={change}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        className={`border-2  resize-none border-[#E3E8EF] placeholder:text-[#97A3B6] rounded-lg w-full  focus:border-[#3662E3] focus:outline-none duration-300 ${classname ? classname : "mt-1 py-2 px-4"}`}
      />
    </span>
  );
};
