import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'



export const metadata = {
  title: 'Apertura',
  description: 'Apertura furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
