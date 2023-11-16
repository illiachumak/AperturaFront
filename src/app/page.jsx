import Link from "next/link"
import BG from '../../public/wooden.png'
export default function Home() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-wooden" style={{backgroundImage: `src:(${BG})`,height: "972px"}}>
      <Link href='/shop'>hello</Link>
    </main>
  )
}
