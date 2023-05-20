import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import prisma from '@/libs/prismadb'

export async function getSession() {
  return getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()
    if (!session) return null

    const user = await prisma.user.findUnique({
      where: {
        email: session.user!.email as string,
      },
    })

    if (!user) return null
    return user
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
