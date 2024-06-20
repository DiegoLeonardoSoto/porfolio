import { useTranslation } from "react-i18next";
import {
  UnderlineName,
  SubTitleLine,
  SkullDraw,
  SnailDraw,
  DuckHelmetDraw,
  FlyDraw,
  OniMaskDraw,
} from "../assets";
import { DotsBackground } from "../assets/DotsBackground";
import { DownloadCvButton } from "../components/DownloadCvButton";

import { LayoutSection } from "../layout/LayoutSection";
import { DragonDraw } from "../assets/DragonDraw";

export const Hero = () => {
  const { t } = useTranslation("global");

  return (
    <LayoutSection name="hero" styles="h-screen">
      <DotsBackground />

      <div className="relative z-40 flex flex-col items-center font-PermanentMarker">
        <h1 className="relative flex flex-col items-center">
          <span className="font-ShadowsIntoLightTwo text-2xl dark:text-white">
            {t("hero.greeting")}
          </span>
          <span className="my-2 text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 dark:text-black dark:drop-shadow-[7px_5px_0px_rgba(255,255,255,1)] dark:text-stroke-2-white md:text-[6rem]">
            Diego Soto
          </span>
          <UnderlineName />
        </h1>
        <SubTitleLine>
          <h2 className="text-xl dark:text-white">{t("hero.subtitle")}</h2>
        </SubTitleLine>

        <DownloadCvButton />
      </div>

      <DragonDraw />
      <SkullDraw />
      <SnailDraw />
      <DuckHelmetDraw />
      <FlyDraw />
      <OniMaskDraw />
    </LayoutSection>
  );
};
