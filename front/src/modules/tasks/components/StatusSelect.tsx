import { Selection } from "@/modules/core/components/Selection";
import { TypeTask } from "./ItemList";
import IconDone from "@/assets/Done_round.svg";

const StatusTask: Record<string, string> = {
  progress: "In Progress",
  completed: "Completed",
  wontdo: "Won't do",
};

export const StatusSelect = () => {
  return (
    <div>
      <label htmlFor="" className="text-[#97A3B6] text-sm ml-1">
        Status
      </label>
      <Selection
        selections={(data) => {
          console.log(data);
        }}
        render={(handleSelect, isSel) => {
          return Object.entries(StatusTask).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              type="button"
              className={`${isSel(key) ? "border-[#3662E3]" : "border-[#E3E8EF]"} duration-300 cursor-pointer border-2 not-sm:w-full w-[300px] rounded-2xl p-[2px]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`${TypeTask[key].buttonColor} rounded-xl w-[40px] h-[40px] grid place-items-center mr-3`}
                  >
                    <img
                      className="w-6"
                      src={TypeTask[key].iconButton}
                      alt="Icon svg"
                    />
                  </div>
                  <p>{value}</p>
                </div>

                <span
                  className={`p-[2px] w-5 h-5 mr-2 duration-300  rounded-full bg-[#3662E3]  ${isSel(key) ? "visible scale-100" : "invisible scale-0"}`}
                >
                  <img src={IconDone} alt="Icon Done" />
                </span>
              </div>
            </button>
          ));
        }}
      />
    </div>
  );
};
