import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import getCurrentUser from '@/actions/getUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
