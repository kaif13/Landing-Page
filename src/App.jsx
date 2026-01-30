import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
