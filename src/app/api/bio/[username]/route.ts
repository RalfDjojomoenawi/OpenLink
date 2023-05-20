import { NextResponse } from 'next/server'
import prisma from '@/libs/prismadb'

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      username: string
    }
  }
) {
  try {
    if (!params) {
      throw new Error('No username')
    }

    const { username } = params

    console.log('params', username)
    const bio = await prisma.bio.findUnique({
      where: {
        username: username,
      },
    })

    return NextResponse.json({
      ok: true,
      bio: {
        name: bio?.name,
        avatar: bio?.avatar,
        description: bio?.description,
        footerDesc: bio?.footerDesc,
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
    })
  }
}
