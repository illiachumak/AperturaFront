'use client'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './globals.css'
import ReduxProvider from './redux/Provider'
import Cart from './Components/Cart'
import { store } from './redux/store'
import Loading from './Components/Loading'
export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className='flex justify-center flex-col'>
        <ReduxProvider store={store}>
          {/* <Cart/>
          <Navbar/> */}
          <div>{children}</div>
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  )
}
