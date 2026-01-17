import React from "react";
import { useCountries } from "../context/useContext";

export default function HeaderGrid({ totalCountries, onSearch }) {
  const { filterByWords } = useCountries();

  return (
    <header className="w-[95%] flex items-center justify-between mt-5 mb-5">
      <h1 className="text-textDark font-beVietnamPro font-bold">
        Found {totalCountries} countries
      </h1>
      <div className="relative">
        <input
          type="text"
          className="w-96 bg-[#282b30] px-12 py-3.5 text-textDark rounded-2xl relative font-bold placeholder:text-textDark placeholder:font-bold md:w-80 md:py-2.5 sm:w-80 sm:py-2 max-[640px]:w-[300px] max-[640px]:py-2"
          placeholder="Search by Name"
          onChange={(e) =>
            onSearch ? onSearch(e.target.value) : filterByWords(e.target.value)
          }
        />
        <img
          src="/assets/Search.svg"
          alt="Buscar"
          className="w-5 h-5 absolute left-4 top-4 md:w-4 md:h-4 md:top-3.5 sm:w-4 sm:h-4 sm:top-3 max-[640px]:top-2.5"
        />
      </div>
    </header>
  );
}
