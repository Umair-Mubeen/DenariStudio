import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Styles
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/heritage.css";
import "./styles/extras.css";

// Hooks
import useDarkMode   from "./hooks/useDarkMode";
import useAnalytics  from "./hooks/useAnalytics";

// Layout
import Navbar             from "./card/components/Navbar/Navbar";
import Footer             from "./card/components/Footer/Footer";
import WhatsAppButton     from "./card/components/WhatsAppButton/WhatsAppButton";
import ScrollToTop        from "./card/components/ScrollToTop/ScrollToTop";
import HeritageModeToggle from "./patterns/HeritageModeToggle/HeritageModeToggle";
import NationalDayBanner  from "./patterns/NationalDayBanner/NationalDayBanner";
import CookieConsent      from "./sections/CookieConsent";
import PageLoader         from "./sections/PageLoader";

// Sections
import Hero                  from "./card/components/Hero/Hero";
import ReviewsStrip          from "./card/components/ReviewsStrip/ReviewsStrip";
import Clients               from "./card/components/Clients/Clients";
import Services              from "./card/components/Services/Services";
import Stats                 from "./card/components/Stats/Stats";
import Skills                from "./card/components/Skills/Skills";
import Portfolio             from "./card/components/Portfolio/Portfolio";
import CTABanner             from "./card/components/CTABanner/CTABanner";
import Process               from "./card/components/Process/Process";
import WhyUs                 from "./card/components/WhyUs/WhyUs";
import ProvincesShowcase     from "./patterns/ProvincesShowcase/ProvincesShowcase";
import PakistanMap           from "./patterns//PakistanMap/PakistanMap";
import Pricing               from "./card/components/Pricing/Pricing";
import Testimonials          from "./card/components/Testimonials/Testimonials";
import GoogleReviewsWidget   from "./sections/GoogleReviewsWidget";
import FAQ                   from "./card/components/FAQ/FAQ";
import Newsletter            from "./sections/Newsletter";
import Contact               from "./card/components/Contact/Contact";
import CitiesStrip           from "./patterns/CitiesStrip/CitiesStrip";

// UI
import SEO from "./card/components/ui/SEO";

// Pages
import AboutPage         from "./pages/AboutPage";
import OurWorkPage       from "./pages/OurWorkPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BlogPage          from "./pages/BlogPage";
import BlogPostPage      from "./pages/BlogPostPage";
import CaseStudyPage     from "./pages/CaseStudyPage";
import NotFoundPage      from "./pages/NotFoundPage";

function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <ReviewsStrip />
      <Clients />
      <Services />
      <Stats />
      <Skills />
      <Portfolio />
      <ProvincesShowcase />
      <PakistanMap />
      <CTABanner />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <GoogleReviewsWidget />
      <FAQ />
      <Newsletter />
      <CitiesStrip />
      <Contact />
    </>
  );
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, toggleDark]      = useDarkMode();
  const location                = useLocation();
  useAnalytics();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <>
      <PageLoader />
      <NationalDayBanner />
      <Navbar scrolled={scrolled} dark={dark} toggleDark={toggleDark} />

      <Routes location={location}>
        <Route path="/"                  element={<HomePage />} />
        <Route path="/about"             element={<AboutPage />} />
        <Route path="/our-work"          element={<OurWorkPage />} />
        <Route path="/services/:slug"    element={<ServiceDetailPage />} />
        <Route path="/case-study/:slug"  element={<CaseStudyPage />} />
        <Route path="/blog"              element={<BlogPage />} />
        <Route path="/blog/:slug"        element={<BlogPostPage />} />
        <Route path="*"                  element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <HeritageModeToggle />
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}