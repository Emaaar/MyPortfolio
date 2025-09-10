import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Mary Mhar Perez | Portfolio",
  description: "Web Developer • UI/UX Designer • Graphic Designer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
