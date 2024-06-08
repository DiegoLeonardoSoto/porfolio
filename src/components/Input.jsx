export const Input = ({
  label,
  name,
  type,
  placeholder,
  icon = null,
  register,
  errorMessage,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="relative mb-2 flex justify-between text-sm font-medium text-gray-900 before:absolute before:-left-3 before:font-extrabold before:text-red-500 before:content-['*']"
      >
        {label}
        {errorMessage && (
          <span className="text-red-500">{errorMessage.toString()}</span>
        )}
      </label>
      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 ${errorMessage ? "text-red-500" : "text-gray-900"}`}
        >
          {icon}
        </div>

        {type !== "textarea" ? (
          <input
            {...register}
            type={type}
            name={name}
            id={name}
            className={`peer block w-full rounded-lg border-2 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 outline-none duration-200 ${errorMessage ? "border-red-300 placeholder:text-red-300 focus:border-red-500 focus:shadow-[7px_7px_0px_0px_rgba(239,68,68,1)]" : "border-gray-300 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]"} dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
            placeholder={placeholder}
            autoComplete="off"
          />
        ) : (
          <textarea
            {...register}
            id={name}
            name={name}
            rows="4"
            className={`block w-full rounded-lg border-2 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none duration-200 ${errorMessage ? "border-red-300 focus:border-red-500 focus:shadow-[7px_7px_0px_0px_rgba(239,68,68,1)]" : "border-gray-300 focus:border-black focus:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]"} dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
            placeholder={placeholder}
          ></textarea>
        )}
      </div>
    </>
  );
};
