import MenuImg from "../assets/menu.png"
import Head from 'next/head'
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex-shrink-2 flex flex-col items-center justify-center'>
      <Head>
        <title>Project Shelf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={MenuImg} className="grayscale" width={512/1.3} height={512/1.3}></Image>
      <section className="text-gray-600 font-semibold">
        Open Sidebar <br />
        Go to <br />
         - Shelf : To see all your projects <br />
         - Dashboard: To see the statistics related to your projects <br />
         - Settings: Control your app <br />
      </section>
    </div>
  )
}
