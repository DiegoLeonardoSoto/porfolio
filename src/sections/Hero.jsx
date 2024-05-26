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
    <LayoutSection>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
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

        <div className="flex gap-7 mt-7">
          <button className="bg-black w-11 rounded-full p-2">
            <GithubIcon color="white" />
          </button>

          <button className="bg-[#0076b2] w-11 rounded-full p-2">
            <LinkedinIcon />
          </button>

          <button className="bg-red-600 w-11 rounded-full p-2">
            <Send color="white" />
          </button>
        </div>

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
