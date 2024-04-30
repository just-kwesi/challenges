import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

import { SiteHeader } from '@/components/ui/layout/SiteHeader'
import { SiteFooter } from '@/components/ui/layout/SiteFooter'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Game Clips',
  description: 'Get your game clips ranked',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background max-w-screen-lg mx-auto">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Toaster />
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
