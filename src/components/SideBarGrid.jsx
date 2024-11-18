import React, { useState } from "react";
import Sort from "./Sort";
import SortButtons from "./SortButtons";
import Status from "./Status";
import { useCountries } from "../context/useContext";

export default function SideBarGrid() {
  const { sortRegions, sortMembers } = useCountries();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Population");
  const [statusNations, setStatusNations] = useState("");

  const [continents, setContinents] = useState([]);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleContinent = (continent) => {
    const arrayContinents = [];
    if (continents.includes(continent)) {
      arrayContinents.push(...continents.filter((c) => c !== continent));
    } else {
      arrayContinents.push(continent, ...continents);
    }
    setContinents(arrayContinents);
    sortRegions(arrayContinents);
  };

  const handleStatus = (status) => {
    setStatusNations(status === statusNations ? "" : status);
    sortMembers(status === statusNations ? "" : status);
  };

  return (
    <div className="lg:w-[300px] md:w-[200px] sm:w-[150px] h-full ml-4 sm:ml-0 max-[640px]:w-full">
      <Sort
        handleDropdown={handleDropdown}
        handleOption={handleOption}
        isOpen={isOpen}
        selectedOption={selectedOption}
      />
      <SortButtons handleContinent={handleContinent} continents={continents} />
      <Status status={statusNations} handleStatus={handleStatus} />
    </div>
  );
}
