export const Link = ({ name, icon = null, hoverStyle, href }) => {
  return (
    <div className="font-Roboto text-black">
      <div
        style={{
          animation: "scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both",
        }}
      >
        <a
          href={href}
          target="_blank"
          className="block w-full cursor-pointer rounded-full bg-slate-900 duration-200"
        >
          <div
            className={`clip group relative flex w-full -translate-x-1 -translate-y-1 items-center justify-center overflow-hidden rounded-full border-2 border-slate-900 bg-white px-4 py-2 duration-200 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:content-[''] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:text-white ${hoverStyle} active:translate-x-0 active:translate-y-0`}
          >
            <h4 className="z-10 flex w-full items-center justify-center gap-1 text-sm duration-200">
              {name}

              {icon !== null && <div className="w-fit">{icon}</div>}
            </h4>
          </div>
        </a>
      </div>
    </div>
  );
};
