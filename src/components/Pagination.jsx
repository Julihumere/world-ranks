import React from "react";

export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
}) {
  const [active, setActive] = React.useState(1);

  return (
    <div className="w-full flex items-center justify-center md:w-[80%] mt-10">
      <ul className="flex flex-wrap justify-center items-center gap-2">
        {/* Solamente 3 botones, anterios, actual y siguiente */}
        <li>
          <button
            onClick={() => {
              if (active > 1) {
                paginate(active - 1);
                setActive(active - 1);
              }
            }}
            className="px-3 py-1 bg-transparent border-2 border-textWhite rounded-lg"
          >
            Anterior
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              paginate(active);
            }}
            className="px-3 py-1 bg-transparent border-2 border-textWhite rounded-lg"
          >
            {active}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              if (active < Math.ceil(totalCountries / countriesPerPage)) {
                paginate(active + 1);
                setActive(active + 1);
              }
            }}
            className="px-3 py-1 bg-transparent border-2 border-textWhite rounded-lg"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
}
