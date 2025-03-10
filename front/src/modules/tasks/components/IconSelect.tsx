import { Selection } from "@/modules/core/components/Selection";

const IconsTaks: Record<string, string> = {
  computer: "👨🏻‍💻",
  message: "💬",
  coffe: "☕",
  train: "🏋🏻",
  books: "📚",
  clock: "⏰",
};

export const IconSelect = ({ value }: { value?: string }) => {
  return (
    <div>
      <label htmlFor="" className="text-[#97A3B6] text-sm ml-1">
        Icon
      </label>
      <Selection
        initializeData={value ? [value] : []}
        selections={(data) => {
          console.log(data);
        }}
        render={(handleSelect, isSel) => {
          return Object.entries(IconsTaks).map(([key, value]) => (
            <div key={key}>
              <button
                type="button"
                className={`${isSel(key) ? "bg-[#F5D565]" : "bg-[#E3E8EF]"} duration-300 grid place-items-center rounded-xl w-[45px] h-[45px] text-center text-[18px] cursor-pointer`}
                onClick={() => handleSelect(key)}
              >
                {value}
              </button>
            </div>
          ));
        }}
      />
    </div>
  );
};
