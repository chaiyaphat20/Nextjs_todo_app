import authOption from '@/app/utils/auth/authOption'
import { getServerSession } from 'next-auth'
import MainLayout from './main-layout'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({ children }: Readonly<Props>) {
  const session = await getServerSession(authOption)
  return <MainLayout session={session}>{children}</MainLayout>
}
