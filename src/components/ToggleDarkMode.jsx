import { useEffect, useState } from "react";
import { SunIcon } from "../assets";
import MoonIcon from "../assets/MoonIcon";

export const ToggleDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <MoonIcon width="30px" />
      </span>
      <input
        onChange={handleChangeTheme}
        type="checkbox"
        value=""
        className="peer sr-only"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-300 dark:border-gray-600 dark:bg-white dark:after:bg-neutral-900 dark:peer-focus:ring-neutral-600 rtl:peer-checked:after:-translate-x-full"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <SunIcon width="30px" />
      </span>
    </label>
  );
};
