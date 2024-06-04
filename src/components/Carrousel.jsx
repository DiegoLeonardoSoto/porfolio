import { ProjectCard } from "./ProjectCard";
import Slider from "react-slick";
import { projects } from "../projects.json";
import { useState } from "react";

export const Carrousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slideToScroll: 3,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="gap-5">
      <Slider {...settings}>
        {projects.map((project, i) => {
          return (
            <ProjectCard
              {...project}
              key={crypto.randomUUID()}
              styles={i === slideIndex ? "slide slide-active" : "slide"}
            />
          );
        })}
      </Slider>
    </div>
  );
};
