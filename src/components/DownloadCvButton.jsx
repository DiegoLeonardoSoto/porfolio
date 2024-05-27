import { DownloadIcon } from '../assets'

export const DownloadCvButton = () => {
  const HandleDownloadCv = () => {
    console.log('hello world')
  }

  return (
    <div className="w-3/4 mt-10 font-Roboto">
      <div
        style={{
          animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'
        }}
      >
        <button
          onClick={HandleDownloadCv}
          className="dark:bg-neutral-400 w-full bg-slate-900 duration-200 rounded-md"
        >
          <div className="rounded-md bg-white relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:rounded-md after:h-full clip after:bg-[#fddf28]  hover:bg-[#fddf28] dark:bg-slate-900 dark:border-neutral-400 active:translate-x-0 active:translate-y-0 flex justify-center items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full">
            <h4 className="dark:text-neutral-400 duration-200 z-10 flex w-full justify-center items-center gap-3">
              Descargar CV
              <DownloadIcon width={30} />
            </h4>
          </div>
        </button>
      </div>
    </div>
  )
}
