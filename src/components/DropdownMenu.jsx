import { useState } from "react";
import { useTranslation } from "react-i18next";

export const DropdownMenu = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [t, i18n] = useTranslation("global");

  const [languages, setLanguages] = useState(
    i18n.getDataByLanguage(i18n.language).global.navbar.language[i18n.language],
  );

  const handleSetLanguages = (lang) => {
    i18n.changeLanguage(lang);
    setLanguages(i18n.getDataByLanguage(lang).global.navbar.language[lang]);
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
        className="relative flex w-full items-center justify-between px-3 py-2 text-gray-900 dark:border-gray-700 dark:text-white dark:focus:text-white md:w-auto md:border-0 md:p-0"
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
        className={`absolute z-10 ${showDropDownMenu ? "block" : "hidden"} w-auto divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-neutral-600 dark:bg-neutral-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <button
              onClick={() => handleSetLanguages("es")}
              className="block w-full px-4 py-4 hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white"
            >
              {t("navbar.language.es")}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSetLanguages("en")}
              className="block w-full px-4 py-4 hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white"
            >
              {t("navbar.language.en")}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
