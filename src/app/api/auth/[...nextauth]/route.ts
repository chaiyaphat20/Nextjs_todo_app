import authOption from '@/app/utils/auth/authOption'
import NextAuth from 'next-auth/next'

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }
