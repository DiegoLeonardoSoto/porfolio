import {
  ArrowProjectDraw,
  UnderlineName,
  DotsBackground,
  LinesProjectLeftDraw,
  LinesProjectRightDraw,
} from "../assets";
import { Carrousel } from "../components/Carrousel";
import { LayoutSection } from "../layout/LayoutSection";

export const Projects = () => {
  return (
    <LayoutSection name={"projects"} styles={`py-28`}>
      <DotsBackground />

      <h2 className="relative mb-6 flex flex-col items-center font-PermanentMarker">
        <span className="my-2 text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2">
          Proyectos
        </span>
        <UnderlineName />
        <LinesProjectLeftDraw />
        <LinesProjectRightDraw />
      </h2>

      <ArrowProjectDraw />

      <div className="mt-6 flex w-3/4 flex-col">
        <div className="flex items-center gap-4">
          <p className="min-w-max text-2xl font-bold">PROYECTOS PERSONALES</p>
          <hr className="w-full border-2 border-black" />
        </div>
        <Carrousel />
      </div>
    </LayoutSection>
  );
};
