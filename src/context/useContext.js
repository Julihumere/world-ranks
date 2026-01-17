import React, { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
const CountriesContext = createContext();

// Proveedor del contexto
export const CountriesProvider = ({ children }) => {
  const [originalCountries, setOriginalCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [order, setOrder] = useState("population");
  const [selectedContinents, setSelectedContinents] = useState([]);

  const getCountries = async () => {
    const result = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies,independent,unMember,region,area,population,continents",
    );
    const data = await result.json();

    const countries = data.map((country) => ({
      id: country.cca3,
      name: country.name?.common,
      nameOfficial: country.name?.official,
      capital: country.capital?.[0] ?? "No capital",
      subregion: country.subregion ?? "No subregion",
      languajes: country.languages,
      currencies: country.currencies ?? "No currency",
      lat: country.latlng?.[0] ?? 0,
      lon: country.latlng?.[1] ?? 0,
      independent: country.independent ?? false,
      unMember: country.unMember ?? false,
      region: country.region,
      area: country.area,
      population: country.population,
      continents: country.continents ?? [],
      flags: {
        svg: country.flags?.svg,
      },
    }));

    countries.sort((a, b) => b.population - a.population);
    setCountries(countries);
    setOriginalCountries(countries);
    return;
  };

  const applySort = (countriesList, order) => {
    if (order === "Population") {
      return [...countriesList].sort((a, b) => b.population - a.population);
    } else if (order === "Area") {
      return [...countriesList].sort((a, b) => b.area - a.area);
    } else if (order === "Alphabetical") {
      return [...countriesList].sort((a, b) => a.name.localeCompare(b.name));
    }
    return countriesList;
  };

  const sortRegions = (continents) => {
    let filteredCountries;
    if (continents.length === 0) {
      filteredCountries = originalCountries;
    } else {
      filteredCountries = originalCountries.filter((country) =>
        continents.includes(country.region),
      );
    }
    const sortedCountries = applySort(filteredCountries, order);
    setCountries(sortedCountries);
  };

  const sortCountries = (option) => {
    const sortedCountries = applySort(countries, option);
    setCountries(sortedCountries);
    setOrder(option);
  };

  const sortMembers = (member) => {
    console.log(member);
    if (member === "") {
      // No member filter selected -> restore full original list (respect current order)
      const sortedCountries = applySort(originalCountries, order);
      setCountries(sortedCountries);
    } else if (member === "independent") {
      const filteredCountries = originalCountries.filter(
        (country) => country.independent == true,
      );
      const sortedCountries = applySort(filteredCountries, order);
      setCountries(sortedCountries);
    } else if (member === "memberNations") {
      const filteredCountries = originalCountries.filter(
        (country) => country.unMember == true,
      );
      const sortedCountries = applySort(filteredCountries, order);
      setCountries(sortedCountries);
    }
  };

  const filterByWords = (word) => {
    if (word === "") {
      // Restore full list, preserving current order
      const sortedCountries = applySort(originalCountries, order);
      setCountries(sortedCountries);
      return;
    }
    // Search only by country name and preserve current ordering
    const filteredCountries = originalCountries
      .filter((country) =>
        country.name?.toLowerCase().startsWith(word.toLowerCase()),
      )
      .sort((a, b) => {
        if (order === "Population") return b.population - a.population;
        if (order === "Area") return b.area - a.area;
        if (order === "Alphabetical") return a.name.localeCompare(b.name);
        return 0;
      });
    setCountries(filteredCountries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        sortCountries,
        sortRegions,
        sortMembers,
        filterByWords,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
};
