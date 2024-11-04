import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import SendEmail from '@/components/SendEmail'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <MobileNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        
        <SendEmail />
      </main>
      <Footer />
    </div>
  )
}