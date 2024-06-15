import { useTranslation } from "react-i18next";
import { LiveIcon } from "../assets";
import { CodeIcon } from "../assets/CodeIcon";
import { Link } from "./Link";

export const ProjectCard = ({
  title,
  description,
  codeUrl,
  liveUrl,
  img,
  tags,
}) => {
  const [t, i18next] = useTranslation("global");

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border-2 border-black bg-white p-8 shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.75)] dark:shadow-black`}
    >
      <h4 className="border-b-2 border-black text-2xl font-bold tracking-widest">
        {title.toUpperCase()}
      </h4>
      <p className="text-sm text-neutral-600">
        {description[i18next.language]}
      </p>
      <div className="flex flex-wrap items-center gap-4 overflow-hidden text-sm text-neutral-700">
        {tags.map((tag) => {
          return (
            <span key={tag} className="rounded-full bg-gray-200 px-3 py-2">
              {tag}
            </span>
          );
        })}
      </div>
      <img
        className="rounded-xl"
        src={img}
        alt={title.toLowerCase() + "Image"}
      />
      <div className="flex justify-end">
        <div className="flex gap-4">
          <Link
            name="Code"
            hoverStyle="after:bg-blue-600 hover:bg-blue-600"
            icon={<CodeIcon />}
            href={codeUrl}
          />
          <Link
            name="Live"
            hoverStyle="after:bg-violet-600 hover:bg-violet-600"
            icon={<LiveIcon />}
            href={liveUrl}
          />
        </div>
      </div>
    </div>
  );
};
