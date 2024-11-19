import React, { useEffect, useState } from "react";
import { useCountries } from "../context/useContext";

export default function ViewCountry({ country, setViewCountry }) {
  const { countries } = useCountries();
  const [closestCountries, setClosestCountries] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  // Calcular distancia usando la fórmula de Haversine
  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
  }

  // Obtener los 5 países más cercanos
  async function getClosestCountries() {
    const targetCountry = {
      name: country.name,
      lat: country.lat, // Latitud del país seleccionado
      lon: country.lon, // Longitud del país seleccionado
    };

    const distances = countries
      .filter((c) => c.name !== targetCountry.name)
      .map((country) => {
        const lat = country.lat;
        const lon = country.lon;
        const distance = haversine(
          targetCountry.lat,
          targetCountry.lon,
          lat,
          lon
        );
        return {
          name: country.name,
          flag: country.flags.svg,
          distance,
          country,
        };
      });

    distances.sort((a, b) => a.distance - b.distance);
    const closestCountries = distances.slice(0, 5);

    console.log(closestCountries);

    setClosestCountries(closestCountries); // Actualizar el estado
  }

  useEffect(() => {
    getClosestCountries();
    setTimeout(() => {
      console.log("Skeleton removed");
      setSkeleton(false);
    }, 3000);
  }, [country]);

  let languajes = Object.values(country.languajes).join(", ");

  let currencies = Object.values(country.currencies).map((currency) => {
    return currency.name;
  });

  return (
    <div className="w-full flex flex-col items-center">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name}`}
        className="absolute -top-16 w-[300px] h-[200px] object-cover rounded-2xl"
      />
      <section className="w-full h-16 flex flex-col items-center justify-evenly mt-40">
        <h1 className="font-beVietnamPro font-medium text-textWhite text-4xl">
          {country.name}
        </h1>
        <h2 className="font-beVietnamPro font-medium text-textWhite text-lg">
          {country.nameOfficial}
        </h2>
      </section>

      <section className="w-full h-48 flex items-center justify-evenly">
        <div className="w-80 h-14 bg-[#282b30] rounded-2xl flex items-center justify-around">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            Population
          </h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            {Number(country.population).toLocaleString("en-US")}
          </h1>
        </div>
        <div className="w-80 h-14 bg-[#282b30] rounded-2xl flex items-center justify-around">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            Area (km²)
          </h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            {Number(country.area).toLocaleString("en-US")}
          </h1>
        </div>
      </section>

      <section className="w-full">
        <div className="w-full h-14 flex items-center justify-between px-3 text-textDark border-t-[0.2px] border-b-[0.2px] border-[#282B30]">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">Capital</h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium py-1 px-3">
            {country.capital}
          </h1>
        </div>
        <div className="w-full h-14 flex items-center justify-between px-3 text-textDark border-t-[0.2px] border-b-[0.2px] border-[#282B30]">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            Subregion
          </h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium py-1 px-3">
            {country.subregion}
          </h1>
        </div>
        <div className="w-full h-14 flex items-center justify-between px-3 text-textDark border-t-[0.2px] border-b-[0.2px] border-[#282B30]">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">Languaje</h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium py-1 px-3">
            {languajes}
          </h1>
        </div>
        <div className="w-full h-14 flex items-center justify-between px-3 text-textDark border-t-[0.2px] border-b-[0.2px] border-[#282B30]">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            Currencies
          </h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium py-1 px-3">
            {currencies}
          </h1>
        </div>
        <div className="w-full h-14 flex items-center justify-between px-3 text-textDark border-t-[0.2px] border-b-[0.2px] border-[#282B30]">
          <h1 className="font-beVietnamPro font-medium  py-1 px-3">
            Continents
          </h1>
          <span className="w-[1px] h-3/4 bg-gray-900"></span>
          <h1 className="font-beVietnamPro font-medium py-1 px-3">
            {country.continents}
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-start w-full px-6 mt-5">
        <h1 className="font-beVietnamPro font-medium text-xs text-textDark mb-5  py-1">
          Neighbouring Countries
        </h1>
        <div className="w-full h-32 flex items-center justify-start">
          {skeleton === false ? (
            closestCountries.length > 0 &&
            closestCountries.map((country, index) => (
              <div
                className="h-40 flex flex-col items-center mr-5 mt-10 cursor-pointer"
                key={index}
                onClick={() => {
                  setViewCountry(country.country);
                }}
              >
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className="w-24 h-16 rounded-lg"
                />
                <span
                  className="font-beVietnamPro font-medium text-xs text-textDark mt-2  py-1"
                  key={index}
                >
                  {country.name}
                </span>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center animate-pulse">
              <div className="h-full w-24 mr-5">
                <div className="h-20 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full mt-3 bg-gray-300 rounded"></div>
              </div>
              <div className="h-full w-24 mr-5">
                <div className="h-20 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full mt-3 bg-gray-300 rounded"></div>
              </div>
              <div className="h-full w-24 mr-5">
                <div className="h-20 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full mt-3 bg-gray-300 rounded"></div>
              </div>
              <div className="h-full w-24 mr-5">
                <div className="h-20 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full mt-3 bg-gray-300 rounded"></div>
              </div>
              <div className="h-full w-24 mr-5">
                <div className="h-20 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-full mt-3 bg-gray-300 rounded"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      <button
        onClick={() => setViewCountry(null)}
        className="px-5 py-2 bg-transparent rounded-lg border-[0.5px] border-[#282b30] transition-all ease-out duration-200 hover:bg-textDark "
      >
        Go back
      </button>
    </div>
  );
}
