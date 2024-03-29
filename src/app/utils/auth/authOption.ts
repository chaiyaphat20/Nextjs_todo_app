import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? ''
    }),
    CredentialsProvider({
      id: 'password',
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'john@gmail.com' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async () => {
        const user = { id: '1', name: 'J Smith', email: 'test@gmail.com' }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in'
  },
  session: {
    strategy: 'jwt'
  },
  debug: process.env.NODE_ENV === 'development'
  // secret: process.env.NEXTAUTH_SECRET
}
export default authOptions
