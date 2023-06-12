const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function PrivateLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className='mx-auto h-full max-w-5xl'>{children}</div>
}
