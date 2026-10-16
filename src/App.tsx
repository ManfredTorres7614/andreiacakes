import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrandHighlights from './components/BrandHighlights'
import ProductsSection from './components/ProductsSection'
import ExperienceSection from './components/ExperienceSection'
import BrandStorySection from './components/BrandStorySection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandHighlights />
        <ProductsSection />
        <ExperienceSection />
        <BrandStorySection />
        <GallerySection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}

export default App
