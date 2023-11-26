import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import ReduxProvider from './redux/Provider'


export const metadata = {
  title: 'Apertura',
  description: 'Apertura furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className='flex justify-center flex-col'>
       <Navbar/>

            {children}

        <Footer/>
      </body>
    </html>
  )
}
