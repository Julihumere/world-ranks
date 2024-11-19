import React from "react";

export default function Status({ status, handleStatus }) {
  return (
    <div className="w-full flex flex-col items-start justify-around px-5 sm:mt-20 md:mt-0">
      <h1 className="font-beVietnamPro font-bold text-textDark text-xs mb-3">
        Status
      </h1>

      <section className="flex flex-col items-start justify-evenly">
        <label className="inline-block relative pl-9 mb-3 cursor-pointer text-base select-none">
          <input
            className="input-check absolute opacity-0  cursor-pointer h-0 w-0"
            type="checkbox"
            onChange={() => {
              handleStatus("independent");
            }}
            checked={status === "independent"}
          />
          <span className="absolute top-0 left-0 h-6 w-6  bg-transparent rounded-sm transition-colors duration-300 border-[1px] border-textWhite"></span>
          <h1 className="text-textWhite font-beVietnamPro">Independent</h1>
        </label>

        <label className="inline-block relative pl-9 mb-3 cursor-pointer text-base select-none">
          <input
            className="input-check absolute opacity-0  cursor-pointer h-0 w-0"
            type="checkbox"
            onChange={() => {
              handleStatus("memberNations");
            }}
            checked={status === "memberNations"}
          />
          <span className="absolute top-0 left-0 h-6 w-6  bg-transparent rounded-sm transition-colors duration-300 border-[1px] border-textWhite"></span>
          <h1 className="text-textWhite font-beVietnamPro">
            Member of the United Nations
          </h1>
        </label>
      </section>
    </div>
  );
}
