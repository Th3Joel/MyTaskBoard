interface ITextArea {
  label?: string;
  rows?: number;
  placeholder?: string;
  value?: string;
  name: string;
}
export const TextArea = ({
  label,
  rows,
  placeholder,
  value,
  name,
}: ITextArea) => {
  return (
    <span>
      {label && (
        <label htmlFor="" className="text-[#97A3B6] text-sm ml-1">
          {label}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        className="border-2 mt-1 resize-none border-[#E3E8EF] placeholder:text-[#97A3B6] rounded-lg w-full py-2 px-4 focus:border-[#3662E3] focus:outline-none duration-300"
      />
    </span>
  );
};
