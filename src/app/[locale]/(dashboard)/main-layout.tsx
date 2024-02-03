'use client'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
type PropsType = {
  children: React.ReactNode
  session: Session | null
}

export default function MainLayout({ children, session }: Readonly<PropsType>) {
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
        <div className="max-w-screen-xl flex flex-wrap items-center lg:justify-between justify-center mx-auto p-4">
          <a className="flex items-center  space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TODO APP
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-1 hi md:space-x-0 rtl:space-x-reverse"></div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
            id="navbar-language"
          >
            <h1>Hello {session?.user?.name}</h1>
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
