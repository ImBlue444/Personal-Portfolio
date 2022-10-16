import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import HomeBio from '../components/HomeBio'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dennis Badagliacca WebDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <HomeBio />

    </div>
  )
}
