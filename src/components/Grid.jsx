import React, { useEffect, useState } from "react";
import HeaderGrid from "./HeaderGrid";
import SideBarGrid from "./SideBarGrid";
import InfoGrid from "./InfoGrid";
import countries from "../../countries.json";
import Pagination from "./Pagination";
import { useCountries } from "../context/useContext";

export default function Grid() {
  const { countries } = useCountries();

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-background rounded-3xl border-[0.5px] border-[#282b30] mb-10 lg:h-[1000px] md:h-[1000px] sm:h-[1000px] max-[640px]:h-[1200px]">
      <HeaderGrid totalCountries={countries.length} />
      <div className="flex flex-row justify-start w-full h-[800px] max-[640px]:flex max-[640px]:flex-col max-[640px]:h-[1000px] max-[640px]:items-center">
        <SideBarGrid />
        <InfoGrid currentCountries={currentCountries} />
      </div>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
    </div>
  );
}
