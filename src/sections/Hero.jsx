import {
  UnderlineName,
  Boat,
  Bulb,
  Click,
  PaperPlane,
  SubTitleLine,
  HeroNameArrow,
  DownloadCVArrow,
} from "../assets";
import { DotsBackground } from "../assets/DotsBackground";
import { DownloadCvButton } from "../components/DownloadCvButton";

import { LayoutSection } from "../layout/LayoutSection";

export const Hero = () => {
  return (
    <LayoutSection name="hero" styles="h-screen">
      <DotsBackground />

      <div className="relative flex flex-col items-center font-PermanentMarker">
        <HeroNameArrow />
        <h1 className="relative flex flex-col items-center">
          <span className="font-ShadowsIntoLightTwo text-2xl dark:text-white">
            HOLA SOY
          </span>
          <span className="dark:text-stroke-2-white my-2 text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 dark:text-black dark:drop-shadow-[7px_5px_0px_rgba(255,255,255,1)]">
            Diego Soto
          </span>
          <UnderlineName />
        </h1>
        <SubTitleLine>
          <h2 className="text-xl dark:text-white">DESARROLLADOR FRONTEND</h2>
        </SubTitleLine>

        <DownloadCvButton />
        <DownloadCVArrow />
      </div>

      <Bulb />
      <Click />
      <Boat />
      <PaperPlane />
    </LayoutSection>
  );
};
