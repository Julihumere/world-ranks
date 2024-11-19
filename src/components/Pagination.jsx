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
            className="px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg"
          >
            Prev
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              paginate(active);
            }}
            className="px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg"
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
            className="px-3 py-1 bg-transparent border-2 text-textWhite font-beVietnamPro font-bold border-textWhite rounded-lg"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
