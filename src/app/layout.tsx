import "./globals.css";
import { Montserrat } from 'next/font/google'

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
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
