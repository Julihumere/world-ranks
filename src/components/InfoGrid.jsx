import React, { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "./Pagination";

export default function InfoGrid({
  currentCountries,
  handleSelectCountry,
  filterByWords,
}) {
  const [skeleton, setSkeleton] = useState(true);
  const skeletonCount = 12;

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 3000);
  }, []);

  return (
    <>
      {skeleton === false ? (
        <table className="w-full h-20 sm:ml-4 sm:w-[90%] md:w-[90%] max-[640px]:w-[90%]">
          <thead className="w-full">
            <tr className="border-b-2 border-[#282b30] font-beVietnamPro font-bold">
              <th className="text-textDark text-xs text-left w-20 pb-4 px-2 sm:px-4 sm:text-[10px] ">
                Flag
              </th>
              <th className="text-textDark text-xs text-left w-[450px] pb-4 px-2 sm:px-4 sm:text-[10px]">
                Name
              </th>
              <th className="text-textDark text-xs text-left pb-4 px-2 sm:px-4 sm:text-[10px]">
                Population
              </th>
              <th className="text-textDark text-xs text-left pb-4 px-2 sm:px-4 sm:text-[10px]">
                Area (km²)
              </th>
              <th className="text-textDark text-xs text-left pb-4 px-2 sm:px-4 sm:text-[10px] max-[640px]:hidden">
                Region
              </th>
            </tr>
          </thead>

          <tbody className="h-20">
            {currentCountries.map((country) => (
              <tr
                key={country.id}
                className="hover:bg-[#1e2124] cursor-pointer"
                onClick={() => {
                  filterByWords("");
                  handleSelectCountry(country);
                }}
              >
                <td className="w-16 px-2 sm:px-4 py-2">
                  <img
                    src={country.flags?.svg}
                    alt={country.name}
                    className="rounded-md w-[32px] h-[32px] object-cover md:w-12 md:h-10 sm:w-10 sm:h-8 max-[640px]:w-12 max-[640px]:h-10"
                  />
                </td>
                <td className="text-textWhite text-sm lg:text-lg font-semibold px-2 md:text-xs sm:px-4 py-2 sm:text-xs">
                  {country.name}
                </td>
                <td className="text-textWhite text-sm lg:text-lg font-semibold px-2 md:text-xs sm:px-4 py-2 sm:text-xs">
                  {Number(country.population).toLocaleString("en-US")}
                </td>
                <td className="text-textWhite text-sm lg:text-lg font-semibold px-2 md:text-xs sm:px-4 py-2 sm:text-xs">
                  {country.area
                    ? Number(country.area).toLocaleString("en-US")
                    : "N/A"}
                </td>
                <td className="text-textWhite text-sm lg:text-lg font-semibold px-2 md:text-xs sm:px-4 py-2 sm:text-xs max-[640px]:hidden">
                  {country.region}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-full flex flex-col items-center animate-pulse">
          {Array.from({ length: skeletonCount }, (_, index) => (
            <div
              key={index}
              className="w-full h-16 flex items-center justify-between px-3"
            >
              <div className="w-14 h-14 bg-[#282b30] rounded-md"></div>
              <div className="w-32 h-5 bg-[#282b30] rounded-md"></div>
              <div className="w-32 h-5 bg-[#282b30] rounded-md"></div>
              <div className="w-32 h-5 bg-[#282b30] rounded-md"></div>
              <div className="w-32 h-5 bg-[#282b30] rounded-md"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
