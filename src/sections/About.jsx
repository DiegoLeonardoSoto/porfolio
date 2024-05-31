import { UnderlineName } from '../assets'
import { AboutLineDown } from '../assets/AboutLineDown'
import { AboutLineUp } from '../assets/AboutLineUp'
import { SectionHighlight } from '../assets/SectionHighlight'
import { TechStackBar } from '../components/TechStackBar'
import { ToolBar } from '../components/ToolBar'
import { LayoutSection } from '../layout/LayoutSection'

export const About = () => {
  return (
    <LayoutSection
      name={'about'}
      styles={'shadow-[0_0_43px_-10px_rgba(0,0,0,0.75)] text-neutral-600 py-16'}
    >
      <div className="z-40 flex w-3/4 gap-12 mb-32 ">
        <div className="flex-1">
          <div className="inline-block relative mb-4">
            <h1 className="font-PermanentMarker text-5xl text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-stroke-1 my-2">
              Sobre mi
            </h1>
            <UnderlineName />
          </div>
          <div className="flex flex-col gap-3 ">
            <p>
              Hola, soy Diego Soto, tengo 25 años y soy de Argentina. Aunque
              siempre me gustaron el dibujo y el diseño, decidí entrar en el
              mundo de la programación a través de la universidad, donde aprendí
              los principios básicos.
            </p>

            <p>
              Actualmente me encuentro terminando mis estudios de programación
              en la carrera de Analista Programador Universitario, y además,
              cursando el tercer año de la carrera de Diseño Gráfico.
            </p>

            <p>
              Me encanta enfocarme en la parte del diseño para poder ofrecer la
              mejor experiencia al usuario. Mi objetivo es crecer
              profesionalmente, ofreciendo mi creatividad y mi atención al
              detalle.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="inline-block relative mb-4">
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
          <div className="flex">
            <div className="flex-1">
              <div className="inline-block relative mb-4">
                <h3 className="font-PermanentMarker text-lg text-black">
                  Idioma
                </h3>
                <SectionHighlight />
              </div>

              <p>Español - Nativo</p>
              <p>Inglés - Intermedio</p>
            </div>

            <div className="flex-[2]">
              <div className="inline-block relative mb-4">
                <h3 className="font-PermanentMarker text-lg text-black">
                  Hobbys
                </h3>
                <SectionHighlight />
              </div>
              <p>Videojuegos - Música - Guitarra - Dibujo - Karate</p>
            </div>
          </div>

          <div>
            <div className="inline-block relative mb-4">
              <h3 className="font-PermanentMarker text-lg text-black">
                Contacto
              </h3>
              <SectionHighlight />
            </div>
            <div className="flex justify-between">
              <button>Github</button>
              <button>Linkedin</button>
              <button>Whatsapp</button>
              <button>Email</button>
            </div>
          </div>
        </div>
      </div>

      <TechStackBar />
      <ToolBar />

      <AboutLineUp />
      <AboutLineDown />
    </LayoutSection>
  )
}
