'use client'
import { signOut } from 'next-auth/react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
type PropsType = {
  children: React.ReactNode
}
export default function MainLayout({ children }: Readonly<PropsType>) {
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  const handleSwitchLanguage = (locale: string) => {
    const pathNameRemoveLocale = pathname.replace('/en', '').replace('/th', '')
    const path = `/${locale}${pathNameRemoveLocale}`
    router.replace(path)
  }

  return (
    <div className="flex flex-col w-screen h-screen font-medium">
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TODO APP
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"></div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  "
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="w-10" />
            <button
              onClick={() => handleSwitchLanguage('en')}
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className={` ${locale === 'en' ? 'bg-sky-200 ' : 'bg-gray-100 '}  rounded-lg inline-flex  bg-gray-100 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900  `}
            >
              English (US)
            </button>
            <div className="w-4" />
            <button
              onClick={() => handleSwitchLanguage('th')}
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className={`${locale === 'th' ? 'bg-sky-200 ' : 'bg-gray-100 '} rounded-lg inline-flex  bg-gray-100 items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 `}
            >
              Thai (TH)
            </button>

            <button
              onClick={handleSignOut}
              className="bg-gray-300 absolute  right-10   hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <FaSignOutAlt size={15} />
              <span className="ml-2">Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}
