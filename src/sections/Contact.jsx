import { Toaster } from "sonner";
import { UnderlineName } from "../assets";
import { LineContactDownDraw } from "../assets/LineContactDownDraw";
import { LineContactUpDraw } from "../assets/LineContactUpDraw";
import { ContactForm } from "../components/ContactForm";
import { LayoutSection } from "../layout/LayoutSection";

export const Contact = () => {
  return (
    <LayoutSection
      name={"contact"}
      styles={
        "shadow-[0_0_43px_-10px_rgba(0,0,0,0.75)] py-40 dark:bg-neutral-900 dark:shadow-neutral-700"
      }
    >
      <div className="z-40 flex w-3/5 flex-col items-center justify-center">
        <h2 className="relative inline-block font-PermanentMarker">
          <span className="dark:text-stroke-2-white my-2 text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 dark:text-black dark:drop-shadow-[7px_5px_0px_rgba(255,255,255,1)]">
            Contacto
          </span>
          <UnderlineName />
        </h2>
        <ContactForm />
      </div>
      <LineContactDownDraw />
      <LineContactUpDraw />
      <Toaster richColors />
    </LayoutSection>
  );
};
