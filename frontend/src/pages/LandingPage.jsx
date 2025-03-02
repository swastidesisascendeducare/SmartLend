import React from "react";
import Navbar from "../components/PublicNavbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks"; // Renamed for consistency
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <section id="home" aria-label="Home Section">
        <Hero />
      </section>
      
      <section id="about" aria-label="About Us">
        <About />
      </section>

      <section id="how-it-works" aria-label="How It Works">
        <HowItWorks />
      </section>

      <section id="faq" aria-label="Frequently Asked Questions">
        <Faq />
      </section>

      <section id="contact" aria-label="Contact Us">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default LandingPage;
