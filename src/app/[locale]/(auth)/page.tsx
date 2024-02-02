import authOption from '@/app/utils/auth/authOption'
import { getServerSession } from 'next-auth'
import AuthContent from './auth-content'

export default async function IndexPage() {
  const session = await getServerSession(authOption)
  return <AuthContent session={session} />
}
