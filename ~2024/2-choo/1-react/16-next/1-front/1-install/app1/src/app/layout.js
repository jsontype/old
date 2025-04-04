import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>헤더임</header>
      <body className={inter.className}>{children}</body>
      <footer>푸터임</footer>
    </html>
  )
}
