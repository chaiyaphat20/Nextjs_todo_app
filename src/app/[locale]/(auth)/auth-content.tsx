'use client'

import { getCombinePathWithLocal } from '@/app/utils/share-function'
import { Session } from 'next-auth'
import { useCookies } from 'next-client-cookies'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type Props = {
  session: Session | null
}

const AuthContent = ({ session }: Props) => {
  const router = useRouter()
  const cookies = useCookies()
  const localPathCookie = cookies.get('NEXT_LOCALE')
  console.log(localPathCookie)
  console.log(session)
  useEffect(() => {
    if (session === null) {
      router.replace(getCombinePathWithLocal('sign-in', localPathCookie)) // ถ้า session เป็น null ให้ redirect ไปยัง '/login'
    } else {
      router.replace(getCombinePathWithLocal('todo', localPathCookie))
    }
  }, [session, router])

  return <div>Loading ....</div>
}
export default AuthContent
