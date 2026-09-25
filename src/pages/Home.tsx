import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import ImpactStats from '@/sections/ImpactStats'
import Mission from '@/sections/Mission'
import Campaigns from '@/sections/Campaigns'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Programs from '@/sections/Programs'
import Transparency from '@/sections/Transparency'
import News from '@/sections/News'
import PartnersStrip from '@/components/PartnersStrip'
import DonateCTA from '@/sections/DonateCTA'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <Mission />
        <Programs />
        <Campaigns />
        <TestimonialCarousel />
        <Transparency />
        <News />
        <PartnersStrip />
        <DonateCTA />
      </main>
      <Footer />
    </div>
  )
}
