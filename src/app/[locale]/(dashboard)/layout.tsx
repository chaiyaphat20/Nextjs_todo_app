import MainLayout from './main-layout'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return <MainLayout>{children}</MainLayout>
}
