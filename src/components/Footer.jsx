import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-white dark:bg-neutral-900 dark:shadow-neutral-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
              DS.
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero"
                className="me-4 cursor-pointer hover:underline md:me-6"
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="me-4 cursor-pointer hover:underline md:me-6"
              >
                {t("navbar.about_me")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="me-4 cursor-pointer hover:underline md:me-6"
              >
                {t("navbar.projects")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="after:w-[130%]"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="me-4 cursor-pointer hover:underline md:me-6"
              >
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            DiegoSoto™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
