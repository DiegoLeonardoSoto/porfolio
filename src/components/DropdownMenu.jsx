import { useState } from "react";

export const DropdownMenu = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [languages, setLanguages] = useState("Español");

  const handleSetLannguages = (languages) => {
    setLanguages(languages);
    setShowDropDownMenu(false);
  };

  return (
    <>
      <button
        onClick={() => {
          setShowDropDownMenu((prev) => !prev);
        }}
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="relative flex w-full items-center justify-between px-3 py-2 text-gray-900 after:absolute after:-left-[15%] after:-top-[15%] after:z-10 after:h-[130%] after:w-[0%] after:bg-primary-0 after:duration-200 after:content-[''] hover:after:w-[130%] dark:border-gray-700 dark:text-white dark:focus:text-white md:w-auto md:border-0 md:p-0"
      >
        <span className="z-20 flex items-center">
          {languages}
          <svg
            className="ms-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </span>
      </button>
      <div
        id="dropdownNavbar"
        className={`absolute z-10 ${showDropDownMenu ? "block" : "hidden"} w-auto divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <button
              onClick={() => handleSetLannguages("Español")}
              className="block w-full px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Español
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSetLannguages("Ingles")}
              className="block w-full px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Ingles
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
