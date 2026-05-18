import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/globals.css";
import "./styles/animations.css";   /* ← ALL animations live here */


import useDarkMode    from "./hooks/useDarkMode";
import useAnimations  from "./hooks/useAnimations";

/* Layout */
import Navbar         from "./card/components/Navbar/Navbar";
import Footer         from "./card/components/Footer/Footer";
import WhatsAppButton from "./card/components/WhatsAppButton/WhatsAppButton";
import ScrollToTop    from "./card/components/ScrollToTop/ScrollToTop";

/* Sections */
import Hero          from "./card/components/Hero/Hero";
import ReviewsStrip  from "./card/components/ReviewsStrip/ReviewsStrip";
import Clients       from "./card/components/Clients/Clients";
import Services      from "./card/components/Services/Services";
import Stats         from "./card/components/Stats/Stats";
import Skills        from "./card/components/Skills/Skills";
import Portfolio     from "./card/components/Portfolio/Portfolio";
import CTABanner     from "./card/components/CTABanner/CTABanner";
import Process       from "./card/components/Process/Process";
import WhyUs         from "./card/components/WhyUs/WhyUs";
import Pricing       from "./card/components/Pricing/Pricing";
import Testimonials  from "./card/components/Testimonials/Testimonials";
import FAQ           from "./card/components/FAQ/FAQ";
import Contact       from "./card/components/Contact/Contact";

/* Pages */
import AboutPage         from "./pages/AboutPage";
import OurWorkPage       from "./pages/OurWorkPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

function HomePage() {
  return (
    <>
      <Hero />
      <ReviewsStrip />
      <Clients />
      <Services />
      <Stats />
      <Skills />
      <Portfolio />
      <CTABanner />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, toggleDark]      = useDarkMode();
  const location                = useLocation();

  /* Scroll progress bar + reveal observer */
  useAnimations();

  /* Navbar background on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Scroll to top on route change */
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      <Navbar scrolled={scrolled} dark={dark} toggleDark={toggleDark} />

      <Routes location={location}>
        <Route path="/"               element={<HomePage />} />
        <Route path="/about"          element={<AboutPage />} />
        <Route path="/our-work"       element={<OurWorkPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}