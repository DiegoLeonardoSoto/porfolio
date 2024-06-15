import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("global");
  const years =
    new Date(Date.now()).getFullYear() - new Date(1999, 3, 28).getFullYear();

  return (
    <LayoutSection
      name={"about"}
      styles={
        "shadow-[0_0_43px_-10px_rgba(0,0,0,0.75)] text-neutral-600 py-20 md:py-28 dark:bg-neutral-900 dark:text-white dark:shadow-neutral-700"
      }
    >
      <div className="z-40 grid grid-cols-4 gap-4 gap-y-6 md:mb-32">
        <div className="col-span-4 text-center md:text-left">
          <div className="relative mb-4 inline-block">
            <h1 className="font-PermanentMarker text-6xl text-white drop-shadow-[7px_5px_0px_rgba(0,0,0,1)] text-stroke-2 dark:text-black dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] dark:text-stroke-2-white md:my-2">
              {t("about_me.title")}
            </h1>
            <UnderlineName />
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 md:pr-24">
          <div className="flex flex-col gap-3 text-center md:text-start">
            <p>{t("about_me.paragraph1")}</p>

            <p>{t("about_me.paragraph2")}</p>

            <p>{t("about_me.paragraph3")}</p>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-4 md:col-span-2">
          <div>
            <div className="relative mb-4 inline-block">
              <h3 className="font-PermanentMarker text-lg text-black">
                {t("about_me.section.education.titleSection")}
              </h3>
              <SectionHighlight />
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">
                    {t("about_me.section.education.content.0.career_name")}
                  </span>{" "}
                  - {t("about_me.section.education.content.0.duration")}
                </p>
                <p>{t("about_me.section.education.content.0.institute")}</p>
              </div>

              <div className="flex flex-col">
                <p>
                  <span className="font-bold">
                    {t("about_me.section.education.content.1.career_name")}
                  </span>{" "}
                  - {t("about_me.section.education.content.1.duration")}
                </p>
                <p>{t("about_me.section.education.content.1.institute")}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 md:gap-0">
            <div className="flex-1">
              <div className="relative mb-4 inline-block">
                <h3 className="font-PermanentMarker text-lg text-black">
                  {t("about_me.section.languages.titleSection")}
                </h3>
                <SectionHighlight />
              </div>

              <p>{t("about_me.section.languages.content.spanish")}</p>
              <p>{t("about_me.section.languages.content.english")}</p>
            </div>

            <div className="flex-1 md:flex-[2]">
              <div className="relative mb-4 inline-block">
                <h3 className="font-PermanentMarker text-lg text-black">
                  {t("about_me.section.hobbies.titleSection")}
                </h3>
                <SectionHighlight />
              </div>
              <p>{t("about_me.section.hobbies.content")}</p>
            </div>
          </div>

          <div>
            <div className="relative mb-4 inline-block">
              <h3 className="font-PermanentMarker text-lg text-black">
                {t("about_me.section.contact.titleSection")}
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
                name={"LinkedIn"}
                icon={<LinkedinIcon />}
                hoverStyle="after:bg-sky-600 hover:bg-sky-600"
                href="https://www.linkedin.com/in/diego-soto-72a097238/"
              />
              <Link
                name={"WhatsApp"}
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
