import type { ReactNode } from 'react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
