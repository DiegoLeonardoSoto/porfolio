export const SubTitleLine = ({ children }) => {
  return (
    <div className="flex w-[110%] flex-wrap justify-evenly gap-2">
      <svg
        className="w-5 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.24 11.93"
      >
        <path
          className="fill-black dark:fill-white"
          d="m35.65,4.24c.08,0,.1,0,.2.07.69.42,1.71,1.53.11,2.91-.03.03-.17.12-.24.13l-5.17.1c-5.42.09-10.85.14-16.27.13h-2.88s-4.74-.35-8.05-.87C-2.27,5.97,0,5.32,3.49,5c-.18-.04,1.9-.15,4.03-.27,2.14-.12,4.3-.24,4.3-.24h2.46c5.41.01,10.81-.04,16.22-.13l5.15-.11Z"
        />
      </svg>
      {children}
      <svg
        className="w-5 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.24 11.93"
      >
        <path
          className="fill-black dark:fill-white"
          d="m1.06,7.35c-.08,0-.1,0-.2-.08-.68-.46-1.64-1.61.03-2.91.03-.02.17-.11.25-.12l5.15.11c5.41.1,10.81.15,16.22.15h2.87s4.72.29,8.04.72c5.63.58,3.4,1.3-.09,1.72.18.03-1.9.21-4.04.36-2.14.15-4.31.29-4.31.29h-2.47c-5.43.01-10.85-.04-16.27-.13l-5.17-.11Z"
        />
      </svg>
    </div>
  );
};
