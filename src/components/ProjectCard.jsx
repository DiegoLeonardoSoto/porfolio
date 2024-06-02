export const ProjectCard = () => {
  return (
    <div className="flex h-96 min-w-96 flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl">Journal app</p>
        <div className="flex gap-4">
          <a className="cursor-pointer rounded-full border border-solid border-black px-4 py-1">
            Code
          </a>
          <a className="cursor-pointer rounded-full border border-solid border-black px-4 py-1">
            Live
          </a>
        </div>
      </div>
      <div className="h-full w-full rounded-2xl bg-red-600"></div>
    </div>
  );
};
