'use client'

import { getCombinePathWithLocal } from '@/app/utils/share-function'
import { signIn } from 'next-auth/react'

export default function Content() {
  const signInGoogle = async () => {
    await signIn('google', {
      redirect: true,
      callbackUrl: getCombinePathWithLocal('todo')
    })
  }
  return (
    <div>
      <button onClick={signInGoogle}>sign in with google</button>
    </div>
  )
}
