import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/booking-form"
import PromoSection from "@/components/promo-section"
import NewsSection from "@/components/news-section"
import PaymentMethods from "@/components/payment-methods"
import Order from "@/components/order"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <BookingForm />
      </div>
      <PromoSection />
      <NewsSection />
      <PaymentMethods />
      <Order />
      <Footer />
    </div>
  )
}
