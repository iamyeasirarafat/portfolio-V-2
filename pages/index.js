import Head from 'next/head'
import Navbar from '../src/Components/Navbar'

export default function Home() {
  return (
    <div className='bg-[#0e1630]' >
      <Head>
        <title>Yeasir Arafat -Full Stack developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-8/12 mx-auto'>
        <Navbar/>
      </div>
    </div>
  )
}
