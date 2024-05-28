import { useEffect, useState } from 'react'
import { SunIcon } from '../assets'
import MoonIcon from '../assets/MoonIcon'

export const ToggleDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <MoonIcon width="30px" />
      </span>
      <input
        onChange={handleChangeTheme}
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-300 dark:peer-focus:ring-neutral-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <SunIcon width="30px" />
      </span>
    </label>
  )
}
