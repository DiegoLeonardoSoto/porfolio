import { SocialMediaButton } from "./SocialMediaButton";

export const ProjectCard = () => {
  return (
    <div className="flex w-[550px] flex-col gap-4 rounded-2xl border-2 border-black bg-white p-8 shadow-[14px_16px_28px_-3px_rgba(0,0,0,0.75)]">
      <h4 className="border-b-2 border-black text-2xl font-bold tracking-widest">
        JOURNAL APP
      </h4>
      <p className="text-sm text-neutral-600">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>

      <div className="h-72 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <div className="flex justify-between">
        <div className="flex w-3/5 items-center gap-4 overflow-hidden text-sm text-neutral-700">
          <span className="rounded-full bg-neutral-200 px-4 py-2"> React</span>
          <span className="rounded-full bg-neutral-200 px-4 py-2">
            TailwindCSS
          </span>
          <span className="rounded-full bg-neutral-200 px-4 py-2">
            Firebase
          </span>
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
