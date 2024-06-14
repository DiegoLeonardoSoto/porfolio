import { useState } from "react";
import { ToggleDarkMode } from "../components/ToggleDarkMode";
import { Link, animateScroll as scroll } from "react-scroll";
import { DropdownMenu } from "./DropdownMenu";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation("global");

  const [showLinks, setShowLinks] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixed start-0 top-0 z-50 w-full bg-white shadow-lg dark:bg-neutral-900 dark:shadow-neutral-700">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* logo */}
        <Link
          onClick={handleScrollToTop}
          to=""
          href="blank"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            DS.
          </span>
        </Link>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <ToggleDarkMode />

          {/* menu button */}
          <button
            onClick={() => setShowLinks((prev) => !prev)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="items-cente inline-flex h-10 w-10 justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-neutral-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`items-center justify-between ${
            showLinks ? "" : "hidden"
          } w-full md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col gap-9 p-4 font-medium dark:bg-transparent md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                activeClass="after:w-[130%]"
                activeStyle={{ color: "black" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero"
                onClick={() => setShowLinks((prev) => !prev)}
                className="relative z-10 block cursor-pointer rounded px-3 py-2 text-gray-900 after:absolute after:-left-[15%] after:-top-[15%] after:-z-10 after:h-[130%] after:w-[0%] after:bg-primary-0 after:duration-200 after:content-[''] hover:after:w-[130%] dark:text-white dark:hover:text-black md:bg-transparent md:p-0 md:dark:text-white"
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li style={{ marginLeft: "0" }}>
              <Link
                activeClass="after:w-[130%]"
                activeStyle={{ color: "black" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                onClick={() => setShowLinks((prev) => !prev)}
                className="relative z-10 block cursor-pointer rounded px-3 py-2 text-gray-900 after:absolute after:-left-[15%] after:-top-[15%] after:-z-10 after:h-[130%] after:w-[0%] after:bg-primary-0 after:duration-200 after:content-[''] hover:after:w-[130%] dark:text-white dark:hover:text-black md:bg-transparent md:p-0 md:dark:text-white"
              >
                {t("navbar.about_me")}
              </Link>
            </li>

            <li style={{ marginLeft: "0" }}>
              <Link
                activeClass="after:w-[130%]"
                activeStyle={{ color: "black" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                onClick={() => setShowLinks((prev) => !prev)}
                className="relative z-10 block cursor-pointer rounded px-3 py-2 text-gray-900 after:absolute after:-left-[15%] after:-top-[15%] after:-z-10 after:h-[130%] after:w-[0%] after:bg-primary-0 after:duration-200 after:content-[''] hover:after:w-[130%] dark:text-white dark:hover:text-black md:bg-transparent md:p-0 md:dark:text-white"
              >
                {t("navbar.projects")}
              </Link>
            </li>

            <li style={{ marginLeft: "0" }}>
              <Link
                activeClass="after:w-[130%]"
                activeStyle={{ color: "black" }}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                onClick={() => setShowLinks((prev) => !prev)}
                className="relative z-10 block cursor-pointer rounded px-3 py-2 text-gray-900 after:absolute after:-left-[15%] after:-top-[15%] after:-z-10 after:h-[130%] after:w-[0%] after:bg-primary-0 after:duration-200 after:content-[''] hover:after:w-[130%] dark:text-white dark:hover:text-black md:bg-transparent md:p-0 md:dark:text-white"
              >
                {t("navbar.contact")}
              </Link>
            </li>
            <li style={{ marginLeft: "0" }}>
              <DropdownMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
