import { SocialMediaButton } from "./SocialMediaButton";

export const ProjectCard = ({ title, description, codeUrl, img, tags }) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border-2 border-black bg-white p-8 shadow-[6px_6px_25px_-7px_rgba(0,0,0,0.75)]`}
    >
      <h4 className="border-b-2 border-black text-2xl font-bold tracking-widest">
        {title.toUpperCase()}
      </h4>
      <p className="text-sm text-neutral-600">{description}</p>

      <div className="h-72 w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
        {img}
      </div>
      <div className="flex justify-between">
        <div className="flex w-1/3 items-center gap-4 overflow-hidden text-sm text-neutral-700">
          <span> React</span>
          <span>TailwindCSS</span>
          <span>Firebase</span>
        </div>

        <div className="flex gap-4">
          <SocialMediaButton
            name="Code"
            hoverStyle="after:bg-blue-600 hover:bg-blue-600"
          />
          <SocialMediaButton
            name="Live"
            hoverStyle="after:bg-violet-600 hover:bg-violet-600"
          />
        </div>
      </div>
    </div>
  );
};
