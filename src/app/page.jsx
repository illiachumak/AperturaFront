import Link from "next/link"
export default function Home() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/shop'>hello</Link>
    </main>
  )
}
