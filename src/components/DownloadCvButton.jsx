export const DownloadCvButton = () => {
  return (
    <div className="w-3/4 mt-10 font-Roboto">
      <div
        style={{
          animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'
        }}
      >
        <button className="dark:bg-neutral-400 w-full bg-slate-900 duration-200 ">
          <div className="bg-white hover:bg-[#fddf28] dark:bg-slate-900 dark:border-neutral-400 active:translate-x-0 active:translate-y-0 flex justify-center items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
            <h4 className="dark:text-neutral-400 duration-200">
              <div className="flex justify-start items-center">
                Descargar CV
              </div>
            </h4>
          </div>
        </button>
      </div>
    </div>
  )
}
