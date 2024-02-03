import React from 'react'
;('react-icons/fa')
type PropsType = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Readonly<PropsType>) {
  return (
    <div className="flex flex-col w-screen h-screen font-medium">
      {children}
    </div>
  )
}
