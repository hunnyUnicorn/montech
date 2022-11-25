import Head from 'next/head'
import Image from 'next/image'

import Landing from '@/components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chess Games</title>
        <link rel='icon' href='/favicon.ico' />        
      </Head>
      <main className='w-screen h-screen flex items-center justify-center'>
        <Landing/>
      </main>
    </div>
  )
}
