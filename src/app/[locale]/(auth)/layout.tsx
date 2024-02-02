type Props = {
  children: React.ReactNode
  params: { locale: string }
}
export default async function RootLayout({ children }: Readonly<Props>) {
  return <>{children}</>
}
