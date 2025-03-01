import React from "react";
import HowItWorks from "../components/How-It-Works";
import Navbar from "../components/PublicNavbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="how-it-works">
        <HowItWorks/>
      </section>
      <section id="faq">
        <Faq/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
