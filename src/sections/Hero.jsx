import {
  UnderlineName,
  Boat,
  Bulb,
  Click,
  GithubIcon,
  LinkedinIcon,
  PaperPlane,
  Send,
  SubTitleLine,
  HeroNameArrow,
  DownloadCVArrow
} from '../assets'
import { DownloadCvButton } from '../components/DownloadCvButton'

import { LayoutSection } from '../layout/LayoutSection'

export const Hero = () => {
  return (
    <LayoutSection name="hero" styles="h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 dark:bg-[radial-gradient(#393939_1px,transparent_1px)]  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="font-PermanentMarker flex flex-col items-center relative">
        <HeroNameArrow />
        <h1 className="flex flex-col items-center  relative">
          <span className="font-ShadowsIntoLightTwo text-2xl">HOLA SOY</span>
          <span className="text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 my-2">
            Diego Soto
          </span>
          <UnderlineName />
        </h1>
        <SubTitleLine>
          <h2 className="text-xl">FRONTEND DEVELOPER</h2>
        </SubTitleLine>

        <DownloadCvButton />
        <DownloadCVArrow />
      </div>

      <Bulb />
      <Click />
      <Boat />
      <PaperPlane />
    </LayoutSection>
  )
}
