import { useTranslation } from "react-i18next";
import { DownloadIcon } from "../assets";

export const DownloadCvButton = () => {
  const { t, i18n } = useTranslation("global");

  const cvLink = {
    es: "../files/DiegoSoto-CV-es.pdf",
    en: "../files/DiegoSoto-CV-en.pdf",
  };

  return (
    <div className="mt-10 w-3/4 font-Roboto">
      <div
        style={{
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
        }}
      >
        <a
          target="_blank"
          href={cvLink[i18n.language]}
          className="block w-full rounded-full bg-black duration-200 dark:border-2 dark:border-black dark:bg-neutral-500"
          download
        >
          <div className="clip relative flex w-full -translate-x-1 -translate-y-1 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-white px-4 py-2 duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:bg-[#fddf28] after:content-[''] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:bg-[#fddf28] active:translate-x-0 active:translate-y-0">
            <h4 className="z-10 flex w-full items-center justify-center gap-3 duration-200">
              {t("hero.cv_button")}
              <DownloadIcon width={25} />
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};
