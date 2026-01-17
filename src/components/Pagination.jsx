import React, { useEffect } from "react";

export default function Pagination({
  countriesPerPage,
  totalCountries,
  paginate,
  currentPage,
}) {
  const [active, setActive] = React.useState(1);

  useEffect(() => {
    // Keep internal active in sync with Grid's currentPage prop
    setActive(currentPage || 1);
  }, [currentPage]);

  console.log(countriesPerPage);
  console.log(totalCountries);
  console.log(paginate);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div className="w-full flex items-center justify-center md:w-[100%] mt-10">
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
            className="px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg"
          >
            {"<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                paginate(number);
                setActive(number);
              }}
              className={`px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg ${
                active === number ? "bg-textWhite text-black" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              if (active < Math.ceil(totalCountries / countriesPerPage)) {
                paginate(active + 1);
                setActive(active + 1);
              }
            }}
            className="px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg"
          >
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
}
