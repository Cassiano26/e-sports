import "./globals.css";
import { Montserrat } from 'next/font/google'
import { NavBar } from "../components/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body
        className={`antialiased`}
      >
        <div className="w-[1728px] ml-auto mr-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
