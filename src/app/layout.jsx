import './globals.css'



export const metadata = {
  title: 'Apertura',
  description: 'Apertura furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
