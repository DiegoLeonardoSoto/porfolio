export const SocialMediaButton = ({ name, icon }) => {
  const HandleDownloadCv = () => {
    console.log('hello world')
  }

  const socialMediStyle = {
    Github: 'after:bg-blue-600 hover:bg-blue-600 hover:text-white',
    Whatsapp: 'after:bg-green-600  hover:bg-green-600 hover:text-white',
    Linkedin: 'after:bg-sky-600 hover:bg-sky-600 hover:text-white',
    Email: 'after:bg-red-600 hover:bg-red-600 hover:text-white'
  }

  console.log(socialMediStyle[name])

  return (
    <div className="font-Roboto text-black">
      <div
        style={{
          animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'
        }}
      >
        <button
          onClick={HandleDownloadCv}
          className="rounded-full w-full bg-slate-900 duration-200"
        >
          <div
            className={`group overflow-hidden rounded-full bg-white relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:rounded-md after:h-full clip ${socialMediStyle[name]} active:translate-x-0 active:translate-y-0 flex justify-center items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full`}
          >
            <h4 className=" duration-200 z-10 flex w-full justify-center items-center gap-3">
              {name}

              <div className="w-7">{icon}</div>
            </h4>
          </div>
        </button>
      </div>
    </div>
  )
}
