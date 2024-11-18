import React from "react";
import { useCountries } from "../context/useContext";

export default function SortButtons({ handleContinent, continents }) {
  const { sortRegions } = useCountries();
  return (
    <div className="w-full flex flex-col items-start justify-around px-5 mt-5">
      <h1 className="font-beVietnamPro font-bold text-textDark text-xs mb-3">
        Region
      </h1>
      <div className="flex flex-wrap h-48 max-[640px]:h-14">
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Americas"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Americas") ? "bg-[#6b737e] text-textWhite" : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Americas
        </button>
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Antarctic"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Antarctic")
              ? "bg-[#6b737e] text-textWhite"
              : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Antarctic
        </button>
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Africa"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Africa") ? "bg-[#6b737e] text-textWhite" : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Africa
        </button>
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Asia"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Asia") ? "bg-[#6b737e] text-textWhite" : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Asia
        </button>
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Europe"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Europe") ? "bg-[#6b737e] text-textWhite" : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Europe
        </button>
        <button
          onClick={(e) => {
            handleContinent(e.target.value);
          }}
          value={"Oceania"}
          className={`px-3 h-10 mr-4 rounded-2xl bg-transparent text-textDark font-bold ${
            continents.includes("Oceania") ? "bg-[#6b737e] text-textWhite" : ""
          } max-[640px]: text-sm max-[640px]: mr-2`}
        >
          Oceania
        </button>
      </div>
    </div>
  );
}
