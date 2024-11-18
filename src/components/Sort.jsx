import React from "react";
import { useCountries } from "../context/useContext";

export default function Sort({
  handleDropdown,
  handleOption,
  isOpen,
  selectedOption,
}) {
  const { countries, sortCountries } = useCountries();

  return (
    <div className="relative w-full h-[100px] flex flex-col items-start justify-around px-5 md:w-[70%] sm:w-[60%] max-[640px]:w-full">
      <h1 className="font-beVietnamPro font-bold text-textDark text-xs">
        Sort by
      </h1>
      <div className="relative inline-block w-64 max-[640px]:w-full">
        <button
          onClick={handleDropdown}
          className={`w-full flex items-center justify-between bg-transparent border border-textDark ${
            isOpen ? "rounded-t-lg" : "rounded-lg"
          }  px-4 py-3 text-sm shadow-sm text-left lg:w-[90%] md:w-[70%] sm:w-[50%] max-[640px]:w-full`}
          id="dropdown-button"
        >
          {selectedOption}
          <div className="cursor-pointer" onClick={handleDropdown}>
            <img src="/assets/Expand_down.svg" alt="flecha" />
          </div>
        </button>
        {isOpen && (
          <ul
            className="absolute w-full bg-gridBg border border-textDark rounded-b-md shadow-lg lg:w-[90%] md:w-[70%] sm:w-[50%]"
            id="dropdown-menu"
          >
            <li
              className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
              value={"Population"}
              onClick={(e) => {
                handleOption(e.target.innerText);
                sortCountries(e.target.innerText);
              }}
            >
              Population
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
              value={"Area"}
              onClick={(e) => {
                handleOption(e.target.innerText);
                sortCountries(e.target.innerText);
              }}
            >
              Area
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
              value={"Alphabetical"}
              onClick={(e) => {
                handleOption(e.target.innerText);
                sortCountries(e.target.innerText);
              }}
            >
              Alphabetical
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
