import {
  GithubIcon,
  LinkedinIcon,
  SendIcon,
  UnderlineName,
  AboutLineDown,
  AboutLineUp,
  SectionHighlight,
  WhatsappIcon,
  ContactMeDraw,
  TechStackDraw,
  ToolsDraw,
  MailIcon,
} from "../assets";

import { Link, TechStackBar, ToolBar } from "../components";
import { LayoutSection } from "../layout/LayoutSection";

export const About = () => {
  const years =
    new Date(Date.now()).getFullYear() - new Date(1999, 3, 28).getFullYear();

  return (
    <LayoutSection
      name={"about"}
      styles={
        "shadow-[0_0_43px_-10px_rgba(0,0,0,0.75)] text-neutral-600 py-20 md:py-28 dark:bg-neutral-900 dark:text-white dark:shadow-neutral-700"
      }
    >
      <div className="z-40 grid w-4/5 grid-cols-4 gap-4 gap-y-6 md:mb-32 md:w-3/4">
        <div className="col-span-4 text-center md:text-left">
          <div className="relative mb-4 inline-block">
            <h1 className="font-PermanentMarker text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 dark:text-black dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:text-stroke-2-white md:my-2">
              Sobre mi
            </h1>
            <UnderlineName />
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 md:pr-24">
          <div className="flex flex-col gap-3 text-center md:text-start">
            <p>
              {`Hola 👋, soy Diego Soto, tengo ${years} años y soy de `}
              <strong>{`Argentina 🇦🇷`}</strong>
              {`. Aunque siempre me gustaron el dibujo y el diseño, decidí entrar en el
  mundo de la programación a través de la universidad, donde aprendí
  los principios básicos de la programacion.`}
            </p>

            <p>
              <strong>Actualmente</strong> me encuentro{" "}
              <strong>terminando</strong> mis estudios en la carrera de{" "}
              <strong>Analista Programador Universitario</strong> , y además,
              cursando el tercer año de la carrera de
              <strong> Diseño Gráfico</strong>.
            </p>

            <p>
              Me encanta enfocarme en la parte del <strong>diseño</strong> para
              poder ofrecer la mejor <strong>experiencia al usuario</strong>. Mi
              objetivo es crecer profesionalmente, ofreciendo mi{" "}
              <strong>creatividad</strong> y mi{" "}
              <strong>atención al detalle</strong> .
            </p>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-4 md:col-span-2">
          <div>
            <div className="relative mb-4 inline-block">
              <h3 className="font-PermanentMarker text-lg text-black">
                Eduacion
              </h3>
              <SectionHighlight />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">Diseño Gráfico</span> - 2020 - En
                  curso
                </p>
                <p>Instituto Superior San Martín</p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-bold">
                    Analista Programador Universitario
                  </span>
                </p>
                <p>Universidad Nacional San Juan Bosco</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 md:gap-0">
            <div className="flex-1">
              <div className="relative mb-4 inline-block">
                <h3 className="font-PermanentMarker text-lg text-black">
                  Idioma
                </h3>
                <SectionHighlight />
              </div>

              <p>Español - Nativo</p>
              <p>Inglés - Intermedio</p>
            </div>

            <div className="flex-1 md:flex-[2]">
              <div className="relative mb-4 inline-block">
                <h3 className="font-PermanentMarker text-lg text-black">
                  Hobbys
                </h3>
                <SectionHighlight />
              </div>
              <p>Videojuegos - Música - Guitarra - Dibujo - Karate</p>
            </div>
          </div>

          <div>
            <div className="relative mb-4 inline-block">
              <h3 className="font-PermanentMarker text-lg text-black">
                Contacto
              </h3>
              <SectionHighlight />
            </div>
            <div className="my-4 flex flex-wrap justify-between gap-1 md:gap-0">
              <Link
                name={"Github"}
                icon={<GithubIcon />}
                hoverStyle="after:bg-blue-600 hover:bg-blue-600"
                href="https://github.com/DiegoLeonardoSoto"
              />
              <Link
                name={"Linkedin"}
                icon={<LinkedinIcon />}
                hoverStyle="after:bg-sky-600 hover:bg-sky-600"
                href="https://www.linkedin.com/in/diego-soto-72a097238/"
              />
              <Link
                name={"Whatsapp"}
                icon={<WhatsappIcon />}
                hoverStyle="after:bg-green-600  hover:bg-green-600"
                href="https://wa.me/542974326618"
              />
              <Link
                name={"Email"}
                icon={<MailIcon />}
                hoverStyle="after:bg-red-600 hover:bg-red-600"
                href="mailto:leonardo.soto123@hotmail.com"
              />
            </div>

            <ContactMeDraw />
          </div>
        </div>

        <div className="relative col-span-4 mt-20">
          <TechStackBar />
          <TechStackDraw />
        </div>

        <div className="relative col-span-4 mt-20 md:mt-6">
          <ToolBar />
          <ToolsDraw />
        </div>
      </div>

      <AboutLineUp />
      <AboutLineDown />
    </LayoutSection>
  );
};
