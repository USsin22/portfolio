import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/Projects";
import ServicesSection from "./components/Services";
import About from "./components/About";
import HeroCTA from "./components/HeroCTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PricingWidget from "./components/Pricing"
function App() {
  return (
    <div className="bg-[#f2eee3] min-h-screen  font-sans selection:bg-brandAccent/30 selection:text-brandIvory">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <FeaturedWork />
        <ServicesSection />
        {/* <About /> */}
        <Testimonials />
        <PricingWidget />
        <HeroCTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
